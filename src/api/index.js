import request from "@/utils/request";

// 登录
export const login = (data) => {
  return request.post("/admin/auth/login", data);
};
// 注册
export const register = (data) => {
  return request.post("/admin/auth/register", data);
};
// 获取管理员数据
export const getAdminList = () => {
  return request.get("/admin/administrator/list");
};
// 删除管理员
export const deleteAdmin = (data) => {
  return request.post("/admin/administrator/delAdmin", data);
};
