import axios from "axios";

const instance = axios.create({
    baseURL: "https://dating-app-clone-backend.herokuapp.com/"
})

export default instance