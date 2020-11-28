<template>
<section template-wrap>

    <article>
        <header>
            <v-container>
                <h2 class="pl-3">Set Focus...</h2>
            </v-container>
        </header>
        <section>
            <v-container>

                <div class="FieldBlock">
                    <h4 class="overline pl-3"
                        >{{YourIndustry.caption}}</h4>
                    <v-select solo
                        :placeholder= "YourIndustry.placeholder"
                        :items=       "YourIndustry.getList()"
                        item-text=    "label"
                        />
                    <div class="edit-controls">
                        <v-btn class="accent mt-1"
                            >Edit list</v-btn>
                        </div>
                </div>

                <div class="FieldBlock">
                    <h4 class="overline pl-3"
                        >{{PrimaryFocusLOB.caption}}</h4>
                    <v-select solo
                        :placeholder= "PrimaryFocusLOB.placeholder"
                        :items=       "PrimaryFocusLOB.getList()"
                        item-text=    "label"
                        />
                    <div class="edit-controls">
                        <v-btn class="accent mt-1"
                            >Edit list</v-btn>
                        </div>
                </div>

            </v-container>
        </section>
    </article>

    <article class="dev-log">
        <v-container>
            {{PrimaryFocusLOB.getList()}}
        </v-container>
    </article>

    <v-container>
        <h2>Old dev</h2>

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

// ---------------------------- bussiness logic

    let DemoValues = {
        YourIndustry: {
            caption:     'Your Industry',
            placeholder: 'Select from list',
            list: [
                { label: 'SAP Standart Industry A', code:'IndA' },
                { label: 'SAP Standart Industry B', code:'IndB' },
                { label: 'SAP Standart Industry C', code:'IndC' },
                { label: 'SAP Standart Industry D', code:'IndD' },
                { label: 'SAP Standart Industry E', code:'IndE' },
            ],
        },
        PrimaryFocusLOB: {
            caption:     'Primary Focus LOB',
            placeholder: 'Select from list',
            list: [
                { label: 'Asset Management', code:'FLOB1' },
                { label: 'Finance', code:'FLOB2' },
                { label: 'Manufacturing', code:'FLOB3' },
                { label: 'Sales', code:'FLOB4' },
                { label: 'Sourcing & Procurement', code:'FLOB5' },
                { label: 'Supply Chain', code:'FLOB6' },
            ],
        },
        // add more
    }
/*
, , ,  ,  

*/
// ---------------------------- app logic

    import EditableList from "@/models/EditableList"
    const  YourIndustry    = new EditableList({...DemoValues['YourIndustry']})
    const  PrimaryFocusLOB = new EditableList({...DemoValues['PrimaryFocusLOB']})
    
    data = {
        YourIndustry,
        PrimaryFocusLOB,
    ...data }


// ---------------------------- dev tests

    import ListEditor from "@/components/ListEditor.vue"
    components = { ...components, ListEditor }

    let items = []

    const testlist = new EditableList()
    testlist.addLabel('test x1')
    let deleteThisItemB = testlist.addLabel('test x2')
    let deleteThisItemA = testlist.addLabel('test x3 (should be deleted)')
    testlist.addLabel('test x4')
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

<style>
    .FieldBlock {
        display: grid;
        grid-column-gap: 2em;
        grid-template-columns: [a] auto [b] 10em [c];
    }
    .FieldBlock .overline {
        grid-column: a / c;
    }
</style>
