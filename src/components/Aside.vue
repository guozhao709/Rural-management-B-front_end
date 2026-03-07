<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    default-active="/dashboard"
    text-color="#fff"
  >
    <el-menu-item
      v-for="item in props.asideMenu"
      :key="item.path"
      :index="item.path"
      @click="direct(item.path)"
    >
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["asideMenu"]);
const router = useRouter();

const direct = (path) => {
  router.push(path);
};
</script>

<style scoped lang="scss"></style>
