<script setup>
import { ref } from 'vue'

const expanded = ref(false)
</script>

<template>
  <section id="education">
    <h2>Education</h2>

    <div class="edu">
      <div class="edu-header">
        <strong>Université de Montréal — B.Sc. Mathematics, CS Minor</strong>
        <span class="date">2023-Present</span>
      </div>
      <pre class="bullets" v-if="expanded">├── Linear Algebra and Its Applications
├── Multivariable Calculus
├── Statistics and Probabilities
├── Financial Mathematics
├── Discrete Structures
├── Information Theory
├── Concepts of Programming Languages
├── Data Structures
├── Web Development
├── Object-Oriented Programming I
└── Object-Oriented Programming II</pre>
      <a class="toggle" @click.prevent="expanded = !expanded">
        {{ expanded ? '[-] hide courses' : '[+] some courses' }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.edu {
  margin-bottom: calc(var(--line-height) * 2);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  line-height: var(--line-height);
}

.edu-header * {
  margin: 0;
}

.date {
  color: var(--text-color-alt);
}

.edu pre {
  margin: 0;
}

.bullets {
  font-weight: var(--font-weight-normal);
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

@media screen and (max-width: 600px) {
  .edu-header {
    flex-direction: column;
    gap: 0;
  }

  .edu-header strong {
    font-size: 0.9rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .edu pre {
    font-size: 0.8rem;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .toggle {
    font-size: 0.8rem;
  }
}
</style>
