import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')

// Scrollbar auto-hide: show only when scrolling
let scrollTimeout
window.addEventListener('scroll', () => {
  document.documentElement.classList.add('is-scrolling')
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    document.documentElement.classList.remove('is-scrolling')
  }, 1000)
}, { passive: true })

// Custom cursor (desktop only)
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

if (!isTouchDevice) {
  const cursor = document.createElement('div')
  cursor.className = 'cursor'
  document.body.appendChild(cursor)

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  }, { passive: true })

  // Hover state for clickable elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, summary, [role="button"], .color-swatch')) {
      cursor.classList.add('hover')
    }
  })
  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, summary, [role="button"], .color-swatch')) {
      cursor.classList.remove('hover')
    }
  })
}
