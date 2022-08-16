import Vue from 'vue'
import App from './App.vue'
import TytButton from '@/components/Button.vue'
import TytDialog from '@/components/Dialog.vue'
Vue.config.productionTip = false
Vue.component(TytButton.name, TytButton)
Vue.component(TytDialog.name, TytDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
