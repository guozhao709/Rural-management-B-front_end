import request from "@/utils/request";

// 登录
export const login = (data) => {
  return request.post("/admin/auth/login", data);
};
// 注册
export const register = (data) => {
  return request.post("/admin/auth/register", data);
};
// 获取管理员列表
export const getAdminList = () => {
  return request.get("/admin/administrator/list");
};
// 删除管理员
export const deleteAdmin = (data) => {
  return request.post("/admin/administrator/delAdmin", data);
};
// 更新管理员
export const updateAdmin = (data) => {
  return request.post("/admin/administrator/updateAdmin", data);
};
// 获取村民列表
export const getVillagersList = (params) => {
  return request.get("/admin/villagers/list", { params });
};
// 删除某个村民
export const deleteVillager = (id) => {
  return request.delete(`/admin/villagers/delete/${id}`);
}
