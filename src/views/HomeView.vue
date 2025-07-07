<script setup lang="ts">
import WeatherPanel from '../components/WeatherPanel.vue'
import PomodoroTimer from '../components/PomodoroTimer.vue'
import AmbientPlayer from '../components/AmbientPlayer.vue'
import QuoteBox from '../components/QuoteBox.vue'
</script>

<template>
  <main class="dashboard">
    <WeatherPanel />
    <PomodoroTimer />
    <AmbientPlayer />
    <QuoteBox />
  </main>
</template>

<style scoped>
.dashboard {
  display: grid;
  gap: 1rem;
}
</style>
