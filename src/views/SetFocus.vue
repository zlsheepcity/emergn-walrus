<template>
<section template-wrap>

    <article>
        <header>
            <v-container>
                <h2 class="px-2">Set Focus...</h2>
            </v-container>
        </header>
        <section>
            <v-container>

                <!-- ···························· YourIndustry -->

                <div class="FieldBlock">
                    <h4 class="overline px-3"
                        :class="{'yellow':ListInEditor(YourIndustry)}"
                        >{{YourIndustry.caption}}</h4>
                    <v-select solo
                        :placeholder= "YourIndustry.placeholder"
                        :items=       "YourIndustry.getList()"
                        item-text=    "label"
                        />
                    <div class="edit-controls">
                        <v-btn class="accent mt-1"
                           @click="OpenInEditor(YourIndustry)"
                            >Edit list</v-btn>
                        </div>
                </div>

                <!-- ···························· PrimaryFocusLOB -->

                <div class="FieldBlock">
                    <h4 class="overline px-3"
                        :class="{'yellow':ListInEditor(PrimaryFocusLOB)}"
                        >{{PrimaryFocusLOB.caption}}</h4>
                    <v-select solo
                        :placeholder= "PrimaryFocusLOB.placeholder"
                        :items=       "PrimaryFocusLOB.getList()"
                        item-text=    "label"
                        />
                    <div class="edit-controls">
                        <v-btn class="accent mt-1"
                           @click="OpenInEditor(PrimaryFocusLOB)"
                            >Edit list</v-btn>
                        </div>
                </div>

                <!-- ···························· -->

            </v-container>
        </section>
    </article>


    <v-bottom-sheet flat scrollable
        v-model="ui_editor_state"
        content-class="pa-0">
        <v-card flat tile>
        <v-card-text class="pa-0">
        <v-sheet tile class="accent white--text">
        <v-container class="">
            
            <h3 class="title pa-2 pt-0">
                <div class="overline">List editor</div>
                {{list_in_editor.caption}}
            </h3>

            <section v-if="list_in_editor">

                <!-- ···························· List Items -->

                <div v-for="item in list_in_editor.getList()"
                    class="d-flex">
                    <v-text-field solo hide-details
                        v-model="item.label"
                        placeholder="Text label"
                        class="mb-1 mr-1"
                        />
                    <v-btn text class="white--text mt-1"
                        @click="list_in_editor.deleteItem(item)"
                        tabindex="-1"
                        >remove</v-btn>
                </div>

                <!-- ···························· New Item -->

                <footer class="add-new-row d-flex mt-6">
                    <v-text-field solo hide-details
                        v-model="ui_newlabel"
                        placeholder="New text label"
                        class="mb-4 mr-1"
                        />
                    <v-btn text class="white--text mt-1"
                       @click="AddItemByEditor({label:ui_newlabel})"
                        >add label</v-btn>
                </footer>

                <!-- ···························· -->

            </section>

        </v-container>
        </v-sheet>
        </v-card-text>
        </v-card>
        </v-bottom-sheet>


    <article class="dev-log">
        <v-container>
            <div>MSG:{{msg}}</div>
            <div>{{YourIndustry.getList()}}</div>
            <div>{{list_in_editor}}</div>
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

// ---------------------------- app logic

    // create lists

    import EditableList from "@/models/EditableList"
    const  YourIndustry    = new EditableList({...DemoValues['YourIndustry']})
    const  PrimaryFocusLOB = new EditableList({...DemoValues['PrimaryFocusLOB']})
    data = {
        YourIndustry,
        PrimaryFocusLOB,
    ...data }

    // editor ui

    data = {
        ui_editor_state: false,
        ui_newlabel: '',
        list_in_editor:  false,
    ...data }
    methods = {
        ListInEditor (list) {
            let RNA = this
            const open = RNA.$data.ui_editor_state
            const data = RNA.$data.list_in_editor
            if ( !open||!data ) return false
            if ( !list )        return true // ping ok
            return list.caption === data.caption
        },
        OpenInEditor (list) {
            let RNA = this
            RNA.$data.ui_editor_state = true
            RNA.$data.ui_newlabel     = ''
            RNA.$data.list_in_editor  = list
        },
        AddItemByEditor (item) {
            let {label} = item
            let  RNA    = this
            let list    = RNA.$data.list_in_editor
            if (!label || !list) return false
            list.createItem({label})
            RNA.$data.ui_newlabel = '' // reset
        },
    ...methods }


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
    data = {
        msg: 'msg',
    ...data }

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
        grid-column-gap: 1em;
        grid-template-columns: [a] auto [b] 10em [c];
    }
    .FieldBlock *              { grid-column: a / b; }
    .FieldBlock .edit-controls { grid-column: b / c; }
</style>
