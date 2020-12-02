<template>
    <wrap>

    <header class="page-header">

        <v-container>
            <header class="px-3">

            <v-chip small class="overline pr-4 mr-2" @click="f=>goto('PageIntro')">
                ► Intro
            </v-chip>
            <v-chip small class="overline pr-4 mr-2" @click="f=>goto('PageHome')">
                ► Home
            </v-chip>
            <v-chip small class="overline pr-4 mr-2" @click="f=>goto('PageM0')">
                ► Customer Self Assessment
            </v-chip>

            <h1 class="text-h4">
                Set Focus for Value Starter Engagement
            </h1>
            <p class="subtitle">Define priorities</p>

           </header>
        </v-container>

    </header>

    <section>

    </section>

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
    computed = { ...computed, router ()   { return this.$router } }
    methods  = { ...methods,  goto (path) { return this.$router.push(path) } }


// ---------------------------- export ready

export default {
    name: 'Module-0-1',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
