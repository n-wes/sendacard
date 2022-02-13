<template>
  <div class = "home-page">

    <h3 class = "template">
    Welcome to the LOVE CARD 
    </h3>
      <router-link class= "absolute-center create-card" to="/create">
         Create Card <br>
         click me 
      </router-link>

    <img class="background" src="../assets/red_heart.png" alt="Neon Heart Gif">
        
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .template {
    display: block;
    font-size: 2em;
    color:black;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .home-page{
    position: relative;
    height: 100%;
  }

  .create-card {
    margin: 0;
    font-size: 4rem;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: none;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .background{
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>