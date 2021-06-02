import Vue from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import store, {initialiseStore} from './store'

Vue.config.productionTip = false

initialiseStore(store)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
