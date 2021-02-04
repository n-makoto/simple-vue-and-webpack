import 'core-js'

import Vue from 'vue'
// @ts-ignore
import App from './App'

const vue = new Vue({
    el: '#app',
    created() {
        const ieCheck = () => {
            alert(Array.from('InternetExplorer'))
        }
        // ieCheck() // IE確認したいときはこれをコメントアウトする
    },
    render: h => h(App)
}).$mount('#app')
