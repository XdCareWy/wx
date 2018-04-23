// pages/poetry/list/list.js
const util = require('../../../utils/util.js');
const { BASE_URL, BASE_IMG_URL } = getApp().globalData.config;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poetrys: [],
    baseImgUrl: BASE_IMG_URL,
    page: 1
  },

  onClick: e => {
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfo(this.data.page);
  },

  onReachBottom: function() {
    // this.getInfo(this.data.page++);
  },

  onLongPress: function(e) {
    const id = e.currentTarget.id;
    wx.showActionSheet({
      itemList: ['删除'],
      itemColor: "#FF0000",
      success: () => {
        wx.request({
          url: BASE_URL + '/remove',
          method: 'POST',
          data: { id: id },
          success: res => {
            const { data, statusCode } = res;
            if (statusCode === 200) {
              this.getInfo(1)
            }
          }
        });
      }
    })
  },

  getInfo: function(page) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: BASE_URL + '/find',
      data: {page: page},
      success: res => {
        const { data, statusCode } = res;
        if (statusCode === 200) {
          this.setData({ poetrys: data });
          wx.hideLoading();
        }
      }
    });
  }
})