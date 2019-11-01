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
            // alert("hello ?");
            // this.$router.push("/bill")
            window.console.log(this.$msgbox);
            const h = this.$createElement;

            this.$msgbox({
                closeOnClickModal:false,
                cancelButtonText: '确定',
                message:h('div',{domProps:{id:"hdom"}},[
                    h('p',null,'你可以访问: '),
                    h('div',{style:'text-align:center;margin-top:12px;'},[
                        h('el-tooltip',{attrs:{effect:"dark",content:"万恶之源,来自历史的轨迹 !",placement:"top"}},[
                        h('a',{style:'color:teal',domProps:{href:"http://www.baidu.com"}},'查看账单'),
                        ]),
                        h('el-tooltip',{attrs:{effect:"dark",content:"战争的迷雾即为自由 !",placement:"top"}},[
                            h('a',{style:'color:teal',domProps:{href:"http://www.baidu.com"}},'添加新的账单项目'),
                        ]),
                        h('el-tooltip',{attrs:{effect:"dark",content:"人生得一知己足矣，斯世当以同怀视之!",placement:"top"}},[
                            h('a',{style:'color:teal',domProps:{href:"http://www.baidu.com"}},'写文章或吐槽'),
                        ]),
                        h('el-tooltip',{attrs:{effect:"dark",content:"data is everything !",placement:"top"}},[
                            h('a',{style:'color:teal',domProps:{href:"/table"}},'数据中心'),
                        ]),
                    ]),
                    
                ]),
            });
        }
    }
}
</script>

<style lang="stylus">
#hdom
    margin-top 24px
#hdom a
    // text-decoration none
    display inline-block
    margin 0 4px

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
    left 42%;
    top 35%;
    opacity 0.1
body
    // height 100%
    // width 100%
    // background-color:red
    // background url('../assets/img/th.jpg') no-repeat
    background-position center
    background-size 20%
    background-attachment fixed
.el-message-box
    vertical-align top
    margin-top 46px
</style>
