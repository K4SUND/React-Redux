import { combineReducers } from "redux";
import reducerAllPosts from "./reducer.AllPosts";
import reducerSelectPost from "./reducer.selectPost";


const rootReducer = combineReducers(
    {
        allposts: reducerAllPosts,
        selectedPost: reducerSelectPost

    }
);



export default rootReducer;