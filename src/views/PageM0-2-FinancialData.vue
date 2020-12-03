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
                Start the Guided Customer Assessment
            </h1>

           </header>
        </v-container>

    </header>

    <!-- Single Tabs -->

    <section>
        <v-container>
            <v-stepper alt-labels value="2">
            <v-stepper-header flat>

                <v-stepper-step complete step="1" style="flex-basis: 16rem;">
                    <div style="text-align:center;max-width:11em;">
                        Set Focus for Value Starter Engagement
                        </div>
                    </v-stepper-step>

                <v-divider/>

                <v-stepper-step step="2" style="flex-basis: 16rem;">
                    <div style="text-align:center;max-width:11em;">
                        Confirm financial data for the Benefit case
                        </div>
                    </v-stepper-step>

                <v-divider/>

                <v-stepper-step step="3" style="flex-basis: 16rem;">
                    <div style="text-align:center;max-width:11em;">
                        Assess your IT strategy?
                        </div>
                    </v-stepper-step>

            </v-stepper-header>
            </v-stepper>
        </v-container>
    </section>

    <!-- Form -->

    <!-- ... -->

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
