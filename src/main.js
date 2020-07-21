
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'

import TestComponent from 'test-component'
import './style/theme/element/theme/index.css'
// import ElementUI from 'element-ui'

Vue.use(TestComponent)

// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
