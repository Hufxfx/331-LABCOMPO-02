// import './assets/main.css'

import './assets/style.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import { inject } from '@vercel/analytics'
inject()

import { injectSpeedInsights } from '@vercel/speed-insights'
injectSpeedInsights()

app.use(createPinia())
app.use(router)

app.mount('#app')
