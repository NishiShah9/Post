import AxiosConfigs from "./AxiosConfig";

export const getPostsApi = async () => {
  let result = await AxiosConfigs.get("/posts");
  return result;
};

export const addPostApi = async (payload: any) => {
  let result = await AxiosConfigs.post("/posts", payload);
  return result;
};

export const updatePostApi = async (id: string, payload: any) => {
  let result = await AxiosConfigs.patch(`/posts/${id}`, payload);
  return result;
};

export const deletePostApi = async (id: string) => {
  let result = await AxiosConfigs.delete(`/posts/${id}`);
  return result;
};

export const getUsers = async () => {
  let result = await AxiosConfigs.get("/users");
  return result;
};
