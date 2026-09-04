// Scroll edge fades, per ScrollEdgeFade.qml.
//
// The rule that matters: an edge fade is shown only when there is content past
// that edge. A list short enough to fit gets no fades at all, which is what
// stops the effect looking like decoration.
const EPS = 2 // px tolerance, sub-pixel scroll positions never hit 0 exactly

export function initScrollFades(root = document) {
  const wraps = [...root.querySelectorAll('.scrollfade')]
  if (!wraps.length) return

  const update = (wrap) => {
    const sc = wrap.querySelector('.scroller')
    if (!sc) return
    const atTop = sc.scrollTop <= EPS
    const atBottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - EPS
    const scrolls = sc.scrollHeight > sc.clientHeight + EPS
    wrap.dataset.top = !scrolls || atTop ? '0' : '1'
    wrap.dataset.bottom = !scrolls || atBottom ? '0' : '1'
  }

  wraps.forEach((wrap) => {
    const sc = wrap.querySelector('.scroller')
    if (!sc) return
    update(wrap)
    sc.addEventListener('scroll', () => update(wrap), { passive: true })
    // content height changes when a tab switches or the window resizes
    new ResizeObserver(() => update(wrap)).observe(sc)
  })

  return () => wraps.forEach(update)
}
