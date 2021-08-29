import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// css
import './assets/css/main.css'

const Vue =createApp(App)
Vue.use(store)
Vue.use(router)

Vue.mount('#app')
