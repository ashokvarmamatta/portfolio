// Theme toggle. Follows the OS until the visitor picks one, then remembers it.
const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>'
const SUN =
  '<circle cx="12" cy="12" r="4.2"/>' +
  '<path d="M12 2.2v2.4M12 19.4v2.4M2.2 12h2.4M19.4 12h2.4' +
  'M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/>'

export function initTheme() {
  const root = document.documentElement
  const btn = document.getElementById('tt')
  const svg = document.getElementById('tts')
  if (!btn || !svg) return

  const apply = (t) => {
    root.setAttribute('data-theme', t)
    // show the mode you would switch TO, not the one you are in
    svg.innerHTML = t === 'dark' ? SUN : MOON
    btn.title = t === 'dark' ? 'Switch to light' : 'Switch to dark'
    try { localStorage.setItem('theme', t) } catch { /* private mode */ }
  }

  let saved = null
  try { saved = localStorage.getItem('theme') } catch { /* private mode */ }
  apply(saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))

  btn.addEventListener('click', () =>
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'))
}
