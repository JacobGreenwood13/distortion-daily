/* Distortion Daily Radio — single-channel bottom bar player
 * One playlist, shuffled. Political / social commentary only.
 * Get the playlist ID from the Spotify playlist URL:
 *   open.spotify.com/playlist/XXXXX  →  "XXXXX"
 */
const DD_RADIO_PLAYLIST_ID = "5x8sTGqcxPCJfhEVvH8vfK"; // Distortion Daily Radio

(function() {
  const bar = document.getElementById('dd-radio');
  if (!bar) return;
  const frame = document.getElementById('dd-radio-frame');
  const toggle = document.getElementById('dd-radio-toggle');

  frame.src = "https://open.spotify.com/embed/playlist/" + DD_RADIO_PLAYLIST_ID + "?utm_source=generator&theme=0";

  toggle.addEventListener('click', () => {
    bar.classList.toggle('collapsed');
    toggle.textContent = bar.classList.contains('collapsed') ? '▲ RADIO' : '▼ HIDE';
  });

  // Spotify login: PKCE OAuth bounce — tap, approve on Spotify, auto-return to site
  const loginBtn = document.getElementById('dd-spotify-login');
  const SPOTIFY_CLIENT_ID = 'edeff6e17fbc4e8586bf627b0c60800f';
  const REDIRECT_URI = 'https://distortion-daily.org/radio-callback.html';
  function b64url(buf) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(buf)))
      .replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      try {
        if (localStorage.getItem('dd-spotify-hint') === '1') return; // already connected
      } catch(e) {}
      const verifier = b64url(crypto.getRandomValues(new Uint8Array(64)));
      try { sessionStorage.setItem('dd-spotify-verifier', verifier); } catch(e) {}
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier)).then(function(hash){
        const challenge = b64url(hash);
        const url = 'https://accounts.spotify.com/authorize?client_id='+SPOTIFY_CLIENT_ID
          + '&response_type=code&redirect_uri='+encodeURIComponent(REDIRECT_URI)
          + '&scope='+encodeURIComponent('streaming user-read-email user-read-private')
          + '&code_challenge_method=S256&code_challenge='+challenge
          + '&show_dialog=false';
        location.href = url; // bounce to Spotify, auto-return after approval
      });
    });
    try {
      if (localStorage.getItem('dd-spotify-hint') === '1') {
        loginBtn.textContent = 'SPOTIFY ✓';
        loginBtn.classList.add('logged-in');
      }
    } catch(e) {}
  }
})();
