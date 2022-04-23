<template>
  <h1>世界top50</h1>
  <div v-for="(kind, index) in kinds" :key="index">
    <router-link :to="`/World_top50/${kind}`">
      {{ kind }}
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const kinds = ref(["liveness", "energy", "happy"])
    return {
      kinds,
    }
  },
}
</script>
