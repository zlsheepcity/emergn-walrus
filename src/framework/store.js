// ---------------------------- use store

import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ---------------------------- export seed

let state     = {}
let mutations = {}
let actions   = {}
let modules   = {}

// ---------------------------- stored components

import tmpl from "./stored--template"
state     = { ...state,     ...tmpl.state     }
mutations = { ...mutations, ...tmpl.mutations }
actions   = { ...actions,   ...tmpl.actions   }
modules   = { ...modules,   ...tmpl.modules   }

// ---------------------------- export ready

const Store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules,
})

export default Store
