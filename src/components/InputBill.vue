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
        <div :style="paneClass" class="pane-content">

        <ol v-if="idx!=-1" class="topmsg">
            
            <li>名称:{{vProjList[idx].name}}</li>
            <li>简略文档: 白条计算公式为xxxxxxxx</li>
            <li>链接到官方,加载官方数据,死链接反馈</li>
        </ol>

        <ul v-else class="topmsg">
          <li>繁华往事，已跟香尘一样飘荡无存；流水无情，野草却年年以碧绿迎春。</li>  
        </ul>

        <el-form :model="vform" label-position="right" label-width="100px"  class="vform">
            
            <el-row>
                <el-col :md="8">
                <el-form-item label="所属项目： " :xs="24" :sm="24">
                    <el-select v-model="vform.pid" placeholder="选择项目" class="vform-item" >
                        <el-option v-for="(item,k) in vProjList" :key="k" :label="item.name" @click.native="handleProSelect(k)" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>

                <el-col :md="8" :xs="24" :sm="24">
                <el-form-item label="名字： ">
                    <el-input v-model="vform.name"></el-input>
                </el-form-item>
                </el-col>

                <el-col :md="8" :xs="24" :sm="24">
                    <el-form-item label="期数： ">
                        <el-input-number class="vform-item" v-model="vform.stage" controls-position="right" :min="1" :max="24"></el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>

            
            <el-row>
            <el-col :md="8" :xs="24" :sm="24">
                <el-form-item label="起始时间： ">
                    <el-date-picker class="vform-item" v-model="vform.startdate" type="date" placeholder="日期"></el-date-picker>
                </el-form-item>
            </el-col>
            
            <el-col :md="8" :xs="24" :sm="24">
                <el-form-item label="结算周期： " >
                    <el-input class="vform-item text-center" suffix-icon="lj-icon-text" v-model="vform.day" controls-position="right" :min="1" :max="24" placeholder="多少号">
                        <el-select v-model="vform.mode" style="width: 92px;background:#fff;" slot="prepend" placeholder="周期">
                            <el-option label="每月" value="1"></el-option>
                            <el-option label="每季" value="2"></el-option>
                            <el-option label="每半年" value="3"></el-option>
                            <el-option label="每年" value="4"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
            </el-col>
            
            <el-col :md="8" :xs="24" :sm="24">
                <el-form-item label="计算周期： ">
                    <el-input disabled></el-input>
                </el-form-item>
            </el-col>

            </el-row>

            <el-form-item>
                1. 利率;
                2. 违约率;
            </el-form-item>
            
            <el-form-item label="总金额： ">
                <el-input v-model.number="vform.money"></el-input>
            </el-form-item>


            <el-form-item label="备注： ">
                <el-input v-model="vform.note"></el-input>
            </el-form-item>

            <el-form-item>
                显示.对比生成的数据结果.如果是isTrue,则直接更新数据,否则,打开面板后更新数据;
            </el-form-item>

            <el-form-item class="right">
                <el-button type="warning" plain>重置数据</el-button>
                <el-button type="warning" >确认提交</el-button>
            </el-form-item>
        </el-form>
        </div>
        
    </el-tab-pane>
  </el-tabs>





</div>
</template>

<script>
export default {
    data(){return{
        activeName:"",
        iWidth:0,
        width:60,
        idx:-1,
        vform:{
            pid:"",             //项目名
            name:"",            //条目名
            stage:"",           //总期数
            mode:"",            //模式[月/季/年]
            day:"",             //结算日
            startdate:"",       //开始日期
            money:"",           //总金额
            note:"",            //备注
        },
        vProjList:[
            {id:1,name:'京东白条',note:'',info:"this is html doc",doc:"http://jrhelp.jd.com/show/getProblemInfo-1598"},
            {id:2,name:'蚂蚁花呗',note:'',info:"this is html doc",doc:"#"},
            {id:3,name:'蚂蚁借呗',note:'',info:"this is html doc",doc:"#"},
            {id:4,name:'十月租房',note:'',info:"this is html doc",doc:"#"},
        ]
    }},
    methods:{
        submitFrom(){
            window.alert("Hello!");
        },
        handleClick(){
            // window.console.log('--');
        },
        onresize(){
            //1008
            //最大和最小值;

            //视窗默认60%-100%(如果视窗小于1685>1008,则宽度在60%~100%的区间内计算)=40%
            //视窗宽度(最大60%)1685-(最小100%)1008=677;
            //差值  0:60%,   677:100%;

            //[1685~ 1008] 677
            //[60 ~ 100] 40
            //677-40=5.90%(上取整));
            //       =6%(下取整);

            this.iWidth = window.innerWidth;
            if(this.iWidth<1685 && this.iWidth>1008){
                // let difference =  this.iWidth-1008;
                let difference =  1685-this.iWidth;
                this.width = ~~(difference*0.06) +60;
                // window.console.log('difference: ',this.width,this.iWidth);
            }else{
                // window.console.log('-- : ',this.iWidth);
            }
        },
        setData(){
            this.vform.name="Nokia7分期";
            this.vform.stage=12;
            this.vform.money=2300;
            this.vform.note="谨慎消费,合理消费。";

        },
        handleProSelect(idx2){
            this.idx = idx2;
            // window.console.log('idx:',idx);
        }
    },
    
    computed:{
        paneClass:function(){
            return {
                width:this.width+"%"
            }
        }
    },
    mounted(){
        window.onresize=this.onresize;
        this.onresize();
    },
    created(){
        this.setData();
    }

}
</script>

sty

<style lang="stylus">
.lj-icon-text:before { content: "号 "; }
.pane-content
    margin 0 auto
    box-sizing border-box
.vform
    margin-top 58px
    background-color rgba(200,200,200,1)
    padding 1rem 2rem

.text-center input
    text-align center
.text-center .el-input__inner:hover
    border:solid 1px #dcdfe6
// .text-center .el-input__inner:focus

.right
    text-align right
.topmsg
    min-height 64px
ul li
    color red
</style>