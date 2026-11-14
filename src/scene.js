export function createScene(view, background, art) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)')
  const typingFrame = view.querySelector('.typing-frame')
  const gearLayer = view.querySelector('.scene-gear')
  const slotElements = new Map()
  let typing
  let transition

  function gain(x, y, text, style = '') {
    const label = document.createElement('span')
    label.className = `float-xp ${style}`
    label.textContent = text
    label.style.left = `${x}%`
    label.style.top = `${y}%`
    label.setAttribute('aria-hidden', 'true')
    view.append(label)
    label.addEventListener('animationend', () => label.remove(), { once: true })
  }

  return {
    set(index, src) {
      if (background.getAttribute('src') === src) return
      view.dataset.scene = index
      background.src = src
    },
    setGear(equipped, items) {
      for (const [slot, entry] of slotElements) {
        if (equipped[slot]) continue
        entry.prop.remove()
        slotElements.delete(slot)
      }
      for (const [slot, spriteId] of Object.entries(equipped)) {
        if (!spriteId) continue
        let entry = slotElements.get(slot)
        if (!entry) {
          const prop = document.createElement('span')
          prop.className = 'scene-prop'
          prop.dataset.slot = slot
          const sprite = new Image()
          prop.append(sprite)
          gearLayer.append(prop)
          entry = { prop, sprite, currentId: '' }
          slotElements.set(slot, entry)
        }
        if (entry.currentId !== spriteId) {
          const item = items.find(candidate => (candidate.file ?? candidate.id) === spriteId || candidate.id === spriteId)
          entry.prop.dataset.gear = spriteId
          entry.sprite.src = art(`gear/${spriteId}.webp`)
          entry.sprite.alt = item?.title ?? slot
          entry.currentId = spriteId
        }
      }
    },
    tap(x, y, text) {
      if (!reduce.matches) {
        typing?.cancel()
        typing = typingFrame.animate([
          { opacity: 1 },
          { opacity: 0 },
        ], { duration: 120, easing: 'steps(1, end)' })
      }
      gain(x, y, text)
    },
    gain,
    promote() {
      if (reduce.matches) return
      transition?.cancel()
      transition = view.animate([{ opacity: 0.55 }, { opacity: 1 }], { duration: 320, easing: 'steps(6, end)' })
    },
  }
}
