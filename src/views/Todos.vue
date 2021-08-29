<template>
  <div class="p-5">
    <div class="flex w-full items-center justify-between  pb-3">
      <h2 class="text-2xl">Todos</h2>

      <router-link to="/new-todo" class="bg-white hover:bg-gray-100  px-4 py-2 shadow">New Todo</router-link>

    </div>

    <div>
      <input type="text" v-model="search" class="w-full p-2 mb-5 shadow" placeholder="search..." >
    </div>


    <div v-if="!loading">
      <Todo v-for="todo in todos" :key="todo.id" :data="todo"/>
    </div>

    <p v-else>Loading.....</p>

  </div>
</template>

<script lang="ts">
import {ref,computed} from 'vue'
import Todo from "@/components/Todo.vue";
import {useStore} from "vuex";
import {default as t_todo} from "../types/todo";
export default {
  name: "Todos",
  components: {Todo},
  setup(){
    const store = useStore()
    const loading=ref<boolean>(false)
    const search=ref<string>('')

    const todos = computed(():t_todo[]=>{
      if (search.value){
        return store.getters['todo/todos'].filter((todo:t_todo):boolean=>todo.title.includes(search.value))
      }else{
        return store.getters['todo/todos']
      }

    })


    if (todos.value.length==0){
      store.dispatch('todo/GET_TODOS').then(()=>loading.value=false)
    }else{
      loading.value=false
    }




    return{
      todos,
      search,
      loading
    }
  }
}
</script>

<style scoped>

</style>
