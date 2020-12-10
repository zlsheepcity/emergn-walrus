<template>
    <header class="page-header">
        <v-container>

            <!-- links -->

            <section class="page-header-chips px-3">
                <template v-if="links && links.length" v-for="link in links">
                <v-chip small
                    class="overline pr-4 mr-2"
                    @click="f=>goto(link.goto)"
                    > ► {{ link.label }} </v-chip>
                </template>
            </section>

            <!-- title -->

            <section class="page-header-title px-3">
                <h1 class="text-h4">
                    {{ title }}
                    <slot/>
                </h1>
            </section>

        </v-container>
    </header>
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

    // get props
    props = [ ...props, 'title', 'links' ]


// ---------------------------- export ready

export default {
    name: 'walrus-header',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
