<template>
    <section>
        <h3>List Editor</h3>
        <div>{{list}}</div>

        <div v-for="item in list">
            <v-text-field solo hide-details
                v-model="item.label"
                label="Define value"
                class="mb-1"
                />
        </div>
        <div>
            <v-btn @click="delme(list,4)">check state</v-btn>
        </div>
        <div>
            MSG:{{msg}}
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
    props = [ ...props, 'list', 'del' ]

    methods = {
        delme (list,id) {
            this.$data.msg = list
        },
    ...methods }

    data = {
        msg:'',
    ...data }

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
