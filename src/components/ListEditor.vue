<template>
    <section>
        <h3>Test Editor (Deprecated)</h3>
        <div>{{list}}</div>

        <div v-for="item in list">
            <v-text-field solo hide-details
                v-model="item.label"
                label="Define value"
                class="mb-1"
                />
        </div>

    </section>
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

    // get list
    props = [ ...props, 'list' ]

// ---------------------------- export ready

export default {
    name: 'ListEditor',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
