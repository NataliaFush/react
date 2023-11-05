import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postService = {

    getByUserId:(id)=> axiosService.get(`https://jsonplaceholder.typicode.com${urls.posts}?userId=${id}`)
        .then(value => value.data)
    // getByUserId:(id)=>fetch(`https://jsonplaceholder.typicode.com${urls.posts}?userId=${id}`)
    //     .then(value => value.json())

}