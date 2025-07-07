<script setup lang="ts">
import { ref, watch } from 'vue'
import GlassCard from './GlassCard.vue'

const tracks = ['rain.mp3']
const current = ref(tracks[0])
const audio = ref<HTMLAudioElement | null>(null)
const playing = ref(false)
const volume = ref(0.5)

function toggle() {
  if (!audio.value) {
    audio.value = new Audio(`/ambient/${current.value}`)
    audio.value.loop = true
    audio.value.volume = volume.value
  }
  playing.value = !playing.value
  if (playing.value) audio.value!.play()
  else audio.value!.pause()
}

watch(volume, (v) => {
  if (audio.value) audio.value.volume = v
})

watch(current, (track) => {
  if (audio.value) {
    const wasPlaying = playing.value
    audio.value.src = `/ambient/${track}`
    if (wasPlaying) audio.value.play()
  }
})
</script>

<template>
  <GlassCard>
    <div class="player">
      <select v-model="current">
        <option v-for="t in tracks" :key="t" :value="t">{{ t }}</option>
      </select>
      <button @click="toggle">{{ playing ? 'Pause' : 'Play' }}</button>
      <input type="range" min="0" max="1" step="0.01" v-model.number="volume" />
    </div>
  </GlassCard>
</template>

<style scoped>
.player {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
