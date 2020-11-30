<template>
    <wrap>

    <static-header/>

    <!-- fields -->

    <v-container>

        <!-- ···························· YourIndustry -->

        <section class="FieldBlock" v-for="list in [YourIndustry]">
            <div class="overline">{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5rem"
                    @click = "uiOpenListInEditor(list)"
                    >Edit sub-list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :placeholder = "list.placeholder"
                    :items       = "list.GetList()"
                    item-text    = "label"
                    item-value   = "rowid"
                    />
            </div>
        </section>

        <!-- ···························· PrimaryFocusLOB -->

        <section class="FieldBlock" v-for="list in [PrimaryFocusLOB]">
            <div class="overline">{{list.caption}}</div>
            <div class="controls">
                <v-btn
                    class  = "accent"
                    width  = "10rem"
                    height = "5rem"
                    @click = "uiOpenListInEditor(list)"
                    >Edit list</v-btn>
            </div>
            <div class="selectbox">
                <v-select solo
                    v-model      = "list.uimodel"
                    :placeholder = "list.placeholder"
                    :items       = "list.GetList()"
                    item-text    = "label"
                    item-value   = "rowid"
                    />
            </div>
        </section>

    </v-container>

    <!-- dev -->

    <debug>

        <v-container>
            <h2 class="mb-4">Developer area</h2>

<!--
            <header class="title">PrimaryFocusLOB</header>
            <div display-source>{{PrimaryFocusLOB}}</div>
-->

        </v-container>

        <v-container msg>
            <div class="overline">msg</div>
            <div display-source>{{msg||typeof(msg)}}</div>
        </v-container>
        <v-container current-list-plain-view>

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

            <header class="title">ui_editor.list</header>
            <div display-source>{{ui_editor.list}}</div>

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
    data = {
        YourIndustry,
        PrimaryFocusLOB,
        FirstBA,
        SecondBA,
    ...data }

    // load data

    import ExampleList  from "@/models/ExampleList"

    YourIndustry.CreateList({...ExampleList['YourIndustry']})
    PrimaryFocusLOB.CreateList({...ExampleList['PrimaryFocusLOB']})
    FirstBA.CreateList({...ExampleList['FirstBA']})
    SecondBA.CreateList({...ExampleList['SecondBA']})

// ---------------------------- ui actions

    data = {
        ui_editor: {
            state: false,
            list:  false,
            input: '',
        },
    ...data}

    methods = {

        uiOpenListInEditor (list) {
            let RNA = this
            RNA.$data.ui_editor = { state:true, input:'', list }
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
    .FieldBlock {
        display: grid;
      --controls-gap:   10rem;
      --design-gap:  -0.75rem;
        grid-row-gap: 0.25rem;
        grid-column-gap: var(--controls-gap);
        grid-template-columns: [a] auto [b] 10em [c];
        grid-template-areas:
            'title controls'
            'field controls';
    }
    .FieldBlock > *         { grid-area: field }
    .FieldBlock > .overline { grid-area: title }
    .FieldBlock > .controls { grid-area: controls }
    .FieldBlock   .selectbox {
        margin-left: var(--design-gap);
    }
    @media screen and (max-width:60rem) {
        .FieldBlock {
          --controls-gap: 2rem;
          --design-gap:   0rem;
        }
    }
</style>
