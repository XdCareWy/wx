// pages/poetry/add/title.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   value: "",
   msgVisible: false,
   msg: ""
  },

  onLoad: function (options) {
    const {title} = options;
    this.setData({value: title});
  },

  handleBlur: function (e) {
    const { value } = e.detail;
    if (value) {
      this.back(value);
    }else {
      this.setData({ msgVisible: true, msg: "请输入标题" });
      const t = setTimeout(() => {
        this.setData({ msgVisible: false, msg: "" });
        t && clearTimeout(t);
      }, 2000);
    }
  },
  /**
   * 为上个page设置value值
   * @param value [string] 输出框获取的值
   */
  back: function(value) {
    const arr = getCurrentPages();
    if(arr[arr.length - 2].route === 'pages/poetry/add') {
      wx.navigateBack({
        delta: 1,
        success: function() {
          arr[arr.length - 2].setData({title: value})
        }
      })
    }
  }
})