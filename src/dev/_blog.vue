<template>
    <wrap>

    <!-- ···························· HEADER -->

    <section class="page-header">
    <v-container>
    <header>
        <v-chip small
            class="overline pr-4 mr-2"
            @click="f=>goto('Dev_home')"
            >► dev home</v-chip>
        <h1 class="text-h2"> Dev blog </h1>
    </header>
    </v-container>
    </section>

    <!-- ···························· POSTS -->

    <DesignSystem/>
    <FileSystem/>
    <TemplatePost/>

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

    // get posts

    import TemplatePost from '@/dev/blog/_template.vue'
    components = { ...components, TemplatePost }

    import FileSystem from '@/dev/blog/zl001-FileSystem.vue'
    components = { ...components, FileSystem }
    import DesignSystem from '@/dev/blog/zl002-DesignSystem.vue'
    components = { ...components, DesignSystem }


// ---------------------------- export ready

export default {
    name: 'Dev-Blog',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
