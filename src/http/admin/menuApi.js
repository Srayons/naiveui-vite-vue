import axios from "../request"
import qs from 'qs'

const prefixUrl = "/admin/menu";

//请求示例
//get
export const axiosGet = (url, data) => {
    return axios({
        url: prefixUrl + url,
        method: "get",
        data,
        config: {
            headers: {

            },
            timeout: 10000
        }
    })
}
//post
export const axiosPost = (url, data) => {
    return axios({
        url: url,
        method: "post",
        data,
        config: {
            headers: {

            },
            timeout: 10000
        }
    })
}


export const axiosReq = (url, method, data) => {
    return axios({
        url: url,
        method: method,
        data,
        config: {
            headers: {

            },
            timeout: 10000
        }
    })
}





