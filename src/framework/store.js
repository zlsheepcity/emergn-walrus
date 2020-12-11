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

// project

import VSE_Modeli from "../models/VSE_Modeli"
state     = { ...state,     ...VSE_Modeli.state     }
mutations = { ...mutations, ...VSE_Modeli.mutations }
actions   = { ...actions,   ...VSE_Modeli.actions   }
modules   = { ...modules,   ...VSE_Modeli.modules   }


// ---------------------------- export ready

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules,
})

export default store
