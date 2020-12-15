<template>
  <wrap>
    <v-container class="">
      <v-row>
        <v-col style="box-shadow: none">
          <v-card >
              Innovation
          </v-card>
        </v-col>
        <v-col>
          <v-card>
              Innovator
          </v-card>
        </v-col>
         <v-col>
          <v-card>
              Fast follower
          </v-card>
        </v-col>
        <v-col>
          <v-card>
              Late follower
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card>
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            color="black" 
            min="0" 
            max="40" 
            step="20"
            track-color="grey"
            v-model="Innovation"
            > 
            </v-slider>
        </v-col>    
      </v-row>
      <v-row>
        <v-col md="3">
          <v-card >
              Customization
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
              Not many / Fit to standard
          </v-card>
        </v-col>
         <v-col md="4">
          <v-card>
              High build to fit
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card>
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            color="black" 
            min="0" 
            max="40" 
            step="20"
            track-color="grey"
            v-model="Customization"
            > 
            </v-slider>
        </v-col>    
      </v-row>
      <v-row>
        <v-col md="3">
          <v-card >
              Cloud preference
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
              Not many / Fit to standard
          </v-card>
        </v-col>
         <v-col md="4">
          <v-card>
              High build to fit
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card>
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            color="black" 
            min="0" 
            max="40" 
            step="20"
            track-color="grey"
            v-model="CloudPreference"
            > 
            </v-slider>
        </v-col>    
      </v-row>
    </v-container>
  </wrap>
</template>

<script>
// ---------------------------- define export

let props = [];
let components = {};
let methods = {};
let computed = {};
let watch = {};
let data = {};

// ---------------------------- main logic

// use router
computed = {
  ...computed,
  router() {
    return this.$router;
  },
};

methods = {
  ...methods,
  goto(path) {
    return this.$router.push(path);
  },
};

// ---------------------------- Dev

const CloudPreference = [];
const Innovation = [];
const Customization =[];


data = {
        CloudPreference,
        Innovation,
        Customization,
    ...data }

  methods = {
        ExportAll () { return [
            CloudPreference,
            Innovation,
            Customization
        ]},
    ...methods }    

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
  name: "part-M-0-Form3",
  props,
  components,
  methods,
  computed,
  watch,
  data() {
    return data;
  },
};

// ---------------------------- end script
</script>
