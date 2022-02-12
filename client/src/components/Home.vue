<template>
  <div class = "home-page">
    
      <router-link class= "absolute-center create-card" to="/create">
         <button type = "button"> 
            Create a Card
        </button>    
      </router-link>

    <img class="background" src="../assets/neon_heart.gif" alt="Neon Heart Gif">
        
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

  .home-page{
    position: relative;
    height: 100%;
  }

  .create-card {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .background{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>