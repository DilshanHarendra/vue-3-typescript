import todo from '../types/todo'
import axios from "axios";

export type State ={
    todos:Array<todo>
}

const state:State={
    todos:[]
}



export default {
    state:state,
    namespaced:true,
    mutations: {
        setTodos(state:State,todos:todo[]){
            state.todos=todos
        }
    },
    actions: {
        GET_TODOS({commit}:{commit:Function}){
            return new Promise((resolve, reject) => {
                axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res=>{
                    commit('setTodos',res.data)
                    resolve(res.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    },
    getters:{
        todos(state:State){
            return state.todos
        }
    }
}
