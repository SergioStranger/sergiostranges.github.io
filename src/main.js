import 'bootstrap/scss/bootstrap.scss'
import '@/assets/css/style.sass'
import '@/assets/css/pixelicons.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
