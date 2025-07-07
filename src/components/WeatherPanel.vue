<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCoordsByCity, getCurrentWeather } from '../utils/weatherAPI'
import GlassCard from './GlassCard.vue'

const city = ref('Paris')
const temperature = ref<number | null>(null)
const loading = ref(false)

async function fetchWeather() {
  loading.value = true
  const coords = await getCoordsByCity(city.value)
  if (coords) {
    const data = await getCurrentWeather(coords.lat, coords.lon)
    temperature.value = data.temperature
  }
  loading.value = false
}

onMounted(fetchWeather)
</script>

<template>
  <GlassCard>
    <div class="weather-panel">
      <input v-model="city" @change="fetchWeather" />
      <div v-if="loading">Loading...</div>
      <div v-else-if="temperature !== null">
        {{ city }}: {{ temperature }} °C
      </div>
      <div v-else>Not found</div>
    </div>
  </GlassCard>
</template>

<style scoped>
.weather-panel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
input {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: inherit;
}
</style>
