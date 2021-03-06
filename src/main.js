import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueHeadful from 'vue-headful'
import BackToTop from 'vue-backtotop'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueExpandableImage from 'vue-expandable-image'
import pdf from 'vue-pdf'

Vue.component('vue-headful', vueHeadful);
Vue.use(VueExpandableImage)
Vue.use(pdf)
Vue.use(BackToTop)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
//   components: {
//       App
//   }
}).$mount('#app')
