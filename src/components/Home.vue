<template>
<!-- 作为主页的存在 -->
<div id="home">
<h2>Hello!</h2>
<div id="hint" title="免责声明">站点部分资源来源网络.</div>
<el-button id="goto" @click="goto">click me</el-button>
</div>
</template>

<script>
export default {
    methods:{
        goto(){
            alert("hello ?");
            this.$parent.isBill=true;
        }
    }
}
</script>

<style lang="stylus">
#hint
    position fixed
    right 1%
    bottom 1%
    color #ccc
#hint:hover
    cursor pointer
#goto
    position fixed
    height 264px
    width 264px
    left: 42%;
    top: 35%;
    opacity 0.1
body
    // height 100%
    // width 100%
    background-color:red
    background url('../assets/img/th.jpg') no-repeat
    background-position center
    background-size 20%
    background-attachment fixed
</style>