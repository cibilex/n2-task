import './assets/scss/main.scss'
import './assets/scss/effects.scss'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import Loader from '@/components/global/Loader.vue'
import PageTitle from '@/components/global/PageTitle.vue'
import Link from '@/components/global/Link.vue'
import Pill from '@/components/global/Pill.vue'
import Page from '@/components/global/Page.vue'
import CountryFlag from 'vue-country-flag-next'
import PageContent from '@/components/global/PageContent.vue'
import Divider from '@/components/global/Divider.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
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
  .component('Divider', Divider)
  .component('Link', Link)
  .component('PageContent', PageContent)
  .component('Pill', Pill)
  .component('CountryFlag', CountryFlag)
app.mount('#app')
