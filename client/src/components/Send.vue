<template>
  <div>
    <div class="container">
      <div class="text absolute-center">
        Happy Valentine's Day!
        <h3> Here's Your Link: 
          <router-link style="text-decoration: none; color: red;" to="/read">Click Me!</router-link>
        </h3>
      </div>
    </div>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'Send',
  data(){
    return{
      title: 'Send'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
  }
  .text {
    font-size: 80px;
    color: #000000;
  }
</style>