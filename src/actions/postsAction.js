
//action creater 
//return -> action 

import axios from "axios";
import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";
// import { type } from "@testing-library/user-event/dist/type";

//type ekak tynw
export const fetchPosts = () => {

    return {
        // type:'FETCH_BUTTON_CLICKED' , //action ekt description 
        type: FETCH_BUTTON_CLICKED,
        payload: [
            {
                id: 1,
                title: 'post 1',
                body: 'post 1 body'

            },
            {
                id: 2,
                title: 'post 2',
                body: 'post 2 body'

            },
            {
                id: 3,
                title: 'post 3',
                body: 'post 3 body'

            }
        ]

    }

};


export const fetchApiPosts = () => {

    return async (dispatch) => {

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
            dispatch({
                type: FETCH_BUTTON_CLICKED,
                payload: response.data
            })
        }
        catch (error) {
            console.log(error);
        }


    }

};


export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        payload: post
    }
};