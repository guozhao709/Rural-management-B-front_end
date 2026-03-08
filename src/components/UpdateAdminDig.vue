<template>
  <el-dialog
    v-model="dialogVisible"
    title="更新确认"
    width="500"
    center
    @close="handleClose"
  >
    <span> 确定要更新吗? </span>
    <el-form
      :model="adminInfo"
      :rules="rules"
      ref="formRef"
      label-width="120px"
    >
      <el-form-item label="Adminname" prop="adminname">
        <el-input v-model="adminInfo.adminname" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="adminInfo.password" type="password" />
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="adminInfo.phone" />
      </el-form-item>
      <el-form-item label="Role" prop="role">
        <el-input v-model="adminInfo.role" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed } from "vue";
const rules = {};
const props = defineProps(["adminInfo", "visible"]);
const emit = defineEmits(["confirm", "update:visible"]);

const adminInfo = computed({
  get() {
    return props.adminInfo;
  },
  set(value) {
    props.adminInfo = value;
  },
});

const dialogVisible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit("update:visible", value);
  },
});

const handleClose = () => {
  emit("update:visible", false);
};

const handleConfirm = () => {
  emit("confirm", adminInfo.value);
  emit("update:visible", false);
};
</script>

<style scoped lang="scss">
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
