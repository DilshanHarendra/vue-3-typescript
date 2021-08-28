<template>
  <div class="bg-gray-50 h-screen  overflow-y-auto">
    <Header/>
    <div class="container mx-auto">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Header from "@/layouts/companents/Header";
export default {
name: "BaseLayout",
  components: {Header}
}
</script>

<style scoped>

</style>
