import {default as t_todo} from '../types/todo'
import axios from "axios";
import todoApiModule from "@/apis/todoApiModule";

export type State ={
    todos:Array<t_todo>
}

const state:State={
    todos:[]
}



export default {
    state:state,
    namespaced:true,
    mutations: {
        setTodos(state:State,todos:t_todo[]){
            state.todos=todos
        },
        addNewTodo(state:State,todo:t_todo){
            state.todos.push(todo)
        }
    },
    actions: {
        GET_TODOS({commit}:{commit:Function}){
            return new Promise((resolve, reject) => {
                todoApiModule.getAll().then(res=>{
                    commit('setTodos',res.data)
                    resolve(res.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        ADD_NEW_TODO({commit}:{commit:Function},todo:t_todo){
            commit('addNewTodo',todo)
        }
    },
    getters:{
        todos(state:State){
            return state.todos
        }
    }
}
