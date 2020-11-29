// framework

let RUN = {}
import Vue     from 'vue'
import router  from './framework/router'
import store   from './framework/store'
import vuetify from './framework/vuetify';
import wrap    from './framework/wrap';

RUN = {
   router,
   store,
   vuetify,
...RUN }

Vue.component( 'wrap', wrap )

// app

import App from './App.vue'
const  HTMLid = '#app'
const  render = f => f(App)

RUN = {
    render,
...RUN }


// Run!

new Vue({...RUN}).$mount(HTMLid)

