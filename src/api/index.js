import axios from './api'
let api = {}
// GET
api.GET = function (url,data,header) {
    return axios({
        url: url,
        method: 'GET',
        data: data,
        header:header
    })
}
export default api
