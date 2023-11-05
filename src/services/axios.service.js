import axios from "axios";
import myBaseUrl from "../config/urls";

export const axiosService = axios.create({
    baseURL : myBaseUrl
})