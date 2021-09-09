import axios from './api'
let api = {}
// 登陆
api.login = function (data) {
    return axios({
        url: '/login',
        method: 'POST',
        data: data
    })
}
export default api
