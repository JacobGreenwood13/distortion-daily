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
  {id:"sDwcHUeG6Nc",t:"Wild in the Streets — Circle Jerks"},
  {id:"V9n3riCpH7o",t:"The Art of American Football — Funeral For a Friend"},
  {id:"99KkbFjZR20",t:"Bite It You Scum — GG Allin"},
  {id:"NGJsiFklVVA",t:"Don't Talk To Me — GG Allin"},
  {id:"wcChJCrPtwI",t:"Cokie the Clown — NOFX"},
  {id:"TU07lEBfpNo",t:"Codependence Day — NOFX"},
  {id:"nNII9dvgGDg",t:"Overrated (Everything Is) — Less Than Jake"},
  {id:"xmmQ1kUk2kI",t:"Firestorm — Earth Crisis"},
  {id:"ZHQWQI8pmqs",t:"The Wrath of Sanity — Earth Crisis"},
  {id:"qbmWs6Jf5dc",t:"Anarchy in the UK — Sex Pistols"},
  {id:"IL0nhn88aVA",t:"Die for Your Government — Anti-Flag"},
  {id:"oh8zcbC_Dcw",t:"Story of My Life — Social Distortion"},
  {id:"3mbvWn1EY6g",t:"Ace of Spades — Motörhead"},
  {id:"VnL1qKYbwQQ",t:"Powerload — Disfear"},
  {id:"eIXnoH4TVts",t:"A Brutal Sight of War — Disfear"},
  {id:"J5yvIcghXTQ",t:"Pity the Weak — Fall of Efrafa"},
  {id:"kgAyiQgBL88",t:"Breaking the Chains — Dokken"},
  {id:"7lGv3trbuBc",t:"Time for Death — GWAR"},
  {id:"2V5WlR6Rkxg",t:"Americanized — GWAR"},
  {id:"z5rRZdiu1UE",t:"Sabotage — Beastie Boys"},
  {id:"BSXCogYvQlw",t:"Headbanger Face Rip — Municipal Waste"},
  {id:"Cgf11TwNBYo",t:"Wake the Dead — Comeback Kid"},
  {id:"hn13BLQv-UE",t:"Hailing on Me — Comeback Kid"}
];

(function(){
  const bar = document.getElementById('dd-radio');
  if (!bar) return;

  let player = null, currentIdx = 0, shuffleOn = true, repeatOn = false;
  let playOrder = (function(){ const a = DD_RADIO_TRACKS.map((_,i)=>i); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; })();

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
    if (titleEl) titleEl.textContent = DD_RADIO_TRACKS[playOrder[currentIdx]].t;
  }
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
          player.cueVideoById(DD_RADIO_TRACKS[playOrder[currentIdx]].id);
          updateTitle();
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
