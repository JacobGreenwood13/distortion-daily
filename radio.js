/* Distortion Daily Radio — YouTube audio player
 * Full tracks, no login, no Premium. Hidden video; skip-button peephole during ads.
 */
const DD_RADIO_TRACKS = [
  {id:"-g82T9yPAeQ",t:"California Über Alles — Dead Kennedys"},
  {id:"1jteJJ9yM-U",t:"Holiday in Cambodia — Dead Kennedys"},
  {id:"Fsbvo5GVK10",t:"Rise Above — Black Flag"},
  {id:"12kcpP-8jfM",t:"American Jesus — Bad Religion"},
  {id:"TYApdmp6je8",t:"21st Century (Digital Boy) — Bad Religion"},
  {id:"EDLdraFHKm8",t:"Sodom, Gomorrah, Washington D.C. — Anti-Flag"},
  {id:"e5Wxn37Tt1Y",t:"The Press Corpse — Anti-Flag"},
  {id:"s4E5NfpYTOY",t:"You Can Kill the Protester — Anti-Flag"},
  {id:"9-SQGOYOjxs",t:"Prayer of the Refugee — Rise Against"},
  {id:"Ee_uujKuJMI",t:"American Idiot — Green Day"},
  {id:"A1OqtIqzScI",t:"Holiday — Green Day"},
  {id:"Ypkmp6D90KU",t:"Straight Edge — Minor Threat"},
  {id:"ayRZ5jJ6A-g",t:"White Guilt Atrocity Quilt — Leftover Crack"},
  {id:"CSVtBPcPaWo",t:"One Dead Cop — Leftover Crack"},
  {id:"QNJbaMXUJCM",t:"Rock the 40 Oz. — Leftover Crack"},
  {id:"xCMTiJfOF94",t:"In Ashes They Shall Reap — Hatebreed"},
  {id:"HB3tmC2f3t0",t:"I Will Be Heard — Hatebreed"},
  {id:"tdkNurRmxzI",t:"Slaughterhouse-Five — Bury Your Dead"},
  {id:"iLj2mVxREak",t:"The Color of Money — Bury Your Dead"},
  {id:"sokdL-0iV9s",t:"Talk Shit, Get Shot — Body Count"},
  {id:"LoF_a0-7xVQ",t:"Institutionalized — Suicidal Tendencies"},
  {id:"nxcJW6bs5os",t:"You Can't Bring Me Down — Suicidal Tendencies"},
  {id:"_NWjehpGSO0",t:"Ball and Chain — Social Distortion"},
  {id:"kE7YoeVB6us",t:"Arise! — Amebix"},
  {id:"2sUnjIosNIc",t:"The Power Remains — Amebix"},
  {id:"SlKO2FIpSVM",t:"Vote with a Bullet — Corrosion of Conformity"},
  {id:"8J50oxoIt2I",t:"Technocracy — Corrosion of Conformity"},
  {id:"jjqoR2I_nko",t:"World Up My Ass — Circle Jerks"},
  {id:"V9n3riCpH7o",t:"The Art of American Football — Funeral For a Friend"},
  {id:"99KkbFjZR20",t:"Bite It You Scum — GG Allin"},
  {id:"wcChJCrPtwI",t:"Cokie the Clown — NOFX"},
  {id:"TU07lEBfpNo",t:"Codependence Day — NOFX"},
  {id:"nNII9dvgGDg",t:"Overrated (Everything Is) — Less Than Jake"},
  {id:"xmmQ1kUk2kI",t:"Firestorm — Earth Crisis"},
  {id:"ZHQWQI8pmqs",t:"The Wrath of Sanity — Earth Crisis"},
  {id:"qbmWs6Jf5dc",t:"Anarchy in the UK — Sex Pistols"},
  {id:"IL0nhn88aVA",t:"Die for Your Government — Anti-Flag"},
  {id:"3mbvWn1EY6g",t:"Ace of Spades — Motörhead"},
  {id:"VnL1qKYbwQQ",t:"Powerload — Disfear"},
  {id:"eIXnoH4TVts",t:"A Brutal Sight of War — Disfear"},
  {id:"J5yvIcghXTQ",t:"Pity the Weak — Fall of Efrafa"},
  {id:"7lGv3trbuBc",t:"Time for Death — GWAR"},
  {id:"2V5WlR6Rkxg",t:"Americanized — GWAR"},
  {id:"z5rRZdiu1UE",t:"Sabotage — Beastie Boys"},
  {id:"BSXCogYvQlw",t:"Headbanger Face Rip — Municipal Waste"},
  {id:"Cgf11TwNBYo",t:"Wake the Dead — Comeback Kid"},
  {id:"hn13BLQv-UE",t:"Hailing on Me — Comeback Kid"},
  {id:"XN2FrUUq-zI",t:"Ready to Fall — Rise Against"},
  {id:"_RYBDTnS7dg",t:"Re-Education (Through Labor) — Rise Against"},
  {id:"IswsKb3fmTM",t:"Raised Ignorant EP — Capitalist Casualties"},
  {id:"JrAxmXDSiuA",t:"Concubine — Converge"},
  {id:"mmo3HFa2vjg",t:"Fight the Power — Public Enemy"},
  {id:"dQw4w9WgXcQ",t:"Never Gonna Give You Up — Rick Astley"},
  {id:"2_hveXzklMA",t:"Baby Got Back (Sir Mix-A-Lot cover) — Throwdown"},
  {id:"82EzkIBdYgk",t:"The Boy Who Destroyed the World — AFI"},
  {id:"plAr3adKbyc",t:"Speed — Atari Teenage Riot"},
  {id:"U0u-OB7ztMg",t:"Start the Riot — Atari Teenage Riot"},
  {id:"IQHsRNd_Lew",t:"Into the Death — Atari Teenage Riot"},
  {id:"c4IujSNz7Tw",t:"Raverbashing — Atari Teenage Riot"},
  {id:"L3m71EoIhN4",t:"Midijunkies — Atari Teenage Riot"},
  {id:"ClKmUnncwtE",t:"I Am the Enemy — Blood for Blood"},
  {id:"1CP9Peipxzk",t:"White Trash Anthem — Blood for Blood"},
  {id:"QgXzA47_h8U",t:"Revenge on Society — Blood for Blood"},
  {id:"H8kMuluhKKQ",t:"Some Kind of Hate — Blood for Blood"},
  {id:"AvOMroxnOiU",t:"Cheap Wine — Blood for Blood"},
  {id:"OLnRlgVESEM",t:"Wasted Youth Crew (My Kind Belong Nowhere) — Blood for Blood"},
  {id:"GkCZI_uqbVI",t:"Ain't Like You (Wasted Youth II) — Blood for Blood"},
  {id:"Enm9TD0y5Ok",t:"Watch Me Sink — Have Heart"},
  {id:"6X5QrvaJdlI",t:"Life Is Hard Enough — Have Heart"},
  {id:"Yf738EgINdA",t:"Watch Me Rise — Have Heart"},
  {id:"ng_wwCrM_JI",t:"Strength Through Unity — 25 ta Life"},
  {id:"D7L03e4WuQ0",t:"Took My Kindness for Weakness — 25 ta Life"},
  {id:"l9gdBFcZ20U",t:"Turning Point — 25 ta Life"},
  {id:"7asIpGLWIh8",t:"In the Belly of a Shark — Gallows"},
  {id:"JBbzDjtXEW8",t:"Misery — Gallows"},
  {id:"7RcDzVqI250",t:"London Is the Reason — Gallows"},
  {id:"ADJ8eughJwQ",t:"The Vulture (Act I) — Gallows"},
  {id:"-RbMRszWOiA",t:"The Vulture (Act II) — Gallows"},

  {id:"9yWHSIsxIqs",t:"Victim in Pain — Agnostic Front"},

  {id:"wcvDCxhDJmk",t:"Fireman — Jawbreaker"},
  {id:"Ud1DluFNCe0",t:"Madness at the Core of Time — GWAR"},
  {id:"XvziPPpryv0",t:"Superman — Goldfinger"},
  {id:"iIiz0amrb14",t:"I Only Go to School for the Handrails — Forus"},
  {id:"sZF_VbF7-aA",t:"If All Else Fails — Forus"},
  {id:"wwue1UEhwwM",t:"War's Not Over, I've Just Found the Flag — Forus"},

  {id:"jTe1np3Vy18",t:"Slaves to the Pavement — Belvedere"},
  {id:"ywsTkaXM5do",t:"I Wipe My Ass with Showbiz — A Wilhelm Scream"},

  {id:"HSoWS2Tab_4",t:"The King Is Dead — A Wilhelm Scream"},
  {id:"wD0ge1OclsY",t:"The Rip — A Wilhelm Scream"},
  {id:"mxwcgHYC7eY",t:"Assimilate — Skinny Puppy"},
  {id:"5wdAD6eCmjM",t:"Worlock — Skinny Puppy"},
  {id:"kUCatOT1D-Q",t:"Paragun — Skinny Puppy"},
  {id:"zhPx9QdzNpA",t:"N.W.O. — Ministry"}
];

(function(){
  const bar = document.getElementById('dd-radio');
  if (!bar) return;

  let player = null, currentIdx = 0, shuffleOn = true, repeatOn = false;

  // Cross-page persistence: remember track, order, and position in localStorage
  const DD_RADIO_STATE_KEY = 'dd-radio-state-v1';
  function freshOrder(){
    const a = DD_RADIO_TRACKS.map((_,i)=>i);
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; }
    return a;
  }
  function loadState(){
    try {
      const s = JSON.parse(localStorage.getItem(DD_RADIO_STATE_KEY) || 'null');
      if (!s || !Array.isArray(s.order) || s.n !== DD_RADIO_TRACKS.length) return null;
      if (Date.now() - s.ts > 3600*1000) return null; // stale after an hour
      if (typeof s.idx !== 'number' || s.idx < 0 || s.idx >= s.order.length) return null;
      const ti = s.order[s.idx];
      if (!DD_RADIO_TRACKS[ti] || DD_RADIO_TRACKS[ti].id !== s.vid) return null;
      return s;
    } catch(e){ return null; }
  }
  function saveState(){
    if (!player || !player.getCurrentTime || !player.getPlayerState) return;
    try {
      const st = player.getPlayerState();
      localStorage.setItem(DD_RADIO_STATE_KEY, JSON.stringify({
        order: playOrder, idx: currentIdx,
        time: player.getCurrentTime(),
        playing: (st === YT.PlayerState.PLAYING || st === YT.PlayerState.BUFFERING),
        vid: DD_RADIO_TRACKS[playOrder[currentIdx]].id,
        n: DD_RADIO_TRACKS.length,
        ts: Date.now()
      }));
    } catch(e){}
  }
  const restored = loadState();
  let playOrder = restored ? restored.order : freshOrder();
  if (restored) currentIdx = restored.idx;

  const titleEl = document.getElementById('dd-radio-track');
  const btnPlay = document.getElementById('dd-r-play');
  const btnPrev = document.getElementById('dd-r-prev');
  const btnNext = document.getElementById('dd-r-next');
  const btnShuffle = document.getElementById('dd-r-shuffle');
  const btnRepeat = document.getElementById('dd-r-repeat');
  const toggle = document.getElementById('dd-radio-toggle');
  const skipBtn = document.getElementById('dd-r-skipad');
  const clickLayer = document.getElementById('dd-ad-clicklayer');

  function shuffled(arr){
    const a = arr.slice();
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }

  function updateTitle(){
    if (!titleEl) return;
    const t = DD_RADIO_TRACKS[playOrder[currentIdx]].t;
    titleEl.innerHTML = '';
    const s = document.createElement('span');
    s.className = 'dd-track-scroll';
    s.textContent = t + '  \u2715  ' + t + '  \u2715  ';
    titleEl.appendChild(s);
    updateMediaSession(t);
  }
  // Lock-screen / notification controls (Media Session API)
  function updateMediaSession(t){
    if (!('mediaSession' in navigator)) return;
    try {
      const parts = (t || '').split(' \u2014 ');
      navigator.mediaSession.metadata = new MediaMetadata({
        title: parts[0] || t || 'Distortion Daily Radio',
        artist: parts[1] || 'Distortion Daily',
        album: 'Distortion Daily Radio'
      });
    } catch(e){}
  }
  function wireMediaSession(){
    if (!('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.setActionHandler('play', function(){ if (player) player.playVideo(); });
      navigator.mediaSession.setActionHandler('pause', function(){ if (player) player.pauseVideo(); });
      navigator.mediaSession.setActionHandler('previoustrack', function(){ prevTrack(); });
      navigator.mediaSession.setActionHandler('nexttrack', function(){ nextTrack(); });
    } catch(e){}
  }
  // If the browser pauses us when the tab hides, resume when the user comes back
  let hiddenPlaying = false;
  document.addEventListener('visibilitychange', function(){
    if (!player || !player.getPlayerState) return;
    if (document.hidden) {
      const st = player.getPlayerState();
      hiddenPlaying = (st === YT.PlayerState.PLAYING || st === YT.PlayerState.BUFFERING);
    } else if (hiddenPlaying) {
      hiddenPlaying = false;
      try { player.playVideo(); } catch(e){}
    }
  });
  function updatePlayBtn(){
    if (!btnPlay || !player) return;
    const s = player.getPlayerState();
    btnPlay.textContent = (s === YT.PlayerState.PLAYING) ? '❚❚' : '▶';
  }

  window.onYouTubeIframeAPIReady = function(){
    player = new YT.Player('dd-yt-holder', {
      height:'360', width:'640',
      playerVars:{ autoplay:0, controls:0, disablekb:1, fs:0, iv_load_policy:3, rel:0 },
      events:{
        onReady:function(){
          const tr = DD_RADIO_TRACKS[playOrder[currentIdx]];
          if (restored && restored.time > 3) {
            // Pick up where the previous page left off
            const pos = Math.floor(restored.time);
            if (restored.playing) player.loadVideoById({videoId: tr.id, startSeconds: pos});
            else player.cueVideoById({videoId: tr.id, startSeconds: pos});
          } else {
            player.cueVideoById(tr.id);
          }
          updateTitle();
          // Persist state every few seconds and on page leave, so the next page resumes
          setInterval(saveState, 4000);
          window.addEventListener('pagehide', saveState);
          // Ad detection: only when actively playing and video id mismatches the track
          setInterval(function(){
            if (!player || !player.getVideoData || !player.getPlayerState) return;
            try {
              const st = player.getPlayerState();
              if (st !== YT.PlayerState.PLAYING && st !== YT.PlayerState.BUFFERING){
                bar.classList.remove('ad-playing'); return;
              }
              const vd = player.getVideoData();
              const expected = DD_RADIO_TRACKS[playOrder[currentIdx]].id;
              const isAd = vd && vd.video_id && vd.video_id !== expected;
              const wasAd = bar.classList.contains('ad-playing');
              bar.classList.toggle('ad-playing', !!isAd);
              if (isAd && !wasAd) positionClickLayer();
              if (!isAd && wasAd && clickLayer) clickLayer.style.clipPath = '';
            } catch(e){}
          }, 1500);
        },
        onStateChange:function(e){
          updatePlayBtn();
          if (e.data === YT.PlayerState.ENDED){
            if (repeatOn){ player.seekTo(0); player.playVideo(); }
            else { nextTrack(); }
          } else if (e.data === YT.PlayerState.PLAYING){
            updateTitle();
          }
        }
      }
    });
  };

  function playTrack(i){
    currentIdx = ((i % playOrder.length) + playOrder.length) % playOrder.length;
    if (player && player.loadVideoById){
      player.loadVideoById(DD_RADIO_TRACKS[playOrder[currentIdx]].id);
      updateTitle();
    }
  }
  function nextTrack(){ playTrack(currentIdx+1); }
  function prevTrack(){
    if (player && player.getCurrentTime && player.getCurrentTime() > 3){ player.seekTo(0); return; }
    playTrack(currentIdx-1);
  }

  if (btnPlay) btnPlay.addEventListener('click', function(){
    if (!player) return;
    const s = player.getPlayerState();
    if (s === YT.PlayerState.PLAYING){ player.pauseVideo(); } else { player.playVideo(); }
    setTimeout(updatePlayBtn, 300);
  });
  if (btnNext) btnNext.addEventListener('click', nextTrack);
  if (btnPrev) btnPrev.addEventListener('click', prevTrack);
  wireMediaSession();
  if (btnShuffle) btnShuffle.classList.add('active');
  if (btnShuffle) btnShuffle.addEventListener('click', function(){
    shuffleOn = !shuffleOn;
    btnShuffle.classList.toggle('active', shuffleOn);
    const cur = playOrder[currentIdx];
    playOrder = shuffleOn ? shuffled(DD_RADIO_TRACKS.map((_,i)=>i)) : DD_RADIO_TRACKS.map((_,i)=>i);
    currentIdx = playOrder.indexOf(cur);
    if (player && player.getPlayerState && player.getPlayerState() !== YT.PlayerState.PLAYING){ /* keep paused */ }
  });
  if (btnRepeat) btnRepeat.addEventListener('click', function(){
    repeatOn = !repeatOn;
    btnRepeat.classList.toggle('active', repeatOn);
  });
  if (toggle) toggle.addEventListener('click', function(){
    bar.classList.toggle('collapsed');
    toggle.textContent = bar.classList.contains('collapsed') ? '▲ RADIO' : '▼ HIDE';
  });

  // Position hidden YouTube layer so its Skip button sits under our visible SKIP AD button.
  // YouTube's skip is bottom-right of the 640x360 player, approx center (575,300).
  function positionClickLayer(){
    if (!clickLayer || !skipBtn) return;
    try {
      const barR = bar.getBoundingClientRect();
      const btnR = skipBtn.getBoundingClientRect();
      const cx = (btnR.left + btnR.right) / 2 - barR.left;
      const cy = (btnR.top + btnR.bottom) / 2 - barR.top;
      const holder = document.getElementById('dd-yt-holder');
      if (holder){
        holder.style.left = (cx - 575) + 'px';
        holder.style.top = (cy - 300) + 'px';
      }
      // Only the skip-button region is clickable; rest of iframe is clipped away
      clickLayer.style.clipPath = 'inset(' + Math.max(0, cy-340) + 'px ' + Math.max(0, 640-(cx-535)) + 'px ' + Math.max(0, 360-(cy-260)) + 'px ' + Math.max(0, cx-615) + 'px)';
    } catch(e){}
  }

  // Load YouTube IFrame API
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  updateTitle();
})();
