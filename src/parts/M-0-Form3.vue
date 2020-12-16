<template>
  <wrap>
    <v-container>
      <v-row>
        <v-col >
          <v-card style="box-shadow: none">
              {{FormModel.Innovation.labels[0]}}
          </v-card>
        </v-col>
        <v-col>
          <v-card style="box-shadow: none">
              {{FormModel.Innovation.labels[1]}}
          </v-card>
        </v-col>
         <v-col>
          <v-card style="box-shadow: none">
              {{FormModel.Innovation.labels[2]}}
          </v-card>
        </v-col>
        <v-col>
          <v-card style="box-shadow: none">
              {{FormModel.Innovation.labels[3]}}
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card style="box-shadow: none">
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            :color="FormModel.Innovation.color" 
            :min="FormModel.Innovation.min" 
            :max="FormModel.Innovation.max" 
            :step="FormModel.Innovation.step"
            :track-color="FormModel.Innovation.trackColor"
            v-model="FormModel.Innovation.val"
            > 
            </v-slider>
        </v-col>    
      </v-row>
      <v-row>
        <v-col md="3">
          <v-card style="box-shadow: none" >
              {{FormModel.Customization.labels[0]}}
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card style="box-shadow: none">
              {{FormModel.Customization.labels[1]}}
          </v-card>
        </v-col>
         <v-col md="4">
          <v-card style="box-shadow: none">
              {{FormModel.Customization.labels[2]}}
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card style="box-shadow: none">
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            :color="FormModel.Customization.color" 
            :min="FormModel.Customization.min" 
            :max="FormModel.Customization.max" 
            :step="FormModel.Customization.step"
            :track-color="FormModel.Customization.trackColor"
            v-model="FormModel.Customization.val"
            > 
            </v-slider>
        </v-col>    
      </v-row>
      <v-row>
        <v-col md="3">
          <v-card style="box-shadow: none" >
              {{FormModel.CloudPreference.labels[0]}}
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card style="box-shadow: none" >
               {{FormModel.CloudPreference.labels[1]}}
          </v-card>
        </v-col>
         <v-col md="4">
          <v-card style="box-shadow: none">
               {{FormModel.CloudPreference.labels[2]}}
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
            <v-card style="box-shadow: none">
         
            </v-card>
        </v-col>      
        <v-col >  
            <v-slider 
            :color="FormModel.CloudPreference.color" 
            :min="FormModel.CloudPreference.min" 
            :max="FormModel.CloudPreference.max" 
            :step="FormModel.CloudPreference.step"
            :track-color="FormModel.CloudPreference.trackColor"
            v-model="FormModel.CloudPreference.val"
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


// ----------------------------mockup data for non developed import


const FormModel = {
      CloudPreference: {
        color:"black",
        min:"0",
        max:"40",
        step:"20", 
        trackColor:"grey",
        labels:["Cloud preference", "Not many / Fit to standard", "High build to fit"],
        model:"CloudPreference",
        val: "",
      },
      Innovation: {
        color:"black",
        min:"0",
        max:"40",
        step:"15", 
        trackColor:"grey",
        labels:["Innovation","Innovator", "Fast follower", "Late follower"],
        model:"Innovation",
        val: "",
      },
      Customization: {
        color:"black",
        min:"0",
        max:"40",
        step:"20", 
        trackColor:"grey",
        labels:["Customization", "Not many / Fit to standard", "High build to fit"],
        model:"Customization",
        val: "",
      },
};


data = {
        FormModel,
    ...data }

  methods = {
        ExportAll () { 
          const FormModel = $this.data.FormModel;
          return FormModel;
        },
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
