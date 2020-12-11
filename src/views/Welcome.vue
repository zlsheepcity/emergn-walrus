<template>
    <wrap>

    <!-- ···························· HEADER -->

    <walrus-header title="SAP Value Starter" />

    <!-- ···························· CARD EXAMPLE -->

    <section>
        <v-container>

            <v-row align-content="stretch" dense>

                <v-col cols="12" md="4">
                <walrus-card
                    :disabled="!page.next.ready"
                    :action="f=>goto(page.next.link)">
                    <div class="headline"> Skip Authorization </div>
                </walrus-card>
                </v-col>

            </v-row>

        </v-container>
    </section>

    <!-- ···························· DEV -->

    <v-container>
    <debug style="margin-top:5em;padding:1em">

        *issue authorization

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

    // this page
    let page = {}
    page.next = {
        ready: true,
        link: 'Home',
    }
    data = { ...data, page }

// ---------------------------- export ready

export default {
    name: 'Welcome',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
