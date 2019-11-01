import Bill from '@/components/Bill.vue'
import Home from '@/components/Home.vue'
import InputBill from '@/components/InputBill.vue'
import Editor from '@/components/Editor.vue'
import Table from '@/components/Table.vue'
export const routes = [
    // 主页
    {path:'/',component: InputBill},
    {path:'/home',component: Home},
    // 账单
    {path:'/bill',component: Bill},
    // 添加账单
    {path:'/input-bill',component:InputBill},
    // 编辑器载入
    {path:'/editor',component: Editor},
    // 数据中心-账单数据
    {path:'/table',component:Table},
]