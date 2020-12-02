<template>

    <v-card dark
        class     = "walrus-card d-flex flex-column"
       :class     = "{'disabled':disabled}"
        height    = "100%"
        :disabled = "disabled"
        @click    = "click"
        >
        <v-card-text>
            <slot/>
        </v-card-text>
        <v-card-actions>
            <div v-if="disabled" class="overline pl-2">locked</div>
            <div v-else          class="overline pl-2">unlocked</div>
            </v-card-actions>
    </v-card>

</template>

<style>
    .walrus-card.v-card {
        display: flex;
        flex-direction: column;
    }
    .walrus-card.v-card .v-card__text {
        flex-grow: 1;
    }
    .walrus-card.theme--dark          { background-color: hsl(200 35% 34%); }
    .walrus-card.theme--dark.disabled { background-color: hsl(200 25% 74%); }
    .walrus-card.theme--dark .headline { color:white }
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

    props = [ ...props, 'disabled', 'action' ]
    computed = {
        click () { return this.$props.action ? this.$props.action : f=>false },
    ...computed }

// ---------------------------- export ready

export default {
    name: 'walrus-card',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>
