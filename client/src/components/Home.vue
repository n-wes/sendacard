<template>
  <div class="container">
    <span class="title">Welcome to Send-a-Card!</span>
    <router-link to=/create>
      <q-btn class="btn" color="red" text-color="white" label="Create a card!"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .title {
    font-size: 4rem;
  }
  .btn {
    margin-top: 10rem;
    font-size: 5rem;
    padding: 3rem;
    width: 60rem;
    height: 20rem;
  }
</style>