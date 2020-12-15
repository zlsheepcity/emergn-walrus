<template>
    <wrap>

    <!-- ···························· HEADER -->

    <section class="page-header">
    <v-container>
    <header class="px-3">
        <h1 class="text-h2"> Dev home </h1>
    </header>
    </v-container>
    </section>

    <!-- ···························· PROJECT LINKS -->

    <section>
        <v-container>

            <v-row align-content="stretch" dense>

                <v-col cols="12" md="4">
                <walrus-card
                    :disabled="!page.next.ready"
                    :action="f=>goto(page.next.link)">
                    <div class="headline"> Run Project </div>
                </walrus-card>
                </v-col>

            </v-row>

        </v-container>
    </section>

    <!-- ···························· DEV LINKS -->

    <debug style="margin-top:5em">
    <v-container>
    <v-row>
        <v-col cols="12" md="6">
        <pre display-source><b>Project status:</b>

- 2020.12.15
- migration in progress





        </pre>
        </v-col>
        <v-col cols="12" md="6">
        <pre display-source><b>Dev links:</b></pre>
        <section class="d-flex flex-column justify-start mt-2"
                 style="width: fit-content;">

                <v-chip outlined label class="mb-2"
                    @click="f=>goto('Dev_blog')"
                    >Dev blog</v-chip>

                <v-chip outlined label class="mb-2"
                    href="https://github.com/zlsheepcity/emergn-walrus"
                    >Current code source</v-chip>

                <v-chip color="accent" label class="mb-2"
                    @click="f=>goto('SetFocus')"
                    >Content admin tool</v-chip>

        </section>
        </v-col>
    </v-row>
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

    // this page
    let page = {
        next: {
            ready: true,
            link: 'Welcome',
        },
    }
    data = { ...data, page }

// ---------------------------- export ready

export default {
    name: 'Dev-Home',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
