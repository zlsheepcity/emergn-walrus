<template>
    <wrap>

<!-- ===================================== HEADER -->

    <section class="page-header">
    <v-container>
    <header class="px-3">


        <v-chip small class="overline pr-4 mr-2" @click="f=>GoTo('Dev_home')">
            ► dev home
        </v-chip>
        <h1 class="text-h2">
            dev blog
        </h1>

    </header>
    </v-container>
    </section>

<!-- ===================================== PROJECT LINKS -->

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
    methods  = { ...methods,  GoTo (path) { return this.$router.push(path) } }


// ---------------------------- export ready

export default {
    name: 'Dev-Blog',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
