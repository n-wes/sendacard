<template>
  <div>

    <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white">
        <q-toolbar>

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Send-A-Card
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-label for="create-from">From</q-label>
        <q-input outlined class="q-my-xs q-mx-sm" v-model="from"
                type="text" id="create-from" name="name" required
                minlength="4" maxlength="50" size="5"></q-input>

        <q-label for="create-to">To</q-label>
        <q-input outlined class="q-my-xs q-mx-sm" v-model="to"
                type="text" id="create-to" name="name" required
                minlength="4" maxlength="50" size="10"></q-input>

        <q-label for="create-message">Front</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="front"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="250" rows="5" size="10"></q-input>

        <q-label for="create-message">Main</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="main"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="250" rows="5" size="10"></q-input>

        <q-label for="create-message">Back</q-label>
        <q-input outlined class="q-my-xs q-mx-sm lower-height" v-model="back"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="20" rows="5" size="10"></q-input>

        <q-btn type="button" @mouseover="buildURL" @click="buildURL" class="q-my-lg">
          <!-- <router-link :to="{name: 'Send', params: {url: this.urlExtension}}"> -->
          <!-- <router-link to="/send"> -->
          <router-link :to="`/send`+this.urlExtension">          
            Generate
          </router-link>
        </q-btn>
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
      cardType: "v-1",
      to: "",
      from: "",
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
      this.urlExtension = "?type=" + this.cardType + "&from=" + this.from + "&to=" + this.to + "&front=";
      this.urlExtension += this.front + "&main=" + this.main + "&back=" + this.back;
      this.urlExtension = this.urlExtension.replace(/ /g, "`");

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
.no-line {
  text-decoration: none;
}
</style>