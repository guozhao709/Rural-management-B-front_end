<template>
  <!-- 表格 -->
  <el-table :data="tableData" style="width: 100%; margin-bottom: 15px;">
    <el-table-column prop="id" label="ID" width="100" />
    <el-table-column prop="phone" label="手机号" width="180" />
    <el-table-column prop="password" label="密码" width="140" />
    <el-table-column prop="name" label="姓名" width="140" />
    <el-table-column label="性别" width="120">
      <template #default="scope">
        {{ formatGender(scope.row.gender) }}
      </template>
    </el-table-column>
    <el-table-column prop="birthday" label="出生日期" width="160" />
    <el-table-column prop="address" label="地址" width="180" />
    <el-table-column prop="create_time" label="创建时间" min-width="200" />
  </el-table>

  <!-- 👇 新增：Element Plus 分页组件 -->
  <el-pagination v-model:current-page="page" v-model:page-size="pageSize" :total="total" @size-change="getTableList"
    @current-change="getTableList" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 15, 20, 50, 100]"
    style="text-align: right;" />
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getVillagersList } from "@/api/index.js"

// 👇 新增：分页核心参数
const page = ref(1) // 当前页码
const pageSize = ref(15) // 每页条数
const total = ref(0) // 总数据量
const tableData = ref([]) // 表格数据

// 格式化性别
const formatGender = (gender) => {
  return gender === 1 ? "男" : "女"
}

// 👇 新增：封装获取分页列表函数
const getTableList = async () => {
  try {
    // 传递分页参数给后端
    const res = await getVillagersList({
      page: page.value,
      pageSize: pageSize.value
    })
    // 关键：赋值表格数据 + 总条数
    tableData.value = res.data.list
    total.value = res.data.total
    console.log("分页数据：", res.data)
  } catch (error) {
    console.error("获取村民列表失败:", error)
  }
}

// 页面加载时请求第一页数据
onMounted(() => {
  getTableList()
})
</script>