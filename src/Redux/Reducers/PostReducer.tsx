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

export const PostsReducer = (state = { posts: [] }, action: any) => {
  switch (action.type) {
    case ALL_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case ALL_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        postsCount: action.payload.length,
      };
    case ALL_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_POST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DELETE_POST_SUCCESS:
      let postsPrev: any = state.posts;
      let removePost = postsPrev.filter(
        (item: any) => item.id !== action?.payload?.id
      );
      return {
        loading: false,
        posts: removePost,
        postsCount: removePost.length,
      };
    case DELETE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_POST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_POST_SUCCESS:
      let prevPosts: any = state.posts;
      let newPost = { ...action.payload };
      prevPosts.push(newPost);
      return {
        loading: false,
        posts: prevPosts,
        postsCount: prevPosts.length,
      };
    case ADD_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_POST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case UPDATE_POST_SUCCESS:
      let prevPost: any = state.posts;

      prevPost.map((item: any) => {
        if (item?.id === action.payload?.id) {
          item = action.payload;
        }
        return true;
      });
      return {
        loading: false,
        posts: prevPosts,
      };
    case UPDATE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
