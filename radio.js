/* Distortion Daily Radio — single-channel bottom bar player
 * One playlist, shuffled. Political / social commentary only.
 * Get the playlist ID from the Spotify playlist URL:
 *   open.spotify.com/playlist/XXXXX  →  "XXXXX"
 */
const DD_RADIO_PLAYLIST_ID = "2PdDOTD8xiQc2rMYTrUhDV"; // TODO: Jacob's curated playlist

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
})();
