import axios from 'axios';

let http = axios.create({
    // baseURL: 'http://mock.eolinker.com/CtL6GkGc7aeee69424a667b935ac3c1044573a33a4a44f2?uri=',
    baseURL: 'http://www.yowind.cn/index.php',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function (data) {
        let newData = '';
        for (let k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
            }
        }
        return newData;
    }]
});

function apiAxios(method, url, params, response, error) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        if (res.data && res.data.status == 1) {
            response(res.data.data);
        }
    }).catch(function (err) {
        if (!err.msg) {
            err.msg = '系统出问题了!'
        }
        if (error) {
            error(err)
        }else{
            // alert( '系统出问题了!')
        }
    })
}

export default {
    get: function (url, params, response, error) {
        return apiAxios('GET', url, params, response, error)
    },
    post: function (url, params, response, error) {
        return apiAxios('POST', url, params, response, error)
    }
}
