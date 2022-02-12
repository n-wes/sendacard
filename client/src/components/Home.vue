<template>
  <div>
    WELCOME TO THE LOVE CARD 


    <img class="background" src="../assets/neon_heart.gif" alt="Neon Heart Gif">
        <router-link to="/create"> <p>Create a Card </p> </router-link>
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
  .background{
    width: 100%;
    height: 100%;
  }
</style>