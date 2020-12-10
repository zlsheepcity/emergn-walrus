// ---------------------------- export seed

let state     = {}
let mutations = {}
let actions   = {}
let modules   = {}

// ---------------------------- stored components

    state = {
        ready: true,
    ...state }

// ---------------------------- export ready

export default {
    state,
    mutations,
    actions,
    modules,
}
