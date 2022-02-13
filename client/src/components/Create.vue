<template>
  <div class="container">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-red text-white">
        <q-toolbar>
          <q-toolbar-title>
            Send-A-Card
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-label class="label" for="create-message">Front Page</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="front"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="250" rows="5" size="10"></q-input>

        <q-label class="label" for="create-message">Main Page</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="main"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="250" rows="5" size="10"></q-input>

        <q-label class="label" for="create-message">Back Page</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="back"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="20" rows="5" size="10"></q-input>

        <router-link :to="`/send`+this.urlExtension">          
            <q-btn type="button" @mouseover="buildURL" @click="buildURL" class="q-my-lg btn">
                Create Card
            </q-btn>
        </router-link>
      </q-drawer>

      <q-page-container>
        <!-- <router-view /> -->
        <Preview cardType="v-1" :frontMsg="this.front" :mainMsg="this.main" :backMsg="this.back"></Preview>
      </q-page-container>
        
    </q-layout>
  </div>
</template>

<script>
import Preview from "./Preview.vue";

export default {
  name: 'Create',
  components: {
    Preview
  },
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      // Set by form fields.
      cardType: "",
      front: "",
      main: "",
      back: "",
      urlExtension: ""
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    buildURL() {
      this.urlExtension = "?type=" + this.cardType + "&front=";
      this.urlExtension += this.front + "&main=" + this.main + "&back=" + this.back;
      this.urlExtension = this.urlExtension.replace(/ /g, "+");

      console.log(this.urlExtension); // For debugging message string.
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
  }
}
</script>

<style scoped>
.container {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.label {
    font-size: 1.5rem;
}
.btn {
    width: 15rem;
    height: 4rem;
    font-size: 1.5rem;
    background-color: red;
    color: white;
    text-decoration: none;
}
</style>