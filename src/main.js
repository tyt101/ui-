import Vue from 'vue'
import App from './App.vue'
import TytButton from '@/components/Button'
import TytDialog from '@/components/Dialog'
import TytInput from '@/components/Input'
import TytSwitch from '@/components/Switch'
Vue.config.productionTip = false
Vue.component(TytButton.name, TytButton)
Vue.component(TytDialog.name, TytDialog)
Vue.component(TytInput.name, TytInput)
Vue.component(TytSwitch.name ,TytSwitch)
new Vue({
  render: h => h(App)
}).$mount('#app')
