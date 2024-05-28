import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

import { usuarioStore } from './stores/usuarioStore'

axios.interceptors.request.use(config => {
    const store = usuarioStore();
    if(store.token) {
      config.headers.Authorization = store.token
    }
    return config
  })

import './assets/main.css'

axios.defaults.baseURL = 'https://8080-mineda-springboot3topic-lnqt3kpet6n.ws-us114.gitpod.io/';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
