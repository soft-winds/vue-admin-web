import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import antdv from 'ant-design-vue'
import './permissions'
import 'ant-design-vue/dist/reset.css'
import '@/styles/base.scss'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons, solid图标库的包名为fas、regular图标库的包名为far、brands图标库的包名为fab */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, fab, far)
/* add font awesome icon component */
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(antdv)
app.mount('#app')
