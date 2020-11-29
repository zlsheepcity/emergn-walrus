<template>
    <wrap>

        <static-header/>

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
    const  YourIndustry    = new EditableList()
    const  PrimaryFocusLOB = new EditableList()
    const  FirstBA         = new EditableList()
    const  SecondBA        = new EditableList()
    data = {
        YourIndustry,
        PrimaryFocusLOB,
        FirstBA,
        SecondBA,
    ...data }

    // load data

    import ExampleList  from "@/models/ExampleList"

    YourIndustry.createList({
        constructor: EditableList,
     ...ExampleList['YourIndustry']
    })
    PrimaryFocusLOB.createList({
        constructor: EditableList,
     ...ExampleList['PrimaryFocusLOB'],
    })
    FirstBA.createList({
        constructor: EditableList,
     ...ExampleList['FirstBA'],
    })
    SecondBA.createList({
        constructor: EditableList,
     ...ExampleList['SecondBA'],
    })


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
