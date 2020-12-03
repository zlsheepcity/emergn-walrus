<template>
    <wrap>

    <static-header/>

    <!-- fields -->

    <v-container class="SetFocusFields">

        <!-- ···························· YourIndustry -->

        <section class="FieldBlock" v-for="list in [YourIndustry]">
            <div class="overline"  :class="uiIsListOpen(list)">{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5.25rem"
                    @click = "uiOpenListInEditor(list)"
                    >Edit list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :placeholder = "list.placeholder"
                    :items       = "list.GetItems()"
                    item-text    = "label"
                    item-value   = "rowid"
                    />
            </div>
        </section>

        <!-- ···························· PrimaryFocusLOB -->

        <section class="FieldBlock" v-for="list in [PrimaryFocusLOB]">
            <div class="overline"  :class="uiIsListOpen(list)">{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5.25rem"
                    @click = "uiOpenListInEditor(list)"
                    >Edit list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :placeholder = "list.placeholder"
                    :items       = "list.GetItems()"
                    item-text    = "label"
                    item-value   = "rowid"
                    @change      = "uiSwitchSublists(PrimaryFocusLOB, FirstBA, SecondBA)"
                    />
            </div>
        </section>

        <!-- ···························· FirstBA -->

        <section class="FieldBlock" v-for="list in [FirstBA]">
            <div class="overline"
                :class="uiIsListOpen({caption:list.current_caption})"
                >{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5.25rem"
                    @click = "uiOpenSublistInEditor(PrimaryFocusLOB)"
                    :disabled = "!uiIsSublistReady(PrimaryFocusLOB)"
                    >Edit sub-list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :items       = "list.GetItems()"
                    item-text    = "label"
                    item-value   = "rowid"
                    :disabled    = "!uiIsSublistReady(PrimaryFocusLOB)"
                    :placeholder = "
                        !  PrimaryFocusLOB.uimodel
                        ? `Select ${PrimaryFocusLOB.caption} first`
                        :  list.GetItems().length
                           ?  list.placeholder
                           : `List is empty`
                    "/>
            </div>
        </section>

        <!-- ···························· SecondBA -->

        <section class="FieldBlock" v-for="list in [SecondBA]">
            <div class="overline"
                :class="uiIsListOpen({caption:list.current_caption})"
                >{{list.caption}}</div>
            <div class="selectbox">
                <v-select solo
                    v-model       = "list.uimodel"
                    :items        = "list.GetItems()"
                    item-text     = "label"
                    item-value    = "rowid"
                    :disabled     = "!uiIsSublistReady(PrimaryFocusLOB)"
                    :placeholder  = "
                        !  PrimaryFocusLOB.uimodel
                        ? `Select ${PrimaryFocusLOB.caption} first`
                        :  list.GetItems().length
                           ?  list.placeholder
                           : `List is empty`
                    "/>
            </div>
        </section>

        <!-- ···························· SecondaryFocusLOB -->
        <v-divider class="pt-5"></v-divider>

        <section class="FieldBlock" v-for="list in [SecondaryFocusLOB]">
            <div class="overline"  :class="uiIsListOpen(list)">{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5.25rem"
                    @click = "uiOpenListInEditor(list)"
                    >Edit list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :placeholder = "list.placeholder"
                    :items       = "list.GetItems()"
                    item-text    = "label"
                    item-value   = "rowid"
                    @change      = "uiSwitchSublists(SecondaryFocusLOB, FirstBASecondary, SecondBASecondary)"
                    />
            </div>
        </section>

        <!-- ···························· FirstBASecondary -->

        <section class="FieldBlock" v-for="list in [FirstBASecondary]">
            <div class="overline"
                :class="uiIsListOpen({caption:list.current_caption})"
                >{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5.25rem"
                    @click = "uiOpenSublistInEditor(SecondaryFocusLOB)"
                    :disabled = "!uiIsSublistReady(SecondaryFocusLOB)"
                    >Edit sub-list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :items       = "list.GetItems()"
                    item-text    = "label"
                    item-value   = "rowid"
                    :disabled    = "!uiIsSublistReady(SecondaryFocusLOB)"
                    :placeholder = "
                        !  SecondaryFocusLOB.uimodel
                        ? `Select ${SecondaryFocusLOB.caption} first`
                        :  list.GetItems().length
                           ?  list.placeholder
                           : `List is empty`
                    "/>
            </div>
        </section>

        <!-- ···························· SecondBASecondary -->

        <section class="FieldBlock" v-for="list in [SecondBASecondary]">
            <div class="overline"
                :class="uiIsListOpen({caption:list.current_caption})"
                >{{list.caption}}</div>
            <div class="selectbox">
                <v-select solo
                    v-model       = "list.uimodel"
                    :items        = "list.GetItems()"
                    item-text     = "label"
                    item-value    = "rowid"
                    :disabled     = "!uiIsSublistReady(SecondaryFocusLOB)"
                    :placeholder  = "
                        !  SecondaryFocusLOB.uimodel
                        ? `Select ${SecondaryFocusLOB.caption} first`
                        :  list.GetItems().length
                           ?  list.placeholder
                           : `List is empty`
                    "/>
            </div>
        </section>

    </v-container>

    <!-- list editor -->

    <v-bottom-sheet flat scrollable
        v-model="ui_editor.state"
        content-class="pa-0">
        <v-card flat tile>
        <v-card-text class="pa-0">
        <v-sheet tile class="accent white--text">
        <v-container v-if="ui_editor.list">
        <template v-for="list in [ui_editor.list]">

            <h3 class="title pa-2 pt-0">
                <div class="overline">List editor</div>
                {{list.caption}}
            </h3>

            <section>

                <!-- ···························· List Items -->

                <div v-for="item in list.GetItems()"
                    class="d-flex">
                    <v-text-field solo hide-details
                        v-model="item.label"
                        placeholder="Text label"
                        class="mb-1 mr-4"
                        />
                    <v-btn text class="white--text mt-1 px-0"
                        @click="list.MoveItemUp(item)"
                        tabindex="-1"
                        :disabled = "item.rowid === 1"
                        ><v-icon>mdi-arrow-up</v-icon></v-btn>
                    <v-btn text class="white--text mt-1"
                        @click="list.MoveItemDown(item)"
                        tabindex="-1"
                        :disabled = "item.rowid === list.GetItems().length"
                        ><v-icon>mdi-arrow-down</v-icon></v-btn>
                    <v-btn text class="white--text mt-1"
                        @click="list.DeleteItem(item)"
                        tabindex="-1"
                        >remove</v-btn>
                </div>

                <!-- ···························· New Item -->

                <footer class="add-new-row d-flex mt-6">
                    <v-text-field solo hide-details
                        class="mb-4 mr-1"
                        ref="EditorInputText"
                        v-model        = "ui_editor.input"
                        placeholder    = "New text label"
                        @keyup.enter   = "uiAddItemInEditor()" />
                    <v-btn text @click = "uiAddItemInEditor()"
                       :disabled       = "!ui_editor.input"
                        class="white--text mt-1"
                        >add option</v-btn>
                </footer>

                <!-- ···························· -->

            </section>

        </template>
        </v-container>
        </v-sheet>
        </v-card-text>
        </v-card>
        </v-bottom-sheet>


    <!-- dev -->

    <debug class="pb-12">

        <v-container class="d-flex justify-space-between">
            <section>

                <h2 class="mb-4">Developer area</h2>

                <section class="pb-4">
                    <h4 class="overline">Current list plain view</h4>
                    <div class="pt-0"><b>{{YourIndustry.caption}}</b></div>
                    <div v-for="rowitem in YourIndustry.rows" class="pl-4" >
                        <div>{{ rowitem.label }}</div>
                    </div>
                    <div class="pt-2"><b>{{PrimaryFocusLOB.caption}}</b></div>
                    <div v-for="rowitem in PrimaryFocusLOB.rows" class="pl-4">
                        <div>{{ rowitem.label }}</div>
                        <div v-if="rowitem.child" class="pl-4">
                            <div v-for="subitem in rowitem.child.rows">
                                <div>{{ subitem.label }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-2"><b>{{SecondaryFocusLOB.caption}}</b></div>
                    <div v-for="rowitem in SecondaryFocusLOB.rows" class="pl-4">
                        <div>{{ rowitem.label }}</div>
                        <div v-if="rowitem.child" class="pl-4">
                            <div v-for="subitem in rowitem.child.rows">
                                <div>{{ subitem.label }}</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="pb-1">
                    <v-btn small class="accent"
                        @click="f=>{msg=ExportAll()}"
                        >display export</v-btn>
                </section>

                <section>
                    <div class="overline">msg</div>
                    <div display-source>{{msg||typeof(msg)}}</div>
                </section>

            </section>
            <section>

                <section>
                    <div class="overline">status</div>
                    <pre display-source>
First presentation complete

## Features
- Load list
- Edit list
- Editor: create, update, delete item

## Todo
- Save/Update DataBase
- Editor: change order
                    </pre>

                    <div class="overline">code source</div>
                    <div><a href="https://github.com/zlsheepcity/emergn-walrus">github/emergn-walrus</a></div>
                    <ul>
                        <li><a href="https://github.com/zlsheepcity/emergn-walrus/blob/master/src/models/ExampleList.js">List example</a></li>
                        <li><a href="https://github.com/zlsheepcity/emergn-walrus/blob/master/src/models/EditableList.js">List model</a></li>
                    </ul>
                    
                </section>

            </section>
        </v-container>

    </debug>

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

// ---------------------------- view content

    import StaticHeader from "@/components/StaticHeader.vue"
    components = { StaticHeader, ...components }

    data = { msg:'', ...data }

// ---------------------------- main logic

    // create lists

    import EditableList    from "@/models/EditableList"
    const  YourIndustry    = new EditableList({constructor: EditableList})
    const  PrimaryFocusLOB = new EditableList({constructor: EditableList})
    const  FirstBA         = new EditableList({constructor: EditableList})
    const  SecondBA        = new EditableList({constructor: EditableList})
    const  SecondaryFocusLOB = new EditableList({constructor: EditableList})
    const  FirstBASecondary  = new EditableList({constructor: EditableList})
    const  SecondBASecondary = new EditableList({constructor: EditableList})

    data = {
        YourIndustry,
        PrimaryFocusLOB,
        FirstBA,
        SecondBA,
        SecondaryFocusLOB,
        FirstBASecondary,
        SecondBASecondary,
    ...data }

    methods = {
        ExportAll () { return [
            YourIndustry.ExportList(),
            PrimaryFocusLOB.ExportList(),
            SecondaryFocusLOB.ExportList(),
        ]},
    ...methods }

    // load data

    import ExampleList  from "@/models/ExampleList"

    YourIndustry.CreateList({...ExampleList['YourIndustry']})
    PrimaryFocusLOB.CreateList({...ExampleList['PrimaryFocusLOB']})
    FirstBA.CreateList({...ExampleList['FirstBA']})
    SecondBA.CreateList({...ExampleList['SecondBA']})
    SecondaryFocusLOB.CreateList({...ExampleList['SecondaryFocusLOB']})
    FirstBASecondary.CreateList({...ExampleList['FirstBA']})
    SecondBASecondary.CreateList({...ExampleList['SecondBA']})

// ---------------------------- ui actions

    data = {
        ui_editor: {
            state: false,
            list:  false,
            input: '',
        },
    ...data }

    methods = {

        uiOpenListInEditor (list) {
            let RNA = this
            RNA.$data.ui_editor = { state:true, input:'', list }
        },

        uiOpenSublistInEditor (focusLOB) {
            let RNA = this

            if ( !RNA.uiIsSublistReady(focusLOB) ) return false

            let rowid = focusLOB.uimodel
            const row = focusLOB.GetItem(rowid)
            RNA.uiOpenListInEditor(row.child)
        },

        uiAddItemInEditor () {
            let RNA = this
            let label = RNA.$data.ui_editor.input
            let list  = RNA.$data.ui_editor.list

            if (!label || !list) return false

            // update model
            list.CreateItem({label})

            // update ui
            RNA.$data.ui_editor.input = ''   // reset text input
        },

        uiIsListOpen (list) {
            let   RNA = this
            const open = RNA.$data.ui_editor.state
            const data = RNA.$data.ui_editor.list

            // return class-name friendly
            if ( !open||!data ) return ''
            if ( !list )        return ''
            if (  list.caption !== data.caption ) return ''
            return 'is-open'
        },

        uiIsSublistReady (focusLOB) {
            let RNA = this
            return !!focusLOB.uimodel
        },

        uiSwitchSublists (focusLOB, firstBA, secondBA) {
            let   RNA = this
            const FocusLOB = focusLOB
            const FirstBA  = firstBA
            const SecondBA = secondBA

            // define list to change
            let rowid = FocusLOB.uimodel
            const row = FocusLOB.GetItem(rowid)
            if (!row.child) { // create new sublist
                 row.child = new FocusLOB.constructor({caption:row.label})
            }

            // reset ui state
            FirstBA.uimodel  = null
            SecondBA.uimodel = null

            // sync sublists
            FirstBA.rows     = row.child.rows || []
            SecondBA.rows    = row.child.rows || []
            FirstBA.current_caption  = row.child.caption || false
            SecondBA.current_caption = row.child.caption || false
        },

    ...methods }

// ---------------------------- export ready

export default {
    name: 'HomeView',
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
    .SetFocusFields {
        padding-bottom: 20vh;
    }
    .FieldBlock {
        display: grid;
      --controls-gap:   10rem;
      --design-gap:   0.75rem;
        grid-row-gap: 0.25rem;
        grid-column-gap: var(--controls-gap);
        grid-template-columns: [a] auto [b] 10em [c];
        grid-template-areas:
            'title controls'
            'field controls';
    }
    .FieldBlock> *         { grid-area: field }
    .FieldBlock> .overline { grid-area: title }
    .FieldBlock> .controls { grid-area: controls }
    .FieldBlock  .overline { padding-left: var(--design-gap); }
    .FieldBlock  .is-open  { background-color: yellow; }

    @media screen and (max-width:60rem) {
        .FieldBlock {
          --controls-gap: 2rem;
          --design-gap:   0rem;
        }
    }
</style>
