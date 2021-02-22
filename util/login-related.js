export default {
  globalData: {
    hasLogin: false //登录状态
  },
  /*****************************************
  * 设置登录状态
  *****************************************/
  setHasLogin (boolean) {
    this.globalData.hasLogin = boolean;
  },
  /*****************************************
   * Promise封装wx.checkSession
   *****************************************/
  checkSession () {
    return new Promise(function (resolve, reject) {
      wx.checkSession({
        success: function () {
          resolve(true);
        },
        fail: function () {
          reject(false);
        },
      });
    });
  },
  /*****************************************
  * Promise封装wx.getSetting
  *****************************************/
  getSetting () {
    return new Promise(function (resolve, reject) {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting["scope.userInfo"]) {
            //已授权
            resolve(true)
          } else {
            reject(false);
          }
        },
        fail: () => { reject(false); },
      });
    })
  },
  /*****************************************
  * Promise封装wx.login
  *****************************************/
  login () {
    return new Promise(function (resolve, reject) {
      wx.login({
        success: (res) => {
          if (res.code) {
            resolve(res)
          } else {
            //获取用户登录态失败
            //console.log('获取用户登录态失败！' + res.errMsg)
            reject(false);
          }
        },
        fail: () => {
          reject(false);
        },
      });

    })
  },
  /*****************************************
  * Promise封装wx.request
  *****************************************/
  request (options) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'http://192.168.16.116:8088' + options.url,
        data: options.data || {},
        header: options.header || {
          'content-type': 'application/json',
          'WX-Token': wx.getStorageSync('token')
        },
        method: options.method || 'POST',
        dataType: 'json',
        success: (res) => {
          if (res.statusCode == 200) {
            if (res.data.errno == 501) {
              //清除相关内容
              try {
                wx.removeStorageSync('userInfo');
                wx.removeStorageSync('token');
              } catch (e) {
                // Do something when catch error
              }
              // 切换到登录页面
              wx.reLaunch({
                url: '/pages/login/login'
              });
            } else {
              resolve(res.data);
            }
          } else {
            reject(res.errMsg);
          }
        },
        fail: (err) => { reject(err) },
      });

    })
  },
  /*****************************************
   * 判断用户是否登录
   *****************************************/
  checkLogin () {
    let that = this;
    return new Promise(function (resolve, reject) {
      if (wx.getStorageSync("userInfo") && wx.getStorageSync("token")) {
        that.checkSession()
          .then(() => {
            that.setHasLogin(true);
            resolve(true);
          })
          .catch(() => {
            that.setHasLogin(false);
            reject(false);
          });
      } else {
        that.setHasLogin(false);
        reject(false);
      }
    });
  },
  /*****************************************
  * 调用微信登录
  *****************************************/
  loginByWeixin (userInfo) {
    let that = this;
    return new Promise(function (resolve, reject) {
      return that.login().then(res => {
        that.request({
          url: "/api/wechat/auth/login",
          data: {
            userInfo,
            code: res.code,
          }
        }).then(res => {
          if (res.code == 200) {
            //存储用户信息
            wx.setStorageSync('userInfo', res.data.userInfo);
            wx.setStorageSync('token', res.data.token);
            that.setHasLogin(true);
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((err) => {
          reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
  },
  /*****************************************
  * 退出登录
  *****************************************/
  exitLogin () {
    this.setHasLogin(false);
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
    wx.reLaunch({
      url: '/pages/login/login'
    });
  }
}