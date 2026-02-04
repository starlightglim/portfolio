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

// Custom cursor
const cursor = document.createElement('div')
cursor.className = 'cursor'
document.body.appendChild(cursor)

let cursorX = 0, cursorY = 0
let currentX = 0, currentY = 0

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX
  cursorY = e.clientY
})

function animateCursor() {
  currentX += (cursorX - currentX) * 0.15
  currentY += (cursorY - currentY) * 0.15
  cursor.style.left = currentX + 'px'
  cursor.style.top = currentY + 'px'
  requestAnimationFrame(animateCursor)
}
animateCursor()

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
