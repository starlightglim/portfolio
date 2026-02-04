<template>
  <div class="theme-controls" :class="{ open: isOpen }">
    <!-- Mobile toggle button -->
    <button class="toggle-btn" @click="isOpen = !isOpen">
      <span>{{ isDark ? '◐' : '◑' }}</span>
      <span class="arrow">{{ isOpen ? '▲' : '▼' }}</span>
    </button>
    <!-- Desktop: inline row / Mobile: dropdown -->
    <div class="dropdown">
      <button class="dark-toggle" @click="toggleDark">{{ isDark ? '◐' : '◑' }}</button>
      <button class="dark-btn" @click="toggleDark">{{ isDark ? 'Light' : 'Dark' }}</button>
      <div class="colors">
        <button
          v-for="(color, i) in colors"
          :key="color.name"
          :class="['dot', { active: activeColor === i }]"
          :style="{ background: isDark ? color.dark : color.light }"
          @click="selectColor(i)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const colors = [
  { name: 'red', light: '#a00', dark: '#f66' },
  { name: 'orange', light: '#b50', dark: '#fa3' },
  { name: 'green', light: '#070', dark: '#5d5' },
  { name: 'cyan', light: '#088', dark: '#5dd' },
  { name: 'blue', light: '#22d', dark: '#68f' },
  { name: 'purple', light: '#70d', dark: '#a7f' },
  { name: 'pink', light: '#b07', dark: '#f6c' },
]

const isDark = ref(false)
const activeColor = ref(0)
const isOpen = ref(false)
let scrollbarStyle = null

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function applyTheme() {
  const color = colors[activeColor.value]
  const base = isDark.value ? color.dark : color.light
  const { r, g, b } = hexToRgb(base)
  const altColor = isDark.value
    ? `rgba(${r}, ${g}, ${b}, 0.5)`
    : `rgba(${r}, ${g}, ${b}, 0.6)`
  document.documentElement.style.setProperty('--text-color', base)
  document.documentElement.style.setProperty('--text-color-alt', altColor)
  document.documentElement.style.setProperty('--background-color', isDark.value ? '#0a0a0a' : '#fff')
  document.documentElement.style.setProperty('--background-color-alt', isDark.value ? '#111' : '#f0f0f0')

  if (!scrollbarStyle) {
    scrollbarStyle = document.createElement('style')
    document.head.appendChild(scrollbarStyle)
  }
  scrollbarStyle.textContent = `
    html.is-scrolling::-webkit-scrollbar-thumb { background: ${base} !important; }
    html.is-scrolling { scrollbar-color: ${base} transparent; }
  `
  localStorage.setItem('theme', JSON.stringify({ dark: isDark.value, color: activeColor.value }))
}

function selectColor(i) {
  activeColor.value = i
  applyTheme()
}

function toggleDark() {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    const { dark, color } = JSON.parse(saved)
    isDark.value = dark
    activeColor.value = color < colors.length ? color : 0
  }
  applyTheme()
})
</script>

<style scoped>
.theme-controls {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  margin: 0;
}

.toggle-btn {
  display: none;
}

.dropdown {
  display: flex;
  gap: 8px;
  align-items: center;
  opacity: 0.3;
  transition: opacity 0.2s;
}

.dropdown * {
  margin-top: 0;
}

.dropdown:hover {
  opacity: 1;
}

.dark-btn {
  display: none;
}

.colors {
  display: flex;
  gap: 6px;
  align-items: center;
}

.dark-toggle {
  background: none;
  border: none;
  font-size: 14px;
  padding: 0;
  color: var(--text-color);
  line-height: 1;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  transition: transform 0.15s;
}

.dot:hover {
  transform: scale(1.4);
}

.dot.active {
  outline: 1.5px solid var(--text-color);
  outline-offset: 2px;
}

/* Mobile dropdown */
@media screen and (max-width: 600px) {
  .theme-controls {
    top: 8px;
    right: 8px;
  }

  .toggle-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    background: var(--background-color);
    border: 1.5px solid var(--text-color);
    padding: 6px 10px;
    font-size: 14px;
    color: var(--text-color);
  }

  .arrow {
    font-size: 10px;
  }

  .dropdown {
    display: none;
    flex-direction: column;
    gap: 8px;
    background: var(--background-color);
    border: 1.5px solid var(--text-color);
    border-top: none;
    padding: 10px;
    opacity: 1;
  }

  .theme-controls.open .dropdown {
    display: flex;
  }

  .dark-toggle {
    display: none;
  }

  .dark-btn {
    display: block;
    background: none;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    padding: 6px 12px;
    font-size: 12px;
    width: 100%;
  }

  .colors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .colors::before {
    display: none;
  }

  .dot {
    width: 20px;
    height: 20px;
  }

  .dot:hover {
    transform: none;
  }

  .dot.active {
    outline-width: 2px;
  }
}
</style>
