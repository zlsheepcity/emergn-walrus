<template>
    <wrap>

    <!-- ···························· HEADER -->

    <walrus-header
         title="Home"
        :links="[
            { goto:'Welcome', label:'Logout' },
        ]"/>


    <!-- ···························· PROJECT LINKS -->

    <v-container>

        <v-row dense align-content="stretch">

            <v-col  cols="12" md="3">
            <walrus-card :disabled="false" :action="f=>goto('Module0')">
                <p> Module 0 </p>
                <div class="headline">
                    Guided Customer Assessment
                </div>
            </walrus-card>
            </v-col>

        </v-row>

        <v-row dense align-content="stretch">

            <v-col  cols="12" md="3">
            <walrus-card :disabled="true">
                <p> Module 1A </p>
                <div class="headline">
                    WHY? — Experience the Value of SAP S/4HANA
                </div>
            </walrus-card>
            </v-col>

            <v-col  cols="12" md="3">
            <walrus-card :disabled="true">
                <p> Module 1B </p>
                <div class="headline">
                    WHY? - Review SAP´s Outside – In Point of View
                </div>
            </walrus-card>
            </v-col>


        </v-row>

    </v-container>


    <!-- ···························· -->

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
    computed = { ...computed, Router ()   { return this.$router } }
    methods  = { ...methods,  goto (path) { return this.$router.push(path) } }


// ---------------------------- export ready

export default {
    name: 'Home',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
