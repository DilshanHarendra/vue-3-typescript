<template>
  <div  class="w-full bg-white shadow py-5 px-4 mb-3">
    <p class="text-lg font-semibold">{{data.id}}.  {{data.title}}</p>
    <p class="px-4  rounded-full text-center   w-32  " :class="data.completed?'bg-green-100 text-green-500':'bg-yellow-100 text-yellow-500'">
       {{data.completed?'Complete':'incomplete'}}
    </p>

  </div>
</template>

<script>
import {default as t_todo} from "../types/todo";
export default {
name: "Todo",
  props:{
      data:t_todo
  }
}
</script>

<style scoped>

</style>
