<script setup>
const currentDate = new Date().toISOString().split('T')[0]
</script>

<template>
  <!-- Desktop header -->
  <table class="header desktop-header">
    <tr>
      <td colspan="2" rowspan="2" class="width-auto">
        <h1 class="title">Yassin</h1>
        <span class="subtitle">Mathematics · Computer Science</span>
      </td>
      <th>Location</th>
      <td class="width-min">Montreal</td>
    </tr>
    <tr>
      <th>Updated</th>
      <td class="width-min"><time :style="{ whiteSpace: 'pre' }">{{ currentDate }}</time></td>
    </tr>
    <tr>
      <th class="width-min">Email</th>
      <td class="width-auto"><a href="mailto:hello@yassin.lol">hello@yassin.lol</a></td>
      <th class="width-min">Status</th>
      <td>Student</td>
    </tr>
  </table>

  <!-- Mobile header -->
  <div class="mobile-header">
    <h1 class="title">Yassin</h1>
    <p class="subtitle">Mathematics · Computer Science</p>
    <p class="meta">Montreal · Student</p>
    <a class="email" href="mailto:hello@yassin.lol">hello@yassin.lol</a>
  </div>

  <nav class="nav">
    <a href="#about">About</a> ·
    <a href="#education">Education</a> ·
    <a href="#experience">Experience</a> ·
    <a href="#skills">Skills</a> ·
    <a href="#fun">For Fun</a> ·
    <a href="#contact">Contact</a>
  </nav>
</template>

<style scoped>
.mobile-header {
  display: none;
}

.mobile-header .title {
  margin: 0;
}

.mobile-header .subtitle {
  margin: 0;
  color: var(--text-color-alt);
}

.mobile-header .meta {
  margin: 0;
  color: var(--text-color-alt);
  font-size: 0.875rem;
}

.mobile-header .email {
  display: block;
  margin: 0;
  font-size: 0.875rem;
}

.nav {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1ch;
}

.nav a {
  margin: 0;
}

.nav a::before {
  content: '[';
}

.nav a::after {
  content: ']';
}

@media screen and (max-width: 600px) {
  .desktop-header {
    display: none;
  }

  .mobile-header {
    display: block;
    margin-bottom: calc(var(--line-height) * 1.5);
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 0 1ch;
    font-size: 0.875rem;
  }
}
</style>
