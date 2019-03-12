import axios from 'axios';
import * as localCookie from './cookie'
import router from '@/router'
//这里可以引入 要提示的ui组件  下面例子用到的是  toast  vant-UI

/**
 * 如果设置的headers格式是 application/x-www-form-urlencoded
 * 这种格式是form提交的格式 name=zhangsan&age=4
 * 所以要把json {name:zhangsan,age:4}格式转换为name=zhangsan&age=4的格式
 * 所以要用到qs模块，用来序列化post类型的数据 import QS from 'qs';
 * 例如下面
 */
// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, QS.stringify(params))
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   });
// }


//设置超时时间
axios.defaults.timeout = 2500;
//设置axios的默认请求地址
// axios.defaults.baseURL = '';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = localCookie.getLocalCookie('token'); //获取token
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': token
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        /**
         * 401: 未登录
         * 未登录则跳转登录页面，并携带当前页面的路径
         * 在登录成功后返回当前页面，这一步需要在登录页操作
         */
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        /**
         * 403 token过期
         * 登录过期对用户进行提示 | toast 是UI组件中的提示组件
         * 清除本地token
         * 跳转登录页面
         */
        case 403:
          // Toast({
          //   message: '登录过期，请重新登录',
          //   duration: 1000,
          //   forbidClick: true
          // });
          // 清除token
          localCookie.delCookie('token');
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        /**
        * 404 网络请求不存在
        */
        case 404:
          // Toast({
          //   message: '网络请求不存在',
          //   duration: 1500,
          //   forbidClick: true
          // });
          break;
        default:
          // Toast({
          //   message: error.response.data.message,
          //   duration: 1500,
          //   forbidClick: true
          // });
      }
    }
    return Promise.reject(error.response);
  });

/**
* get协议封装
* @param url
* @param params
* @returns {Promise}
*/
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post 协议封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * patch 协议封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * put 协议封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * delete协议封装
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function del(url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      });
  });
}