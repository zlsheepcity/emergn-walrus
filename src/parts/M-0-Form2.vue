<template>
    <wrap>

    <section>
        <v-container class="mt-12">
            <v-card tile flat>
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-card-title class="headline">
                        Leading currency
                        </v-card-title>
                </v-col>
                <v-col cols="12" md="7">

                <!-- ···························· Currencies -->
                    <section v-for="list in [Currencies]">
                        <div class="selectbox py-3">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "name"
                                item-value   = "rowid"
                                :success-messages = "!!list.uimodel && 'Wonderful!' ||''"
                                />
                        </div>
                    </section>
                <!-- ···························· -->

                </v-col>
            </v-row>
            </v-card>

            <!-- ···························· Financial data Indicators -->

            <div v-for="indicator in Indicators" :key="indicator.name">
                <number-input :title="indicator.name" v-model="indicator.index">
                </number-input>
            </div>


        </v-container>
    </section>

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
    computed = { ...computed, router ()   { return this.$router } }
    methods  = { ...methods,  goto (path) { return this.$router.push(path) } }

// ---------------------------- dev

    // create currency list

    import EditableList    from "@/models/EditableList"
    const Currencies    = new EditableList({constructor: EditableList})

    const Indicators = [
        {name: "Revenue", index: new Number},
        {name: "Operating income", index: new Number},
        {name: "COGS: Cost of Goods Sold", index: new Number},
        {name: "Average annual inventory", index: new Number},
        {name: "Days Sales Outstanding", index: new Number},
        {name: "Open items - Overdue invoices from customers", index: new Number},
        {name: "Number of employees", index: new Number},
        {name: "DPO: Days Payable Outstanding", index: new Number},
        {name: "Open Items - Overdue Supplier Invoices", index: new Number},
        {name: "Additional KPI", index: new Number}
    ]

    data = {
        Currencies,
        Indicators,
    ...data }

    methods = {
        ExportAll () { return [
            Currencies.ExportList(),
        ]},
    ...methods }

    // load data

    import ExampleList  from "@/models/ExampleList"

    Currencies.CreateList({...ExampleList['Currencies']})

// ---------------------------- ui actions

    data = {
        ui_editor: {
            state: false,
            list:  false,
            input: '',
        },
    ...data }

// ---------------------------- export ready

export default {
    name: 'part-M-0-Form2',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
