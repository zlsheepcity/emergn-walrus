<template>
    <v-app>
        <home-view/>
    </v-app>
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

    import HomeView from "@/views/Home.vue"
    components = {  HomeView, ...components }

/*    import SetFocusView from "@/views/SetFocus.vue"
    components = { ...components, SetFocusView }*/

// ---------------------------- export ready

export default {
    name: 'VueApp',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
