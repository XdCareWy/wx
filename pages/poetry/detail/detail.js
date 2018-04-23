// pages/poetry/detail/detail.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "献给我最爱的人",
    news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.info('onLoad')
    this.setData({ news: util.data })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    console.info('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info('onShow')
    this.audioContext = wx.createAudioContext('myAudio');
    this.audioContext.play()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

    console.info('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

    console.info('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onClickTile: function() {
    this.setData({title: "asd"})
  }
})