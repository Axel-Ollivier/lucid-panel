<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlassCard from './GlassCard.vue'

const quotes = [
  'Stay hungry, stay foolish.',
  'The only limit to our realization of tomorrow is our doubts of today.',
  'Believe you can and you\'re halfway there.'
]

const current = ref(quotes[0])

function rotate() {
  const idx = Math.floor(Math.random() * quotes.length)
  current.value = quotes[idx]
}

onMounted(() => {
  setInterval(rotate, 60000)
})
</script>

<template>
  <GlassCard>
    <blockquote>{{ current }}</blockquote>
  </GlassCard>
</template>

<style scoped>
blockquote {
  transition: opacity 0.5s;
  font-style: italic;
}
</style>
