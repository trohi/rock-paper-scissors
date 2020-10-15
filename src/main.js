import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import Stage2 from './components/Stage2.vue'
import Rules from './components/RulesModal.vue'

Vue.config.productionTip = false

Vue.component('Stage2', Stage2)
Vue.component('rules-dialog', Rules)

new Vue({
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
