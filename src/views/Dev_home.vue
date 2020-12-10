<template>
    <wrap>

<!-- ===================================== HEADER -->

    <section class="page-header">
    <v-container>
    <header class="px-3">

        <h1 class="text-h2">
            dev home
        </h1>

    </header>
    </v-container>
    </section>

<!-- ===================================== PROJECT LINKS -->

    <section>
        <v-container>

            <v-row dense align-content="stretch">

                <v-col  cols="12" md="4">
                <walrus-card
                    :disabled="!page.next.ready"
                    :action="f=>GoTo(page.next.link)">
                    <div class="headline">
                        Run Project
                    </div>
                </walrus-card>
                </v-col>

            </v-row>

        </v-container>
    </section>

<!-- ===================================== DEV LINKS -->

    <section>
    <v-container>

        <debug class="pa-3">
            <div class="overline">project status</div>
            <div display-source class="pb-3">
                First presentation completed<br>
                Navigation prototype next<br>
            </div>

            <div class="overline">dev links</div>
            <ul>
                <li>
                    <a href="https://github.com/zlsheepcity/emergn-walrus">
                        git source
                    </a>
                </li>
                <li>
                    <a @click="f=>GoTo('Dev_blog')">
                        dev blog
                    </a>
                </li>
            </ul>
        </debug>

    </v-container>
    </section>

<!-- ===================================== -->

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

    // this page
    let page = {
        next: {
            ready: true,
            link:  'PageIntro',
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
