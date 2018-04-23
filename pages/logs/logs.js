//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    wx.showLoading({
      title: '正在加载。。。',
    })
    wx.request({
      url: 'https://zxdyue.top/info',
      method: 'GET',
      success: function(res) {
        console.log(res)
        wx.hideLoading();
      }
    })


    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
