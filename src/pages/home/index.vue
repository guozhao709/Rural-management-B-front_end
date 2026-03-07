<template>
  <div class="common-layout">
    <el-container class="common-layout-bigContainer">
      <el-header>Header</el-header>
      <el-container class="common-layout-container">
        <el-aside class="common-layout-aside" width="200px">
          <Aside :asideMenu="asideMenu" />
        </el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside.vue";
import { ref, onMounted } from "vue";
import { menuList } from "@/config/asideMenu.js";
import { useRouter } from "vue-router";

const router = useRouter();

// 需要显示的侧栏
const asideMenu = ref([]);

// 在挂载时需要做的事
onMounted(() => {
    const token = localStorage.getItem("token");
    if(!token){
      router.push("/login");
      return;
    }
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  if (adminInfo) {
    const { role } = adminInfo;
    const filterMenu = menuList.filter((item) => item.roles.includes(role));
    filterMenu.forEach((item) => {
      asideMenu.value.push(item);
    });
  }
});
</script>

<style scoped lang="scss">
.common-layout {
  height: 100%;
  .common-layout-bigContainer {
    height: 100%;
    .common-layout-container {
      height: 100%;
      .common-layout-aside {
        height: 100%;
        .el-menu-vertical {
          height: 100%;
        }
      }
    }
  }
}
</style>
