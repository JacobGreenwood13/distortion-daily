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
