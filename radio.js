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

  // Spotify login: opens Spotify auth in a popup; embed picks up the session for full tracks
  const loginBtn = document.getElementById('dd-spotify-login');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const w = window.open('https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F', '_blank', 'width=480,height=640');
      const check = setInterval(() => {
        if (!w || w.closed) {
          clearInterval(check);
          // Reload embed to pick up the new session
          frame.src = frame.src;
          loginBtn.textContent = 'SPOTIFY ✓';
          loginBtn.classList.add('logged-in');
          try { localStorage.setItem('dd-spotify-hint', '1'); } catch(e) {}
        }
      }, 1000);
    });
    try {
      if (localStorage.getItem('dd-spotify-hint') === '1') {
        loginBtn.textContent = 'SPOTIFY ✓';
        loginBtn.classList.add('logged-in');
      }
    } catch(e) {}
  }
})();
