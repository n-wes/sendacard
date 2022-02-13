<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cherry+Swash&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

@font-face {
  font-family: 'Dream Avenue';
  src: url(fonts/DreamAvenue.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Halimun';
  src: url(fonts/Halimun.ttf);
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'Pacifico', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 0;
}
html,
body,
#app,
.app-container {
  margin: 0;
  height: 100%;
}
</style>