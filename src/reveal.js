// Scroll reveal.
//
// The UI-designer role's rule is "motion is ON by default - a static screen
// reads as junior". The restraint that keeps it from reading as decoration:
//
//   - it runs ONCE per element, then the observer lets go. A reveal that
//     replays every time you scroll past turns a page into a slideshow.
//   - the distance is small (12px). Big translations are the difference
//     between "considered" and "template".
//   - elements already on screen at load are shown immediately, with no
//     animation at all. Animating what the visitor is already looking at is
//     the single most common way this effect goes wrong.
//   - prefers-reduced-motion is honoured by never adding the class, so the
//     content is simply visible - not visible-after-a-skipped-animation.
//
// It degrades safely: if IntersectionObserver is missing or JS never runs, the
// CSS only hides elements that carry `data-reveal`, which only this file sets.

const STAGGER = 55 // ms between siblings in the same group
const MAX_STAGGER = 4 // after this many, stop adding delay or late cards crawl

export function initReveal(root = document) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !('IntersectionObserver' in window)) return

  // Groups, in the order they appear. Each group staggers within itself.
  const groups = [
    '.impact > div',
    '.job',
    '.prob',
    '.app-card',
    '.gh a',
    '.faq',
    'section > .wrap > h2',
    'section > .wrap > .sub',
  ]

  const els = []
  groups.forEach((sel) => {
    const found = [...root.querySelectorAll(sel)]
    found.forEach((el, i) => {
      el.dataset.reveal = ''
      el.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STAGGER) * STAGGER}ms`)
      els.push(el)
    })
  })
  if (!els.length) return

  const show = (el) => {
    el.dataset.reveal = 'in'
    el.style.removeProperty('--reveal-delay')
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.dataset.reveal = 'in'
        io.unobserve(e.target) // once, then let go
      })
    },
    // a little before the element arrives, so it is settled by the time it is
    // properly in view rather than animating under the reader's eye
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  )

  const vh = innerHeight
  els.forEach((el) => {
    // already on screen at load: no animation, just be there
    if (el.getBoundingClientRect().top < vh * 0.92) show(el)
    else io.observe(el)
  })
}
