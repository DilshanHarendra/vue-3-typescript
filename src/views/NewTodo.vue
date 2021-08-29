<template>
<div class="md:w-2/4 w-full mt-5   mx-auto bg-white p-5">
  <Form @submit="submit" :initialValues="initialValues" :validation-schema="schema" v-slot="{ errors }">
    <div class="mb-3">
      <label class="font-semibold" for="task">Task</label>
      <Field name="task" type="text" class="w-full p-2 border mt-3" id="task" />
      <p class="text-red-500 mt-1 text-sm font-semibold">{{errors.task}}</p>
    </div>
    <div class="mb-3">
      <label class="font-semibold block mb-5" for="completed">
        <Field name="isComplete" type="checkbox"  :value="true" class="mr-3" id="completed" />
        Completed
      </label>
    </div>
    <button class="bg-blue-400 text-white hover:bg-blue-200  px-4 py-2 shadow">{{loading?'Creating....':'Add'}}</button>

  </Form>
</div>
</template>

<script lang="ts">
import * as Yup from 'yup'
import { Form, Field } from 'vee-validate';
import {ref,computed} from "vue";
import {useRouter} from 'vue-router'
import {default as t_todo} from '../types/todo'
import {useStore} from "vuex";
export default {
  name: "NewTodo",
  components:{Form,Field },
  setup(){

    const store = useStore()
    const router= useRouter()


    const initialValues= ref({
      task:'',
      isComplete:false,

    })
    const schema =Yup.object().shape({
      task:Yup.string().required("Enter Task"),
      isComplete:Yup.boolean()
    })

    const todos = computed(():t_todo[]=>store.getters['todo/todos'])

    const submit = values=>{
      let todo:t_todo={
        userId: 2,
        id: todos.value.length+1,
        title: values.task,
        completed: values.isComplete
      }
      store.dispatch('todo/ADD_NEW_TODO',todo)
      router.push('/todos')

    }

    return{
      schema,
      initialValues,
      submit,
    }
  }
}
</script>

<style scoped>

</style>
