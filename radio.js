/* Distortion Daily Radio — bottom bar player
 * Channels configured below. Swap playlist IDs anytime.
 * Get a playlist ID from any Spotify playlist URL:
 *   open.spotify.com/playlist/XXXXX  →  "XXXXX"
 */
const DD_RADIO_CHANNELS = {
  classic: {
    label: "Classic Punk",
    // TODO: Jacob's curated classic punk playlist
    playlistId: "2PdDOTD8xiQc2rMYTrUhDV"
  },
  hardcore: {
    label: "Hardcore",
    // TODO: Jacob's curated hardcore playlist
    playlistId: "2PdDOTD8xiQc2rMYTrUhDV"
  },
  crust: {
    label: "Crust",
    // TODO: Jacob's curated crust punk playlist
    playlistId: "2PdDOTD8xiQc2rMYTrUhDV"
  }
};

(function() {
  const bar = document.getElementById('dd-radio');
  if (!bar) return;
  const frame = document.getElementById('dd-radio-frame');
  const buttons = bar.querySelectorAll('[data-channel]');
  const toggle = document.getElementById('dd-radio-toggle');
  const label = document.getElementById('dd-radio-label');

  function loadChannel(key) {
    const ch = DD_RADIO_CHANNELS[key];
    if (!ch) return;
    frame.src = "https://open.spotify.com/embed/playlist/" + ch.playlistId + "?utm_source=generator&theme=0";
    label.textContent = ch.label;
    buttons.forEach(b => b.classList.toggle('active', b.dataset.channel === key));
    try { localStorage.setItem('dd-radio-channel', key); } catch(e) {}
  }

  buttons.forEach(b => {
    b.addEventListener('click', () => loadChannel(b.dataset.channel));
  });

  toggle.addEventListener('click', () => {
    bar.classList.toggle('collapsed');
    toggle.textContent = bar.classList.contains('collapsed') ? '▲ RADIO' : '▼ HIDE';
  });

  // Restore last channel
  let saved = 'classic';
  try { saved = localStorage.getItem('dd-radio-channel') || 'classic'; } catch(e) {}
  loadChannel(saved);
})();
