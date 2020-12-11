// ---------------------------- export seed

let state     = {}
let mutations = {}
let actions   = {}
let modules   = {}

// ---------------------------- UX modifyers

            state.M0_Completed           = false
            state.M0_AssessmentCompleted = false

    mutations = {

        M0_MarkComplete (state) {
            state.M0_Completed           = true
            state.M0_AssessmentCompleted = true
        },

    ...mutations }

// ---------------------------- export ready

export default {
    state,
    mutations,
    actions,
    modules,
}
