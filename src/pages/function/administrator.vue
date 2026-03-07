<template>
  <el-table :data="tableData" style="width: 100%; height: 100%">
    <el-table-column prop="adminID" label="Admin ID" width="150" />
    <el-table-column prop="adminname" label="Admin Name" width="200" />
    <el-table-column prop="password" label="Password" width="200" />
    <el-table-column prop="phone" label="Phone" width="200" />
    <el-table-column prop="role" label="Role" width="200" />

    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button link size="large">Edit</el-button>
        <el-button link size="large" @click="handleDelete(scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { getAdminList } from "@/api";
import { ref, onMounted } from "vue";
import { deleteAdmin } from "@/api";

const tableData = ref([]);

onMounted(async () => {
  const { data } = await getAdminList();
  tableData.value = data;
});

const handleDelete = async (adminInfo) => {
  const { adminID } = adminInfo;
  const { data } = await deleteAdmin({ adminID });
  if (data.code === 200) {
    const { data } = await getAdminList();
    tableData.value = data;
  }

  console.log(adminID);
};
</script>
