<template>
    <wrap>

    <!-- ···························· HEADER -->

    <walrus-header
         title="M-0. Guided Customer Assessment"
        :links="[
            { goto:'Welcome', label:'Logout'   },
            { goto:'Home',    label:'Home'     },
            { goto:'Module0', label:'M-0 Home' },
        ]"/>

    <!-- ···························· TABS -->

    <section>
        <v-container>
            <v-stepper alt-labels value="2">
            <v-stepper-header flat>

                <v-stepper-step step="1" complete style="flex-basis: 16rem;">
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

    <!-- ···························· PROJECT LINKS -->



    <!-- ···························· NEXT -->

    <section>
        <v-container>

            <v-row align-content="stretch" dense>

                <v-col cols="12" md="4">
                <walrus-card
                    :disabled="!page.next.ready"
                    :action="f=>goto(page.next.link)">
                    <div class="headline"> Next </div>
                </walrus-card>
                </v-col>

            </v-row>

        </v-container>
    </section>

    <!-- ···························· DEV LINKS -->

    <debug style="margin-top:2em;padding:2em 0;">
    <v-container>
    <pre display-source>

*issue get form values
*todo create form
*issue save form result

    </pre>
    </v-container>
    </debug>

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

    // navigation
    let page = {
        next: {
            ready: true,
            link: 'Module0-3',
        },
    }
    data = { ...data, page }
    methods = {
        unlockNext () { this.$data.page.next.ready = true },
    ...methods }

// ---------------------------- export ready

export default {
    name: 'Module0-2',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
