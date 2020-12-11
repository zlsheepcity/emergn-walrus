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
                ► Guided Customer Assessment
            </v-chip>

            <h1 class="text-h4">
                1/3  Set Focus for Value Starter Engagement
            </h1>

           </header>
        </v-container>

    </header>

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
                ► Guided Customer Assessment
            </v-chip>

            <h1 class="text-h4">
                1/3  Set Focus for Value Starter Engagement
            </h1>

           </header>
        </v-container>

    </header>

    <section>
        <v-container>
            <debug class="pa-3">
                [...form]
            </debug>
        </v-container>
    </section>

    <section>
        <v-container>
            <v-row dense align-content="stretch">

                <v-col  cols="12" md="4">
                <walrus-card :disabled="false" :action="f=>goto('PageM0-FinancialData')">
                    <p>Next</p>
                    <div class="headline">
                        Confirm financial data for the Benefit case
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
