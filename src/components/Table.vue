<template>
<!--
当前页面是数据优先,相对应的bill.vue是视图优先
当前页面是也是数据的统计
-->
<div id="table">
    <el-table :data="vlist">
        <el-table-column prop="id" width="40" label="#"></el-table-column>
        <el-table-column type="expand" width="80">
            <template slot-scope="props">
                <el-table :data="props.row.item">
                    <el-table-column prop="name" label="条目"></el-table-column>
                    <el-table-column prop="stagecurrent" label="当前期数"></el-table-column>
                    <!-- 格式化为 第3/24期 -->
                    <el-table-column prop="moneycurrent" label="当前金额"></el-table-column>
                    <el-table-column prop="stage_surplus" label="剩余期数"></el-table-column>
                    <el-table-column prop="money_surplus" label="剩余金额"></el-table-column>
                    <el-table-column label="详细">
                        <el-button>查看</el-button>
                        <!-- 历史数据,更改为组件形式 -->
                        <el-button v-popover:hist>历史数据</el-button>
                        <el-popover ref="hist" placement="left" trigger="click" width="600">
                            <el-table :data="stage_history">
                                <el-table-column property="id" label="#" width="40"></el-table-column>
                                <el-table-column property="code" label="编号"></el-table-column>
                                <el-table-column property="stage" label="期数"></el-table-column>
                                <el-table-column property="money" label="金额"></el-table-column>
                                <el-table-column property="note" label="备注"></el-table-column>
                            </el-table>
                        </el-popover>
                    </el-table-column>
                    
                    <!-- 
                        开始时间;
                        总期数,
                     -->
                </el-table>
            </template>
        </el-table-column>
        <el-table-column prop="starttime_std" label="起始时间" ></el-table-column>
        <el-table-column prop="name" label="项目"></el-table-column>
        <!-- <el-table-column prop="stagecurrent" label="当前期数" :formatter="dtGetStagetCurrent"></el-table-column> -->
        <el-table-column prop="moneyStage" label="当期待还"></el-table-column>
        <el-table-column prop="moneySurplus" label="剩余待还"></el-table-column>
        <el-table-column prop="money" label="总金额"></el-table-column>
        
    </el-table>
</div>
</template>

<script>
export default {
    data(){return{
        datecurrent:0,        //当前日期-计算
        // 后期启用缓存查询,提供缓存清理;
        stage_history:[
            {id:1,code:"1553961600",stage:"2/24期",money:"￥139.17",note:"--备--注--空--"},
            {id:2,code:"1553961600",stage:"2/24期",money:"￥139.17",note:"--备--注--空--"},
            {id:3,code:"1553961600",stage:"2/24期",money:"￥139.17",note:"--备--注--空--"},
            {id:4,code:"1553961600",stage:"2/24期",money:"￥139.17",note:"--备--注--空--"},
        ],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        vlist:[
            //英文字母的两个单词结束和开始相同,不再进行省略;
            /*
            示例,京东金融:白条
            白条:包含各个商品的消费条目的统计,并非单一的白条条目;
            */
            {
                //表1:项目表;
                id:1,
                name:"京东白条",
                money:5600,             //金额统计 当前所有;
                starttime:'1553961600',         //开始时间;
                starttime_std:'2019年 3月31号',  //标准时间;这个时间记录后,一般很少发生变动;
                credit:'10000',          //信用额度;
                money_surplus:2300,      //待还金额(剩余);所有
                money_stage:1600,        //当前阶段的,所有金额统计
                note:'没有任何备注',      //对此数据备注;
                //阶段数据,包括周期的数据入库,和重置操作;
                //表2:条目表
                item:[              //包含的条目项
                    {
                        id:1,
                        name:"Nokia7",          //条目
                        startdate:'1572486877', //开始日期
                        money:312.33,           //总金额
                        stage:12,               //总期数
                        enddate:'',             //结束日期(每次期数更新的时候,更新结束日期)
                        //对于,已经有记录的,一般禁止对数据结构进行更新;
                        stagecurrent:'第5/24期',        //当前期数-计算
                        moneycurrent:139.61,    //当期金额-计算
                        status:false,           //状态
                        note:"处理包含2期的数据,2期数据不再处理",
                        stage_surplus:6,       //剩余阶段;
                        money_surplus:360.66,   //剩余金额
                    }
                    
                ]
                
            },

            /*花呗,借呗 */
            //花呗
            {
                //表1:项目表;
                id:2,
                name:"花呗",
                money:5600,         //金额统计;
                starttime:'1553961600',         //开始时间;
                starttime_std:'2019年 3月31号',  //标准时间;这个时间记录后,一般很少发生变动;
                credit:'3000',          //信用额度;
                moneycurrent:2300,  //待还金额;
                note:'',            //对此数据备注;
                //阶段数据,包括周期的数据入库,和重置操作;
                //表2:条目表
                //花呗,数据量太大,作为日常消费;
                //只有存在分期的情况下,才进行遍历item[]
                //isstage
                item:[]
                
            },
            //借呗,默认存在分期效应;
            {
                //表1:项目表;
                id:3,
                name:"借呗",
                money:5600,         //金额统计;
                starttime:'1553961600',       //开始时间;
                starttime_std:'2019年 3月31号',  //标准时间;这个时间记录后,一般很少发生变动;
                credit:'6000',          //信用额度;
                moneycurrent:2300,  //待还金额;
                note:'',            //对此数据备注;
                //阶段数据,包括周期的数据入库,和重置操作;
                //表2:条目表
                //花呗,数据量太大,作为日常消费;
                //只有存在分期的情况下,才进行遍历item[]
                //isstage
                item:[
                    {
                        id:1,
                        name:"19年2期",        //条目
                        money:4300,         //总金额
                        startdate:'1572486877',//开始日期
                        stage:6,              //总期数
                        enddate:'',             //结束日期(每次期数更新的时候,更新结束日期)
                        //对于,已经有记录的,一般禁止对数据结构进行更新;
                        stagecurrent:24,        //当前期数-计算
                        moneycurrent:139.61,    //当期金额-计算
                        status:false,          //状态
                        note:"处理包含2期的数据,2期数据不再处理",
                    }
                ]
                
            }
        ],
    }},
    methods:{
        //时间日期格式化
        //开始日期 //StartTime
        dtFormatter(row){
            let t = parseInt(row.starttime)*1000
            let d = new Date(t);
            //计算出当期数;
            return d.getFullYear()+'年 '+(d.getMonth()+1)+'月'+d.getDate()+'号';
        },
        //根据周期计算当前期数
        dtGetStagetCurrent(row){
            let startTime = parseInt(row.starttime);
            if(startTime<this.datecurrent){
                let tmp = this.datecurrent-startTime;
                let h = parseInt(tmp/(3600)/24);
                window.console.log('当前时间:',h,'天');

                /*
                秒= 1000ms

                分= 60s
                时= 60m
                1000*3600(60*60)=days;

                天= 24h
                4,5,6,7,8,9,10

                */
                // window.console.log(tmp,h +"小时 , ",h/24 +" day;");
                return tmp;
            }else{
                return '期数尚未开始';
            }
            // window.console.log(startTime);
        }
    },
    created(){
        this.datecurrent= parseInt((new Date()).getTime()/1000);
        window.console.log(this.datecurrent);
    }
}
</script>

<style lang="stylus" scoped>

</style>