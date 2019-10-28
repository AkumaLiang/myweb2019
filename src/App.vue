<template>
  <div id="app">
    <HelloWorld v-if="isBill" msg="Welcome to Your Vue.js App"/>
    <Home v-else></Home>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  data(){return{
    isBill:false
  }},
  components: {
    HelloWorld,
    Home
  }
}
</script>



<style lang="stylus">
@import url('./common/fonts/font.css');

/*
// *
  // padding:0
  // margin:0

// body
  // height:100%
  // background: url('./assets/img/th.jpg') no-repeat
  // background-size:47%
  // background-position: -27% 14%
  // background-attachment: fixed;
*/

#app
  //color: #2c3e50
.hello
  font-family: "rmddk"
</style>



