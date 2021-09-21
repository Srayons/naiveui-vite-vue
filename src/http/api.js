import axios from "../http/request"
import qs from 'qs'
//请求示例
//get
export const mokeGet = (data) => {
    return axios({
        url: "/api/xxxx",
        method: "get",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
//post
export const mokePost = (data) => {
    return axios({
        url: "/api/xxxx",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}

/**
 * 根据歌单id获取全部音乐
 * @param {*} data id
 * @returns 全部音乐
 */
export const getSongsById = (data) => {
    return axios({
        url: "/sync/getSongsById",
        method: "get",
        data,
        config: {
            headers: {
            },
            timeout: 10000
        }
    })
}


export const getMusicById = (data) => {
    return axios({
        url: "/sync/getSongsById",
        method: "post",
        data,
        config: {
            headers: {
            },
            timeout: 10000
        }
    })
}

/**
 * 根据歌曲id获取加密参数
 * @param {*} id 
 * @returns 
 */
export const getParamsAndKey = (id) => {
    var i3x = {
        csrf_token: "",
        encodeType: "aac",
        ids: "[" + id + "]",
        level: "standard"
    }
    let pa = window.asrsea(JSON.stringify(i3x), bva9R(["流泪", "强"]), bva9R(Tu1x.md), bva9R(["爱心", "女孩", "惊恐", "大笑"]));
    // console.log(pa)
    return {
        'params': pa.encText,
        'encSecKey': pa.encSecKey
    }
}


//https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=
//post
export const PostByPlayerUrl = (data) => {
    return axios({
        url: "/sync/getParamsAndKey",
        method: "post",
        data:qs.stringify(data),
        config: {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            timeout: 10000
        }
    })
}




