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
      <q-input  type="text" id="create-from" name="name" required
              minlength="4" maxlength="8" size="10"></q-input>

      <q-label for="create-to">To</q-label>
      <q-input  type="text" id="create-to" name="name" required
              minlength="4" maxlength="8" size="10"></q-input>

      <q-label for="create-message">Message</q-label>
      <q-input  type="text" id="create-message" name="name" required
              minlength="4" maxlength="8" size="10"></q-input>

      <q-btn type="button">Generate</q-btn>
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
}
</script>