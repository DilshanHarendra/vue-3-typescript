<template>
<div class="flex  bg-gray-200">
  <router-link to="/" class="px-4  py-3 hover:bg-gray-300 " :class="{'text-blue-500':(path=='/')}">Home</router-link>
  <router-link to="/about" class="px-4  py-3 hover:bg-gray-300 " :class="{'text-blue-500':(path=='/about')}">About</router-link>
  <router-link to="/todos" class="px-4  py-3 hover:bg-gray-300 " :class="{'text-blue-500':(path=='/todos')}">Todos</router-link>
</div>
</template>

<script lang="ts">
import {computed} from 'vue'
import {useRoute} from "vue-router";

export default {
  name: "Header",

  setup(){
    const route =useRoute()

    const path = computed(()=>{
      return route.path
    })
    return { path}
  }
}
</script>

<style scoped>

</style>
