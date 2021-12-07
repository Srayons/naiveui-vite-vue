import axios from "../request"
import qs from 'qs'

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





