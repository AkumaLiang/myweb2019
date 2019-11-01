<template>
<div id="input-bill">
<!--
录入即为负担,所以背景色和氛围为签字画押的形式
-->

<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="添加项目" name="first">
        
        <el-form :model="vform" label-position="right" label-width="80px" class="vform">
            
            <el-form-item label="名字">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="期数">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="起始时间">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="起始时间">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="总金额">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="公式">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="备注">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="选择结算周期">
                
            </el-form-item>
        </el-form>

    </el-tab-pane>
    
    <el-tab-pane label="添加条目" name="second">
        <div class="vform">
            <div class="vform-item">
                <span>名称</span>
                <input type="text">
            </div>
            
            <div class="vform-item">
                <span>期数</span>
                <input type="text">
            </div>
            
            <div class="vform-item">
                <span>起始时间</span>
                <input type="text">
            </div>

            <div class="vform-item">
                <span>结算周期</span>
                <input type="text">
            </div>

            <div class="vform-item">
                <span>总金额</span>
                <input type="text">
            </div>

            <div class="vform-item">
                <span>公式</span>
                <input type="text">
            </div>

            <div class="vform-item">
                <span>备注</span>
                <input type="text">
            </div>




        </div>
    </el-tab-pane>
  </el-tabs>





</div>
</template>

<script>
export default {
    data(){return{
        activeName:"",
        vform:{
            pid:"",
            name:"",
            stage:"",
            startdate:"",
            money:"",
        },
        vProjList:[
            {id:1,name:'京东白条',note:''},
            {id:2,name:'蚂蚁花呗',note:''},
            {id:3,name:'蚂蚁借呗',note:''},
            {id:4,name:'十月租房',note:''},
        ]
    }},
    methods:{
        submitFrom(){
            window.alert("Hello!");
        },
        handleClick(){
            window.console.log('--');
        }
    }
}
</script>


<style lang="stylus">
body
    background-color rgba(200,200,200,.1)
.vform
    width 42%
    margin 0 auto
    margin-top 58px
    
    box-sizing border-box
    padding 1rem 2rem
    background-color #fff

.vform-item
    width 100%
    margin 18px 0
.vform-item span
    display inline-block
    color gray
    // font-weight
    // font-family "lilin-gt"
    font-family "楷体","rmddk"
    vertical-align bottom
    margin-right 12px
    text-align-last justify;
    text-align justify;
    text-justify distribute-all-lines; // 这行必加，兼容ie浏览器
    width 82px
.vform-item input
    border none;outline none;
    border-bottom solid lightgray 1px;
    display inline-block
    width 420px
    font-size 14px
    padding 6px 0
    padding-left 6px
    // color:#ceb5b5
    // text-align:center
    // font-family "rmddk"
    font-family "楷体","rmddk"
    // font-style italic
    
    
/*
.el-input__inner{
    border-radius:0;
    outline none;
    border:none;
    border-bottom:solid 1px grey;
    background:none;
}
.el-input__inner{
    border-bottom:solid 1px grey;
}
*/
    
.right
    text-align right
</style>