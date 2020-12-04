<template>
    <wrap>
 <v-card tile flat>
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-card-title class="headline">
                        {{title}}
                        </v-card-title>
                </v-col>

                <v-col cols="12" md="7">
                    <v-text-field
                        placeholder="Enter number"
                        type="number"
                        :value="index"
                        v-on:input="updateIndexValue($event)"
                        solo
                    ></v-text-field>
                </v-col>
            </v-row>
            </v-card>
    </wrap>
</template>

<style>
 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>

<script>
// ---------------------------- define export

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}

// ---------------------------- main logic

props = [ ...props, 'title', 'index']
methods = {
      updateIndexValue: function (index) {
        this.$emit('input', index)
      }
    }
    
// ---------------------------- export ready

export default {
    name: 'number-input',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
