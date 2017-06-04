// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

const BASEURL = 'http://127.0.0.1:8000'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    methods: {
        queryGet (url, suc) {
            this.$http.get(BASEURL + url).then(response => {
            	if(response.status == '200') {
            		if (suc && typeof suc === 'function') {
            			suc(response.body)
            		}
            	}else{
            		console.log(response)
            	}
                
            })
        }
    }
})
