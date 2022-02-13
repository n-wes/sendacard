<template>
  <div>
    <Preview :cardType="v-1" :frontMsg="this.front" :mainMsg="this.main" :backMsg="this.back"></Preview> 
  </div>
</template>

<script>
import Preview from './Preview.vue';
import { useRoute } from 'vue-router'

export default {
  components: { Preview },
  name: 'Read',
  data(){
    return{
      title: 'Read',
      urlArgs: {}
    }
  },
  setup() {

      const route = useRoute()

      console.log(route);

      // this.urlArgs = {
      //   type: this.$route.query.type,
      //   front: this.$route.query.front,
      //   main: this.$route.query.main,
      //   back: this.$route.query.back
      // }

      // this.urlArgs.front = this.urlArgs.front.replace(/`/g, " ");
      // this.urlArgs.main = this.urlArgs.main.replace(/`/g, " ");
      // this.urlArgs.back = this.urlArgs.back.replace(/`/g, " ");
  },
  props: ['messageString']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>