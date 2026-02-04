<script setup>
const currentDate = new Date().toISOString().split('T')[0]
</script>

<template>
  <table class="header">
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

  <nav style="text-align: center;">
    [<a href="#about">About</a>] · [<a href="#education">Education</a>] · [<a href="#experience">Experience</a>] · [<a href="#skills">Skills</a>] · [<a href="#fun">For Fun</a>] · [<a href="#contact">Contact</a>]
  </nav>
</template>
