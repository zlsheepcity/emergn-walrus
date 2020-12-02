<template>
    <wrap>

    <header class="page-header">
        <v-container>
            <header class="px-3">

            <h1 class="text-h2">
                SAP Value Starter
            </h1>

           </header>
        </v-container>
    </header>

    <section>
        <v-container>

            <v-row dense align-content="stretch">

                <v-col  cols="12" md="4">
                <walrus-card :disabled="false" :action="f=>goto('PageHome')">
                    <div class="headline">
                        Enter with authorization
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
    name: 'Intro',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
