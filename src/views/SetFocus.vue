<template>
    <wrap>

        <header>
            <v-container>
                <h2 class="px-2">Set Focus... (deprecated)</h2>
            </v-container>
        </header>

    <!-- fields -->

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
                <v-btn
                    class  = "accent mt-1"
                    width  = "100%"
                    height = "5.8em"
                    style  = "transform: translateY(-2.5em)"
                    @click = "OpenInEditor(YourIndustry)"
                    >Edit list</v-btn>
                </div>
        </div>

        <!-- ···························· PrimaryFocusLOB -->

        <div class="FieldBlock">
            <h4 class="overline px-3"
                :class="{'yellow':ListInEditor(PrimaryFocusLOB)}"
                >{{PrimaryFocusLOB.caption}}</h4>
            <v-select solo
                v-model      = "PrimaryFocusLOB.uimodel"
                :placeholder = "PrimaryFocusLOB.placeholder"
                :items       = "PrimaryFocusLOB.getList()"
                item-text    = "label"
                item-value   = "rowid"
                @change      = "SynchronizeLists()"
                />
            <div class="edit-controls">
                <v-btn
                    class  = "accent mt-1"
                    width  = "100%"
                    height = "5.8em"
                    style  = "transform: translateY(-2.5em)"
                    @click = "OpenInEditor(PrimaryFocusLOB)"
                    >Edit list</v-btn>
                </div>
        </div>

        <!-- ···························· FirstBA -->

        <div class="FieldBlock">
            <h4 class = "overline px-3"
               :class = "{
                   'yellow':
                    ListInEditor({
                       caption:
                           PrimaryFocusLOB.getItem(PrimaryFocusLOB.uimodel)
                        && PrimaryFocusLOB.getItem(PrimaryFocusLOB.uimodel).label
                    })
                }"
               >{{FirstBA.caption}}</h4>
            <v-select solo
                v-model     = "FirstBA.uimodel"
                item-text   = "label"
                item-value   = "rowid"
               :items       = "FirstBA.getList()"
               :disabled    = "!PrimaryFocusLOB.uimodel"
               :placeholder = "
                   !  PrimaryFocusLOB.uimodel
                   ? `Select ${PrimaryFocusLOB.caption} first`
                   :  FirstBA.getList().length
                      ? FirstBA.placeholder
                      : 'List is empty'
                   "/>
            <div class="edit-controls">
                <v-btn class  = "accent mt-1"
                     width    = "100%"
                     height   = "5.8em"
                     style    = "transform: translateY(-2.5em)"
                    :disabled = "!PrimaryFocusLOB.uimodel"
                    @click    = "OpenSublistInEditor(PrimaryFocusLOB)"
                    >Edit sub-list</v-btn>
                </div>
        </div>

        <!-- ···························· SecondBA -->

        <div class="FieldBlock">
            <h4 class = "overline px-3"
               :class = "{
                   'yellow':
                    ListInEditor({
                       caption:
                           PrimaryFocusLOB.getItem(PrimaryFocusLOB.uimodel)
                        && PrimaryFocusLOB.getItem(PrimaryFocusLOB.uimodel).label
                    })
                }"
               >{{SecondBA.caption}}</h4>
            <v-select solo
                v-model     = "SecondBA.uimodel"
                item-text   = "label"
                item-value  = "rowid"
               :items       = "SecondBA.getList()"
               :disabled    = "!PrimaryFocusLOB.uimodel"
               :placeholder = "
                   !  PrimaryFocusLOB.uimodel
                   ? `Select ${PrimaryFocusLOB.caption} first`
                   :  SecondBA.getList().length
                      ?  SecondBA.placeholder
                      : `List is empty`
                   "/>
        </div>

        <!-- ···························· -->

    </v-container>

    <!-- list editor -->

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
                        ref="EditorNewInputText"
                        v-model="ui_newlabel"
                        placeholder="New text label"
                        class="mb-4 mr-1"
                        @keyup.enter ="AddItemByEditor({label:ui_newlabel})"
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

    <!-- dev -->

    <article class="dev-log">
        <v-container>
            <h2 class="pb-4">Development data</h2>




            <section>
                <h4 class="overline">List plain view</h4>
                <hr class="mb-2">
                <div class="pt-0"><b>{{YourIndustry.caption}}</b></div>
                <div v-for="item in YourIndustry.rows" class="pl-4" >
                    <div>{{item.label}}</div>
                </div>

                <div class="pt-2"><b>{{PrimaryFocusLOB.caption}}</b></div>
                <div v-for="item in PrimaryFocusLOB.rows" class="pl-4" >
                    <div>{{item.label}}</div>
                    <div v-if="item.child" class="pl-4">
                        <div v-for="subitem in item.child.rows">
                            <div>{{subitem.label}}</div>
                        </div>
                    </div>
                </div>
                <hr class="mt-2">
            </section>

        </v-container>
    </article>

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
                {
                  label: 'Asset Management',
                  code:  'FLOB1',
                  list:  [
                      { label: 'BA x for Asset Management', code:'FLOB1_1' },
                      { label: 'BA y for Asset Management', code:'FLOB1_2' },
                      { label: 'BA z for Asset Management', code:'FLOB1_3' },
                  ],
                },
                {
                  label: 'Finance',
                  code:  'FLOB2',
                  list:  [
                      { label: 'BA x for Finance', code:'FLOB2_1' },
                      { label: 'BA y for Finance', code:'FLOB2_2' },
                      { label: 'BA z for Finance', code:'FLOB2_3' },
                  ],
                },
                { label: 'Manufacturing', code:'FLOB3' },
                { label: 'Sales', code:'FLOB4' },
                { label: 'Sourcing & Procurement', code:'FLOB5' },
                { label: 'Supply Chain', code:'FLOB6' },
            ],
        },
        FirstBA: {
            caption:     'First most important Business Area',
            placeholder: 'Select from list',
        },
        SecondBA: {
            caption:     'Second most important Business Area',
            placeholder: 'Select from list',
        },
        // add more
    }

// ---------------------------- app logic

    // create lists

    import EditableList    from "@/models/EditableList"
    const  YourIndustry    = new EditableList({...DemoValues['YourIndustry']})
    const  PrimaryFocusLOB = new EditableList({...DemoValues['PrimaryFocusLOB']})
    const  FirstBA         = new EditableList({...DemoValues['FirstBA']})
    const  SecondBA        = new EditableList({...DemoValues['SecondBA']})
    data = {
        YourIndustry,
        PrimaryFocusLOB,
        FirstBA,
        SecondBA,
    ...data }

    // create sub-lists

    PrimaryFocusLOB
        .getList()
        .forEach(row => {
           if (row.list)
               row.child = new EditableList({ ...row, caption:row.label })
         })



    // form ui

    methods = {
        SynchronizeLists () {
            let   RNA = this
            const PrimaryFocusLOB = RNA.$data.PrimaryFocusLOB
            const FirstBA         = RNA.$data.FirstBA
            const SecondBA        = RNA.$data.SecondBA
            let rowid = PrimaryFocusLOB.uimodel
            const row = PrimaryFocusLOB.getItem(rowid)
            if (!row.child) { // create new
                 row.child = new EditableList({caption:row.label})
            }
            // sync
            FirstBA.rows     = row.child.rows || []
            FirstBA.uimodel  = null
            SecondBA.rows    = row.child.rows || []
            SecondBA.uimodel = null
        },
    ...methods }

    // editor ui

    data = {
        ui_editor_state: false,
        ui_newlabel:     '',
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
            // autofocus for next item
            if (RNA.$data.ui_editor_state) {
                RNA.$refs.EditorNewInputText
                   .$el.getElementsByTagName('input')[0].focus()
                RNA.$data.msg = RNA.$refs.EditorNewInputText.$el.getElementsByTagName('input')[0]
            }
        },
        OpenSublistInEditor (owner) {
            let RNA = this
            let rowid = owner.uimodel
            const row = RNA.$data.PrimaryFocusLOB.getItem(rowid)
            if (!row.child) { // create new
                 row.child = new EditableList({caption:row.label})
            }
            RNA.OpenInEditor(row.child)
        },
    ...methods }


// ---------------------------- dev tests

    let msg = ''
    data = {
        msg: msg,
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
        grid-column-gap: 10em;
        grid-template-columns: [a] auto [b] 10em [c];
    }
    .FieldBlock *              { grid-column: a / b; }
    .FieldBlock .edit-controls { grid-column: b / c; }
    .dev-log {
        margin-top:     20vh;
        padding-bottom: 10vh;
    }
</style>
