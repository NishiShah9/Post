import {
  addPostApi,
  deletePostApi,
  getPostsApi,
  updatePostApi,
} from "../../Utils/Api";
import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "../../Utils/Constant";

export const getPost = () => async (dispatch: any) => {
  try {
    dispatch({ type: ALL_POST_REQUEST });
    const { data } = await getPostsApi();
    dispatch({ type: ALL_POST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: ALL_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const deletePost = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await deletePostApi(id);
    dispatch({ type: DELETE_POST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const addPost = (req: any) => async (dispatch: any) => {
  try {
    dispatch({ type: ADD_POST_REQUEST });
    const { data } = await addPostApi(req);
    dispatch({ type: ADD_POST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const updatePost = (id: string, req: any) => async (dispatch: any) => {
  try {
    dispatch({ type: UPDATE_POST_REQUEST });
    const { data } = await updatePostApi(id, req);
    if (data) {
      dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
    }
  } catch (error: any) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload: error?.response?.data,
    });
  }
};
