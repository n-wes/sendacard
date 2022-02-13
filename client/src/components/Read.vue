<template>
  <div>
    <Preview :cardType="type" :frontMsg="front" :mainMsg="main" :backMsg="back"></Preview> 
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
      const type = route.query.type
      const front = route.query.front.replace(/`/g, " ")
      const main = route.query.main.replace(/`/g, " ")
      const back = route.query.back.replace(/`/g, " ")
      return { type, front, main, back }
  },
  props: ['messageString']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>