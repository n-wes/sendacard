<template>
  <div>

    <p>CREATE PAGE</p>
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-label for="create-from">From</q-label>
        <q-input outlined class="q-my-xs q-mx-sm" v-model="from"
                type="text" id="create-from" name="name" required
                minlength="4" maxlength="50" size="10"></q-input>

        <q-label for="create-to">To</q-label>
        <q-input outlined class="q-my-xs q-mx-sm" v-model="to"
                type="text" id="create-to" name="name" required
                minlength="4" maxlength="50" size="10"></q-input>

        <q-label for="create-message">Message (250 Characters)</q-label>
        <q-input outlined class="q-my-xs q-mx-sm" v-model="message"
                type="textarea" id="create-message" name="name" required
                minlength="4" maxlength="250" size="10"></q-input>

        <q-btn type="button" class="q-my-lg">Generate</q-btn>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
        
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'Create',
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      // Set by form fields.
      to: "",
      from: "",
      message: ""
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
  }
}
</script>