<template>
  <div class="hello">
<!-- <div class="myhello">
  <h1 class="msg">{{ msg }}</h1>
    <h1 class="h1">2019年3月</h1>
    <h1 class="h2">5号</h1>
    <hr>
</div> -->
<div class="container">
  
  <el-row class="cd">
    count data: 当前,累计金额 ￥ 2330.16 ，已还金额 ￥463.55，原金额 ￥5633.19 。 by Auguest 07, 2019 - -
  </el-row>

  <el-row class="lym">
      
      <h1 class="h1">2019年3月</h1>
      
        <el-card class="vbox">
        <el-row class="">
          <el-col :span="4"><h1 class="h2">5号</h1></el-col>
          <el-col :span="20" class="litems">
            <ul v-for="(v,k) in vlist" :key="k">
              <li class="item item-name">{{v.name}}</li>
              <li class="item item-money">￥ {{v.money}}</li>
              <li class="item item-status" :style="{color:v.status?'#46B09B':'#E92727'}">
                <i v-if="!v.status" class="el-icon-warning mid"></i>
                <i v-else class="el-icon-refresh mid"></i>
                {{v.status?'已处理':'未处理'}}</li>
              <li class="item-note">备注: <span>{{v.note}}</span></li>
            </ul>

            <!-- <el-table :data="vlist" :show-header="false">
              <el-table-column prop="name" label="条目"></el-table-column>
              <el-table-column prop="money" label="金额"></el-table-column>
              <el-table-column prop="status" label="状态"></el-table-column>
              <el-table-column prop="note" label="备注"></el-table-column>
            </el-table> -->

          </el-col>
        </el-row>
        </el-card>
        

  </el-row>
</div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){return{
    // 其实是以月度来计算的,周期(月)
    // 周期,月末20号,到第二个月20号截止; 结算周期;
    vlist:[
      {
        id:1,
        code:3,
        name:"京东白条",
        money:312.33,
        status:false,
        note:"处理包含2期的数据,2期数据不再处理"
      },
      {
        id:2,
        code:5,
        name:"蚂蚁花呗",
        money:312.33,
        status:true,
        note:"处理包含2期的数据,2期数据不再处理"
      },
      {
        id:3,
        code:14,
        name:"蚂蚁借呗",
        money:312.33,
        status:true,
        note:"处理包含2期的数据,2期数据不再处理"
      },
    ]
  }},
  props: {
    msg: String
  }
}
</script>

<style lang="stylus" scoped>

.el-col
  padding:0

.myhello
  // width:76%
  // box-sizing:border-box
  // margin:0 auto
.lym
  padding: 34px 32px
.lym-header
  // font-size:18px
ul
  padding 0
  margin-bottom: 6px;
  // margin-top:33px
  // color:#000
  // font-family: "arial rounded mt bold 微软雅黑"
li
  display:inline-block
.item
  margin-right:87px
.item-note > span
  // color:red
.container
  width:80%
  margin: 0 auto
  min-height: 640px
  background-color:#fff
  // outline:solid 1px grey
  box-sizing:border-box
  //background:#7F7C8F
  background:rgba(0,0,0,0)
.mid
  vertical-align: middle
.h1
  font-family: "lilin-gt"
  margin:0
.litems
  // font-size 18px
.item-status
  font-weight:300
.h2
  // font-weight:bold
  margin:0
.vbox
  margin-top:32px
.cd
  margin-left 32px
</style>
