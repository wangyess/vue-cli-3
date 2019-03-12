/**
 * 在登陆的时候 登陆成功后端会返回token
 * 拿到token 并把它设置到cookie中
 * this.$cookie.setCookie("token", response.data.token, isRememberMe);
 * isRememberMe 代表真假  以上都是在登陆页面设置的
 */

// Get Cookie
export function getLocalCookie(name) {
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  var arr = document.cookie.match(reg)
  if (arr) {
    return (arr[2]);
  }
  else {
    return null;
  }
}

// Set Cookie
export function setCookie(c_name, value, isRememberMe) {
  if (isRememberMe) {
    var days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = c_name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }
  else {
    document.cookie = c_name + "=" + escape(value);
  }
}

// Del Cookie
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getLocalCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}
