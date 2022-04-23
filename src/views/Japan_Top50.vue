<template>
  <h1>日本top50</h1>
  <div v-for="(kind, index) in kinds" :key="index">
    <router-link :to="`/Japan_top50/${kind}`">
      {{ kind }}
    </router-link>
  </div>
  <router-view />
  <svg width = "500" height = "300"></svg>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const kinds = ref(["liveness", "energy", "happy"])
    return {
      kinds
    }
  },

  name:"app",
  data(){
    return {
      show:false
    }
  }
}
</script>