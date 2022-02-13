<template>
  <div>
    <div class="container">
      <div class="text absolute-center">
        Happy Valentine's Day!
        <h3> Here's Your Link: 
          <router-link  style="text-decoration: none; color: red;" 
                        :to="`/read?type=`+this.urlArgs.type+`&from=`+this.urlArgs.from+`&to=`+this.urlArgs.to+`&front=`+this.urlArgs.front+`&main=`+this.urlArgs.main+`&back=`+this.urlArgs.back">
            Click Me!
          </router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Send',
  data(){
    return{
      title: 'Send',
      urlArgs: {}
    }
  },
  mounted() {

      console.log(this.$route);
      this.urlArgs = {
        type: this.$route.query.type,
        to: this.$route.query.to,
        from: this.$route.query.from,
        front: this.$route.query.front,
        main: this.$route.query.main,
        back: this.$route.query.back
      }
  },
  props: ['messageString']
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