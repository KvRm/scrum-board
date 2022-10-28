import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './stores'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faPen,
  faArrowRightFromBracket,
  faTrashCan,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faPen,
  faArrowRightFromBracket,
  faTrashCan,
  faCircleExclamation
)

createApp(App)
  .use(store)
  .use(router)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
