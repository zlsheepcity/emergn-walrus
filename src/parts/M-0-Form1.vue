<template>
    <wrap>

        <v-container class="mt-12">

            <v-card tile flat>
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-card-title class="headline">
                        Your Industry
                        </v-card-title>
                    <v-card-subtitle class="caption">
                        This is a guided assessment,<br>
                        so the labels are important
                   </v-card-subtitle>
                </v-col>
                <v-col cols="12" md="7">

                    <!-- ···························· YourIndustry -->

                    <section v-for="list in [YourIndustry]">
                        <div class="selectbox py-3">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "label"
                                item-value   = "rowid"
                                :success-messages = "!!list.uimodel && 'Wonderful!' ||''"
                                />
                        </div>
                    </section>

                    <!-- ···························· -->

                </v-col>
            </v-row>
            </v-card>


            <v-card tile flat>
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-card-title class="headline">
                        Primary Focus LOB
                        </v-card-title>
                    <v-card-subtitle class="caption">
                        This is a guided assessment,<br>
                        so the labels are important
                   </v-card-subtitle>
                </v-col>
                <v-col cols="12" md="7" class="mb-4">

                    <!-- ···························· PrimaryFocusLOB -->

                    <section v-for="list in [PrimaryFocusLOB]">
                        <div class="selectbox py-3">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "label"
                                item-value   = "rowid"
                                :success-messages = "!!list.uimodel && 'Wonderful!' ||''"
                                @change      = "uiSwitchSublists()"
                                />
                        </div>
                    </section>

                    <!-- ···························· -->

                    <v-card tile flat
                        :disabled="!PrimaryFocusLOB.uimodel"
                        :style="{ opacity: PrimaryFocusLOB.uimodel ? 1 : 0.25 }">

                    <section v-for="list in [FirstBA]">

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Need for differentiation
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating1" length="3"/>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Happiness with the existing solution
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating2" length="3"/>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Need for differentiation
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating3" length="3"/>
                            </v-col>
                        </v-row>

                        <div class="overline px-3 pt-4">
                            Business Areas
                            </div>
                        <div class="selectbox">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "label"
                                item-value   = "rowid"
                                :success-messages = "
                                    !! list.uimodel
                                    && list.uimodel.length
                                    && 'Wonderful!'
                                    || ''"
                                multiple>
                                <template v-slot:prepend-item>
                                <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title>
                                    <i>Select First and Second most important</i>
                                    </v-list-item-title>
                                    </v-list-item-content>
                                    </v-list-item>
                                    <v-divider class="mt-2"/>
                                </template>
                            </v-select>
                        </div>
                    </section>

                    </v-card>


                </v-col>
            </v-row>
            </v-card>


            <v-card tile flat>
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-card-title class="headline">
                        Secondary Focus LOB
                        </v-card-title>
                    <v-card-subtitle class="caption">
                        <v-chip color="transparent" @click="yesPlease=!yesPlease">
                            <v-icon v-if="yesPlease">mdi-checkbox-marked-outline</v-icon>
                            <v-icon v-if="!yesPlease">mdi-checkbox-blank-outline</v-icon>
                            <div class="pl-2">Yes, please</div>
                            </v-chip>
                   </v-card-subtitle>
                </v-col>
                <v-col cols="12" md="7" class="mb-4">

                    <!-- ···························· SecondaryFocusLOB -->

                    <section v-for="list in [PrimaryFocusLOB]">
                        <div class="selectbox py-3">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "label"
                                item-value   = "rowid"
                                :success-messages = "!!list.uimodel && 'Wonderful!' ||''"
                                @change      = "uiSwitchSublists()"
                                :disabled    = "!yesPlease"
                                :style="{ opacity: yesPlease ? 1 : 0.25 }"
                                />
                        </div>
                    </section>

                    <!-- ···························· -->

                    <v-card tile flat v-if="yesPlease"
                        :disabled="!PrimaryFocusLOB.uimodel"
                        :style="{ opacity: PrimaryFocusLOB.uimodel ? 1 : 0.25 }">

                    <section v-for="list in [FirstBA]">

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Need for differentiation
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating1" length="3"/>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Happiness with the existing solution
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating2" length="3"/>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12" md="7">
                                <div class="overline px-3">
                                    Need for differentiation
                                    </div>
                                    <p class="caption grey--text px-3">
                                        This is a guided assessment,<br>
                                        so the labels are important
                                    </p>
                                    </v-col>
                            <v-col cols="12" md="5">
                                <v-rating v-model="rating3" length="3"/>
                            </v-col>
                        </v-row>

                        <div class="overline px-3 pt-4">
                            Business Areas
                            </div>
                        <div class="selectbox">
                            <v-select solo
                                v-model      = "list.uimodel"
                                :placeholder = "list.placeholder"
                                :items       = "list.GetItems()"
                                item-text    = "label"
                                item-value   = "rowid"
                                :success-messages = "
                                    !! list.uimodel
                                    && list.uimodel.length
                                    && 'Wonderful!'
                                    || ''"
                                multiple>
                                <template v-slot:prepend-item>
                                <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title>
                                    <i>Select First and Second most important</i>
                                    </v-list-item-title>
                                    </v-list-item-content>
                                    </v-list-item>
                                    <v-divider class="mt-2"/>
                                </template>
                            </v-select>
                        </div>
                    </section>

                    </v-card>


                </v-col>
            </v-row>
            </v-card>

        </v-container>



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

    data = { ...data, e1:1, yesPlease:false, }
    data = { ...data, rating1:1, rating2:1, rating3:1 }


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

    methods = {
        ExportAll () { return [
            YourIndustry.ExportList(),
            PrimaryFocusLOB.ExportList(),
        ]},
    ...methods }

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
    ...data }

    methods = {

        uiOpenListInEditor (list) {
            let RNA = this
            RNA.$data.ui_editor = { state:true, input:'', list }
        },

        uiOpenSublistInEditor () {
            let RNA = this

            if ( !RNA.uiIsSublistReady() ) return false

            let rowid = RNA.$data.PrimaryFocusLOB.uimodel
            const row = RNA.$data.PrimaryFocusLOB.GetItem(rowid)
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

        uiIsSublistReady () {
            let RNA = this
            return !!RNA.$data.PrimaryFocusLOB.uimodel
        },

        uiSwitchSublists () {
            let   RNA = this
            const PrimaryFocusLOB = RNA.$data.PrimaryFocusLOB
            const FirstBA         = RNA.$data.FirstBA
            const SecondBA        = RNA.$data.SecondBA

            // define list to change
            let rowid = PrimaryFocusLOB.uimodel
            const row = PrimaryFocusLOB.GetItem(rowid)
            if (!row.child) { // create new sublist
                 row.child = new PrimaryFocusLOB.constructor({caption:row.label})
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
    name: 'part-M-0-Form1',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
