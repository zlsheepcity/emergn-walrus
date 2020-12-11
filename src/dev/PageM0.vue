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

            <h1 class="text-h4">
                Guided Customer Assessment
            </h1>

           </header>
        </v-container>

    </header>

    <section>
        <v-container>

            <v-row dense align-content="stretch">

                <v-col  cols="12" md="3">
                <walrus-card :disabled="false" :action="f=>goto('PageM0-Form')">
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
