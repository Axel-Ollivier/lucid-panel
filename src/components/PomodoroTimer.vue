<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import GlassCard from './GlassCard.vue'

const focusDuration = 25 * 60
const breakDuration = 5 * 60

const remaining = ref(focusDuration)
const running = ref(false)
const isBreak = ref(false)
let timer: number | null = null

const minutes = computed(() =>
  String(Math.floor(remaining.value / 60)).padStart(2, '0')
)
const seconds = computed(() =>
  String(remaining.value % 60).padStart(2, '0')
)

function tick() {
  if (remaining.value > 0) {
    remaining.value--
  } else {
    isBreak.value = !isBreak.value
    remaining.value = isBreak.value ? breakDuration : focusDuration
    alert(isBreak.value ? 'Break time!' : 'Focus time!')
  }
}

function start() {
  if (running.value) return
  running.value = true
  timer = window.setInterval(tick, 1000)
}

function reset() {
  running.value = false
  if (timer) clearInterval(timer)
  timer = null
  isBreak.value = false
  remaining.value = focusDuration
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <GlassCard>
    <div class="timer">
      <div class="time">{{ minutes }}:{{ seconds }}</div>
      <button @click="start" v-if="!running">Start</button>
      <button @click="reset">Reset</button>
    </div>
  </GlassCard>
</template>

<style scoped>
.timer {
  text-align: center;
}
.time {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
button {
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
}
</style>
