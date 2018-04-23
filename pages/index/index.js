//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  onShow: function () {

  },
  handleEnter: function (event) {
    const cardId = event.currentTarget.id;
    let navigateUrl = "";
    switch (+cardId) {
      case 1:
      case 2:
        navigateUrl = '../enter/gradeEnter?id='+cardId;
        break;
    }
    if (navigateUrl) {
      wx.navigateTo({
        url: navigateUrl,
      })
    }
  }
})
