<script setup>
import { ref } from 'vue'

const expanded = ref({
  rush: false,
  magma: false
})

const showRushVideo = ref(false)
const showMagmaVideo = ref(false)
const rushVideo = ref(null)
const magmaVideo = ref(null)
const mousePos = ref({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  mousePos.value = { x: e.clientX, y: e.clientY }
}

const handleRushEnter = () => {
  showRushVideo.value = true
  if (rushVideo.value) {
    rushVideo.value.playbackRate = 3
    rushVideo.value.play()
  }
}

const handleRushLeave = () => {
  showRushVideo.value = false
  if (rushVideo.value) {
    rushVideo.value.pause()
    rushVideo.value.currentTime = 0
  }
}

const handleMagmaEnter = () => {
  showMagmaVideo.value = true
  if (magmaVideo.value) {
    magmaVideo.value.playbackRate = 3
    magmaVideo.value.play()
  }
}

const handleMagmaLeave = () => {
  showMagmaVideo.value = false
  if (magmaVideo.value) {
    magmaVideo.value.pause()
    magmaVideo.value.currentTime = 0
  }
}
</script>

<template>
  <section id="experience">
    <h2>Experience</h2>

    <div
      class="job"
      @mouseenter="handleRushEnter"
      @mouseleave="handleRushLeave"
      @mousemove="handleMouseMove"
    >
      <div class="job-header">
        <strong>Rush — Frontend Engineer</strong>
        <span class="date">2025</span>
      </div>
      <pre v-if="!expanded.rush"><span class="hl">├── WebGL trading charts, $1B+ leverage volume, 300k+ transactions</span>
<span class="hl">├── Click-to-trade interface on chart canvas</span>
<span class="hl">├── Candlestick system with zoom and OHLC aggregation</span>
<span class="hl">├── Trading panel with live PnL tracking</span>
<span class="hl">├── React Three Fiber 3D landing page</span>
<span class="hl">├── Mobile-first responsive trading experience</span>
<span class="hl">├── Solana wallet integration and gasless flows</span>
<span class="hl">└── Gamification layer</span></pre>
      <pre v-else><span class="hl">├── WebGL trading charts at 60fps, $1B+ volume, 300k+ transactions</span>
<span class="dim">│   └── Built real-time rendering pipeline processing live crypto
│       price feeds with sub-second latency at scale</span>
<span class="hl">├── Click-to-trade interface on chart canvas</span>
<span class="dim">│   └── Developed click-to-place system letting users open positions
│       directly on canvas, cutting order execution time</span>
<span class="hl">├── Candlestick system with zoom and OHLC aggregation</span>
<span class="dim">│   └── Implemented zoom scaling, viewport management, and wrote
│       data aggregation logic across multiple timeframes</span>
<span class="hl">├── Trading panel with live PnL tracking</span>
<span class="dim">│   └── Built position tracker with real-time PnL calculations and
│       integrated instant settlement for Solana perpetuals</span>
<span class="hl">├── React Three Fiber 3D landing page</span>
<span class="dim">│   └── Designed and coded interactive 3D scenes to boost user
│       engagement and differentiate the brand</span>
<span class="hl">├── Mobile-first responsive trading experience</span>
<span class="dim">│   └── Adapted charts for touch input, built bottom nav, and
│       created adaptive layouts for all device types</span>
<span class="hl">├── Solana wallet integration and gasless flows</span>
<span class="dim">│   └── Implemented session management, transaction signing, and
│       built deposit/withdrawal stepper to reduce drop-off</span>
<span class="hl">└── Gamification layer</span>
<span class="dim">    └── Created win/loss animations, added sound feedback, and
        built shareable PnL cards for social virality</span></pre>
      <a class="toggle" @click.prevent="expanded.rush = !expanded.rush">
        {{ expanded.rush ? '[-] collapse' : '[+] expand' }}
      </a>
      <p class="tech">Next.js · TypeScript · WebGL · Three.js · Solana/Web3.js · WebSockets</p>

      <Teleport to="body">
        <video
          v-show="showRushVideo"
          ref="rushVideo"
          class="preview-video"
          :style="{ left: mousePos.x + 20 + 'px', top: mousePos.y + 20 + 'px' }"
          src="/rush.mp4"
          muted
          loop
          playsinline
        />
      </Teleport>
    </div>

    <div
      class="job"
      @mouseenter="handleMagmaEnter"
      @mouseleave="handleMagmaLeave"
      @mousemove="handleMouseMove"
    >
      <div class="job-header">
        <strong>Magma Protocol — Frontend Engineer</strong>
        <span class="date">2024-2025</span>
      </div>
      <pre v-if="!expanded.magma"><span class="hl">├── Vault dashboard for DeFi protocol, $5M+ TVL</span>
<span class="hl">├── HyperEVM chain adaptation</span>
<span class="hl">├── Real-time portfolio tracking with P&amp;L</span>
<span class="hl">├── Precision bug fix in withdrawal flow</span>
<span class="hl">├── Themeable component system</span>
<span class="hl">└── Containerized microservices environment</span></pre>
      <pre v-else><span class="hl">├── Vault dashboard for DeFi protocol, $5M+ TVL</span>
<span class="dim">│   └── Built interface for deploying and managing concentrated
│       liquidity positions on Osmosis blockchain</span>
<span class="hl">├── HyperEVM chain adaptation</span>
<span class="dim">│   └── Led migration from Cosmos-based chains to EVM networks,
│       integrated wallets and smart contract interactions</span>
<span class="hl">├── Real-time portfolio tracking with P&amp;L</span>
<span class="dim">│   └── Built tracking system showing positions, deposits, and
│       unrealized P&amp;L with per-asset granularity</span>
<span class="hl">├── Precision bug fix in withdrawal flow</span>
<span class="dim">│   └── Identified and fixed JavaScript floating-point errors that
│       were causing transaction failures on-chain</span>
<span class="hl">├── Themeable component system</span>
<span class="dim">│   └── Architected dark/light mode system using React Context,
│       Radix UI primitives, and Tailwind CSS</span>
<span class="hl">└── Containerized microservices environment</span>
<span class="dim">    └── Worked with Docker, Redis, and Make-based orchestration
        in a containerized microservices setup</span></pre>
      <a class="toggle" @click.prevent="expanded.magma = !expanded.magma">
        {{ expanded.magma ? '[-] collapse' : '[+] expand' }}
      </a>
      <p class="tech">Next.js · TypeScript · WebGL · CosmJS · Ethers.js · React Query · Docker · Redis</p>

      <Teleport to="body">
        <video
          v-show="showMagmaVideo"
          ref="magmaVideo"
          class="preview-video"
          :style="{ left: mousePos.x + 20 + 'px', top: mousePos.y + 20 + 'px' }"
          src="/magma1.mov"
          muted
          loop
          playsinline
        />
      </Teleport>
    </div>

    <div class="job">
      <div class="job-header">
        <strong>City of Montreal — Camp Animator</strong>
        <span class="date">2022</span>
      </div>
      <pre><span class="hl">├── Orchestrated daily activities for groups of 20+</span>
<span class="hl">└── Managed conflict resolution and parent communication</span></pre>
    </div>

    <div class="job">
      <div class="job-header">
        <strong>McDonald's — Crew Member</strong>
        <span class="date">2018-2022</span>
      </div>
      <pre><span class="hl">├── Optimized food preparation workflows during peak hours</span>
<span class="hl">└── Managed inventory cycles to reduce waste</span></pre>
    </div>
  </section>
</template>

<style scoped>
.job {
  margin-bottom: calc(var(--line-height) * 2);
  position: relative;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  line-height: var(--line-height);
}

.job-header * {
  margin: 0;
}

.date {
  color: var(--text-color-alt);
}

.job pre {
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

.tech {
  color: var(--text-color-alt);
  font-size: 0.875rem;
  margin-top: calc(var(--line-height) / 2);
}

@media screen and (max-width: 600px) {
  .job-header {
    flex-direction: column;
    gap: 0;
  }

  .job-header strong {
    font-size: 0.9rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .job pre {
    font-size: 0.75rem;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .tech {
    font-size: 0.7rem;
  }

  .toggle {
    font-size: 0.8rem;
  }
}
</style>

<style>
.preview-video {
  position: fixed;
  width: 280px;
  max-width: 40vw;
  pointer-events: none;
  z-index: 1000;
  border: 2px solid var(--text-color, #fff);
}

@media (hover: none) and (pointer: coarse) {
  .preview-video {
    display: none !important;
  }
}
</style>
