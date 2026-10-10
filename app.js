// DISTORTION DAILY — tiny interactions. No frameworks, no tracking.
(function(){
  // dateline date
  var d = new Date();
  var opts = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
  document.querySelectorAll('[data-today]').forEach(function(el){
    el.textContent = d.toLocaleDateString('en-US', opts);
  });
  document.querySelectorAll('[data-year]').forEach(function(el){
    el.textContent = d.getFullYear();
  });
})();

// Seamless page transitions: swap <main> in place so DD Radio never stops playing.
// Falls back to a normal page load if anything goes wrong.
(function(){
  function fillDates(root){
    var d = new Date();
    var opts = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
    root.querySelectorAll('[data-today]').forEach(function(el){
      el.textContent = d.toLocaleDateString('en-US', opts);
    });
    root.querySelectorAll('[data-year]').forEach(function(el){
      el.textContent = d.getFullYear();
    });
  }
  function shouldHandle(a){
    if (!a || !a.href) return false;
    if (a.target === '_blank' || a.hasAttribute('download')) return false;
    var url;
    try { url = new URL(a.href); } catch(e){ return false; }
    if (url.origin !== location.origin) return false;
    if (url.hash && url.pathname.replace(/\/$/,'') === location.pathname.replace(/\/$/,'')) return false; // same-page anchor
    if (!/\.html?$/.test(url.pathname) && url.pathname.replace(/\/$/,'') !== '') return false;
    return true;
  }
  function loadPage(url, push){
    var hash = '';
    try { hash = new URL(url).hash; } catch(e){}
    try { document.title = 'PJAX-DBG: fetching ' + url; } catch(_){}
    fetch(url, {credentials:'same-origin'}).then(function(r){
      if (!r.ok) throw new Error('bad response ' + r.status);
      return r.text();
    }).then(function(html){
      try { document.title = 'PJAX-DBG: got ' + html.length + ' chars'; } catch(_){}
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var newMain = doc.querySelector('main');
      var curMain = document.querySelector('main');
      if (!newMain || !curMain) throw new Error('no main');
      curMain.innerHTML = newMain.innerHTML;
      if (doc.title) document.title = doc.title;
      fillDates(curMain);
      if (push !== false) history.pushState({url:url}, document.title, url);
      if (hash) {
        var t = document.querySelector(hash);
        if (t) { t.scrollIntoView(); return; }
      }
      window.scrollTo(0, 0);
    }).catch(function(err){
      var msg = 'PJAX-DBG FAIL: ' + (err && (err.stack || err.message || String(err)));
      try { document.title = msg.slice(0, 120); } catch(_){}
      try {
        var d = document.createElement('div');
        d.id = 'pjax-debug';
        d.style.cssText = 'position:fixed;top:0;left:0;z-index:99999;background:#b3232a;color:#fff;padding:1rem;font:14px monospace;max-width:92vw;';
        d.textContent = msg;
        document.body.appendChild(d);
      } catch(_){}
      setTimeout(function(){ location.href = url; }, 8000); // delayed fallback so the error can be read
    });
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || !shouldHandle(a)) return;
    e.preventDefault();
    if (a.href === location.href) return;
    loadPage(a.href, true);
  });
  window.addEventListener('popstate', function(e){
    var url = (e.state && e.state.url) ? e.state.url : location.href;
    loadPage(url, false);
  });
})();
