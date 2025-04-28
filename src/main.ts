import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCode, faDatabase, faPlus, faLaptopCode } from '@fortawesome/free-solid-svg-icons' // pilih icon yang mau dipakai

// Tambahkan icon yang mau dipakai
library.add(faCode, faDatabase, faPlus, faLaptopCode)

const app = createApp(App)

// Register komponen global
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
