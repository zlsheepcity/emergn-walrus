<template>
    <v-app>
        <router-view/>
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


<style>
    /* fix annoying vuetify settings */
    .headline { word-break:normal }
    .v-application .overline { line-height:1.5 }
    @media (min-width: 1904px) {
        .container { max-width: 1185px; }
    }
</style>