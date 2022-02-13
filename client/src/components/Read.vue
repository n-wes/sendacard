<template>
  <div>
    WELCOME TO Read PAGE
  </div>
</template>

<script>
export default {
  name: 'Read',
  data(){
    return{
      title: 'Read',
      urlArgs: {}
    }
  },
  mounted() {

      console.log(this.$route);
      this.urlArgs = {
        type: this.$route.query.type,
        front: this.$route.query.front,
        main: this.$route.query.main,
        back: this.$route.query.back
      }

      this.urlArgs.front = this.urlArgs.front.replace(/`/g, " ");
      this.urlArgs.main = this.urlArgs.main.replace(/`/g, " ");
      this.urlArgs.back = this.urlArgs.back.replace(/`/g, " ");
  },
  props: ['messageString']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>