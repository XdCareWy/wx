//index.js
const { BIM_LEVEL, CAD_LEVEL, BIM_APPLY } = getApp().globalData.enterType;

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
      case BIM_LEVEL:
      case CAD_LEVEL:
      case BIM_APPLY:
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
