import axios from "axios"
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

} from "../constants/blog-constants"

export const getAllBlogAction = () => async (dispatch) => {
    try {
        dispatch({ type: BLOG_REQUEST })
        const { data } = await axios.get("http://localhost:5000/api/v1/blogs");
        // console.log(data.data);
        dispatch({ type: BLOG_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({
            type: BLOG_FAIL, payload: error
        })

    }
}

export const getSingleBlogAction = (match) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_BLOG_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/blogs/${match.params.id}`);
        console.log(data.data);
        dispatch({ type: SINGLE_BLOG_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({
            type: SINGLE_BLOG_FAIL, payload: error
        })

    }
}

export const deleteBlogAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BLOG_REQUEST })
        const { data } = await axios.delete(`http://localhost:5000/api/v1/blogs/${id}`);
        console.log(data.data);
        dispatch({ type: DELETE_BLOG_SUCCESS })
    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL, payload: error
        })

    }
}

export const updateBlogAction = (id, data) => async (dispatch) => {
    try {
        console.log(data);
        dispatch({ type: UPDATE_BLOG_REQUEST })
        await axios.put(`http://localhost:5000/api/v1/blogs/${id}`, data);
        dispatch({ type: UPDATE_BLOG_SUCCESS })
    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAIL, payload: error
        });

    }
}