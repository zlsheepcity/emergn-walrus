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

        <debug class="pa-3">
            <header class="overline">*issue authorization protocol</header>
            <v-btn  class="accent mt-4"
                @click="page.next.ready = true"
                >unlock demo access</v-btn>
        </debug>

        </v-container>
    </section>

    <section>
        <v-container>

            <v-row dense align-content="stretch">

                <v-col  cols="12" md="4">
                <walrus-card
                    :disabled="!page.next.ready"
                    :action="f=>goto(page.next.link)">
                    <div class="headline">
                        Enter SAP Value Starter
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
    computed = { router ()   { return this.$router }, ...computed }
    methods  = { goto (path) { return this.$router.push(path) }, ...methods }

    // use page
    import PageCommander from '@/models/PageCommander'
    data = {
        page: PageCommander.Pages()['PageIntro'],
    ...data }

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
