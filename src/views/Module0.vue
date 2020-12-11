<template>
    <wrap>

    <!-- ···························· HEADER -->

    <walrus-header
         title="M-0. Guided Customer Assessment"
        :links="[
            { goto:'Welcome', label:'Logout' },
            { goto:'Home',    label:'Home'   }, 
        ]"/>

    <!-- ···························· cards -->

    <v-container>
    <v-row dense align-content="stretch">

        <v-col  cols="12" md="3">
        <walrus-card :disabled="false" :action="f=>goto('Module0-1')">
            <div class="headline">
                Start the Guided Customer Assessment
            </div>
        </walrus-card>
        </v-col>

        <v-col  cols="12" md="3">
        <walrus-card :disabled="true">
            <div class="headline">
                Link to Teaser PoV
            </div>
        </walrus-card>
        </v-col>

        <v-col  cols="12" md="3">
        <walrus-card :disabled="true">
            <div class="headline">
                Request your indivual BSR
            </div>
        </walrus-card>
        </v-col>

    </v-row>
    </v-container>

    <!-- ···························· dev -->

    <v-container v-if="Store.state.M0_Completed">
    <debug class="pa-3">

        <div class="pb-3">
            <div><b>Module completed</b></div>
            <div>The first card is «completed» and disabled.</div>
            <div>The both others are «unlocked».</div>
            <div>Thanks for checking this prototype.</div>
        </div>

        <div class="pb-3">
            <div>state.M0_Completed: {{Store.state.M0_Completed}}</div>
            <div>state.M0_AssessmentCompleted: {{Store.state.M0_AssessmentCompleted}}</div>
        </div>

    </debug>
    </v-container>

    <!-- ···························· -->

    </wrap>
</template>

<script>
// ---------------------------- define export

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}

// ---------------------------- main logic

    // use router
    computed = { ...computed, Router ()   { return this.$router } }
    methods  = { ...methods,  goto (path) { return this.$router.push(path) } }

    // use store
    computed = { ...computed, Store ()    { return this.$store } }

// ---------------------------- export ready

export default {
    name: 'Module-0',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
