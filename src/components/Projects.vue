<script setup>
import { ref } from 'vue'

const showPixelGallery = ref(false)
const pixelSlide = ref(0)

const pixelImages = [
  { src: '/nekojiru stars.png', alt: 'Nekojiru Stars' },
  { src: '/nekojiru waves.jpeg', alt: 'Nekojiru Waves' },
  { src: '/COLORS.png', alt: 'Colors' },
  { src: '/sheep.gif', alt: 'Sheep' },
]

const show3dGallery = ref(false)
const threeDSlide = ref(0)

const threeDImages = [
  { src: '/briefcase.gif', alt: 'Briefcase', type: 'image' },
  { src: '/dreameye4.gif', alt: 'Dream Eye', type: 'image' },
  { src: '/rumikubi2.gif', alt: 'Rumikubi', type: 'image' },
  { src: '/smiley2.mov', alt: 'Smiley', type: 'video' },
  { src: '/rug.gif', alt: 'Rug', type: 'image' },
  { src: '/cigscene.gif', alt: 'Cig Scene', type: 'image' },
  { src: '/miladycigarret1.gif', alt: 'Milady Cigarette', type: 'image' },
]

function nextPixelSlide() {
  pixelSlide.value = (pixelSlide.value + 1) % pixelImages.length
}

function prevPixelSlide() {
  pixelSlide.value = (pixelSlide.value - 1 + pixelImages.length) % pixelImages.length
}

function next3dSlide() {
  threeDSlide.value = (threeDSlide.value + 1) % threeDImages.length
}

function prev3dSlide() {
  threeDSlide.value = (threeDSlide.value - 1 + threeDImages.length) % threeDImages.length
}
</script>

<template>
  <section id="fun">
    <h2>For Fun</h2>

    <div class="item">
      <strong>Aseprite — Pixel Art</strong>
      <pre><span class="hl">├── Atmospheric scenes & dithering techniques</span>
<span class="hl">├── Animations</span>
<span class="hl">└── Low-res texture workflows</span></pre>
      <a class="toggle" @click.prevent="showPixelGallery = !showPixelGallery">
        {{ showPixelGallery ? '[-] hide gallery' : '[+] view gallery' }}
      </a>

      <div v-if="showPixelGallery" class="gallery">
        <div class="carousel">
          <button class="nav-btn prev" @click="prevPixelSlide">&lt;</button>
          <div class="slide">
            <img
              v-for="(img, i) in pixelImages"
              :key="img.src"
              :src="img.src"
              :alt="img.alt"
              v-show="pixelSlide === i"
            />
          </div>
          <button class="nav-btn next" @click="nextPixelSlide">&gt;</button>
        </div>
        <p class="caption">{{ pixelImages[pixelSlide].alt }}</p>
      </div>
    </div>

    <div class="item">
      <strong>Blender — 3D</strong>
      <pre><span class="hl">├── Low-poly modeling & stylized renders</span>
<span class="hl">├── Simulation nodes for procedural effects</span>
<span class="hl">└── Looping animations & turntables</span></pre>
      <a class="toggle" @click.prevent="show3dGallery = !show3dGallery">
        {{ show3dGallery ? '[-] hide gallery' : '[+] view gallery' }}
      </a>

      <div v-if="show3dGallery" class="gallery">
        <div class="carousel">
          <button class="nav-btn prev" @click="prev3dSlide">&lt;</button>
          <div class="slide slide-3d">
            <template v-for="(item, i) in threeDImages" :key="item.src">
              <img
                v-if="item.type === 'image'"
                :src="item.src"
                :alt="item.alt"
                v-show="threeDSlide === i"
              />
              <video
                v-else
                :src="item.src"
                :alt="item.alt"
                v-show="threeDSlide === i"
                autoplay
                loop
                muted
                playsinline
              />
            </template>
          </div>
          <button class="nav-btn next" @click="next3dSlide">&gt;</button>
        </div>
        <p class="caption">{{ threeDImages[threeDSlide].alt }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.item {
  margin-bottom: calc(var(--line-height) * 2);
}

.item strong {
  display: block;
}

pre {
  margin: 0;
}

.hl {
  color: var(--text-color);
}

.dim {
  color: var(--text-color-alt);
}

.toggle {
  display: inline-block;
  margin-top: calc(var(--line-height) / 2);
  cursor: pointer;
  color: var(--text-color-alt);
}

.toggle:hover {
  color: var(--text-color);
}

.gallery {
  margin-top: var(--line-height);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3ch;
}

.nav-btn {
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0.5rem 1ch;
  font-family: inherit;
  cursor: pointer;
}

.nav-btn:hover {
  background: var(--text-color);
  color: var(--background-color);
}

.slide {
  width: 300px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  image-rendering: pixelated;
}

.slide-3d img,
.slide-3d video {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  image-rendering: auto;
}

.caption {
  text-align: center;
  color: var(--text-color-alt);
  font-size: 0.875rem;
  margin-top: calc(var(--line-height) / 2);
}

@media screen and (max-width: 600px) {
  .slide {
    width: 200px;
    height: 180px;
  }

  pre {
    font-size: 0.8rem;
  }
}
</style>
