import './assets/scss/main.scss'
import Loader from '@/components/global/Loader.vue'

import PageTitle from '@/components/PageTitle.vue'
import Link from '@/components/global/Link.vue'
import Page from '@/components/Page.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import App from './App.vue'
import router from './router'
import { i18n } from '@/lib/i18n'
const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(i18n)
  .component('PageTitle', PageTitle)
  .component('Page', Page)
  .component('Loader', Loader)
  .component('Link', Link)
app.mount('#app')
