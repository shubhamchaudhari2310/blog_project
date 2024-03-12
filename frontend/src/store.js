import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { deleteBlogReducer, getAllBlogReducer, getSingleBlogReducer, updateBlogReducer } from "./reducers/blog-reducer";
const rootReducer = combineReducers({
    blog: getAllBlogReducer,
    blogDetail: getSingleBlogReducer,
    deletedBlog: deleteBlogReducer,
    updateBlog: updateBlogReducer
});


const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;