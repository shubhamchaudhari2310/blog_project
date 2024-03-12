import {
  BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_FAIL,
  SINGLE_BLOG_REQUEST,
  SINGLE_BLOG_SUCCESS,
  SINGLE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
} from "../constants/blog-constants";

export const getAllBlogReducer = (
  state = { reduxBlog: [] },
  { type, payload }
) => {
  switch (type) {
    case BLOG_REQUEST:
      return { reduxBlog: [], isLoading: true };
    case BLOG_SUCCESS:
      return { reduxBlog: payload, isLoading: false };
    case BLOG_FAIL:
      return { reduxBlog: payload, isLoading: false };

    default:
      return state;
  }
};

export const getSingleBlogReducer = (
  state = { reduxSingleBlog: {} },
  { type, payload }
) => {
  console.log("getSingleBlogReducer state ", state);
  switch (type) {
    case SINGLE_BLOG_REQUEST:
      return { reduxSingleBlog: {}, isLoading: true };
    case SINGLE_BLOG_SUCCESS:
      return { reduxSingleBlog: payload, isLoading: false };
    case SINGLE_BLOG_FAIL:
      return { reduxSingleBlog: payload, isLoading: false };

    default:
      return state;
  }
};

export const deleteBlogReducer = (
  state = { reduxDeletedBlog: {} },
  { type, payload }
) => {
  switch (type) {
    case DELETE_BLOG_REQUEST:
      return { reduxDeletedBlog: {}, isLoading: true };

    case DELETE_BLOG_SUCCESS:
      return { reduxDeletedBlog: {}, isLoading: false };

    case DELETE_BLOG_FAIL:
      return { reduxDeletedBlogError: payload, isLoading: false };

    default:
      return state;
  }
};

export const updateBlogReducer = (
  state = { reduxUpdatedBlog: {} },
  { type, payload }
) => {
  switch (type) {
    case UPDATE_BLOG_REQUEST:
      return { reduxUpdatedBlog: {}, isLoading: true };

    case UPDATE_BLOG_SUCCESS:
      return { reduxUpdatedBlog: {}, isLoading: false };

    case UPDATE_BLOG_FAIL:
      return { reduxUpdatedBlogError: payload, isLoading: false };

    default:
      return state;
  }
};
