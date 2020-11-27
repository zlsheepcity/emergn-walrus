<template>
<section template-wrap>

    <article>
        
    </article>

    <v-container>
        <h2>Set Focus...</h2>

        <article class="AdminFormGrid">

            <section>
                <h4 class="overline pl-3">Your Industry</h4>
                <v-select solo
                    label="Select from list"
                    :items="items"
                    item-text="label"
                    />
            </section>

            <div class="EditArea">
                <v-btn class="accent">Edit list</v-btn>
            </div>

            <v-divider class="my-4"/>

            <div v-for="item in items">
                <v-text-field solo
                    v-model="item.label"
                    label="Define value"
                    />
            </div>

            <v-divider class="my-4"/>

            <section>
                <list-editor :list="items"/>
            </section>

        </article>

    </v-container>
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

    import EditableList from "@/models/EditableList"

    import ListEditor from "@/components/ListEditor.vue"
    components = { ...components, ListEditor }

    let items = []

    const testlist = new EditableList()
    testlist.createItem('test x1')
    let deleteThisItemB = testlist.createItem('test x2')
    let deleteThisItemA = testlist.createItem('test x3 (should be deleted)')
    testlist.createItem('test x4')
    testlist.updateItem({rowid:1,label:'updated item'})
    testlist.deleteItem(deleteThisItemA)
    items = testlist.getList()

    
    data = { ...data, items }

// ---------------------------- export ready

export default {
    name: 'App',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>