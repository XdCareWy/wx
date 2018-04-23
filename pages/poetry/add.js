// pages/poetry/add.js
const util = require('../../utils/util.js');
const { BASE_URL, BASE_IMG_URL } = getApp().globalData.config;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    description: "",
    imgUrl: "",
    baseImgUrl: BASE_IMG_URL,
    msgVisible: false,
    msg: ""
  },

  onLoad: function(options) {

  },

  formSubmit: function(e) {
    const {topic, description, url} = e.detail.value;
    let msg = "";
    if(!topic) {
      msg = "请填写标题！";
      this.setData({msgVisible: true, msg: msg});
      const t = setTimeout(() => {
        this.setData({msgVisible: false, msg: ""});
        t && clearTimeout(t);
      }, 2000);
      return;
    }
    if (!description) {
      msg = "请填写内容！";
      this.setData({ msgVisible: true, msg: msg });
      const t = setTimeout(() => {
        this.setData({ msgVisible: false, msg: "" });
        t && clearTimeout(t);
      }, 2000);
      return;
    }
    if (!url) {
      msg = "请上传一张图片！";
      this.setData({ msgVisible: true, msg: msg });
      const t = setTimeout(() => {
        this.setData({ msgVisible: false, msg: "" });
        t && clearTimeout(t);
      }, 2000);
      return;
    }
    const peotry = {
      url: url,
      topic: topic,
      description: description
    };
    wx.request({
      url: BASE_URL + '/poetry/add',
      method: 'POST',
      data: peotry,
      success: res => {
        console.log(res)
        const {statusCode} = res;
        if(statusCode === 200) {
          const {code} = res.data;
          if(code === 1) {
            wx.showModal({
              title: '提示',
              content: '添加成功！',
              success: res => {
                const {confirm, cancel} = res;
                if(confirm) {
                  this.setData({
                    title: "",
                    description: "",
                    imgUrl: "",
                  });
                  wx.switchTab({
                    url: './list/list'
                  })
                }else if(cancel) {
                  this.setData({
                    title: "",
                    description: "",
                    imgUrl: "",
                  })
                }
              }
            })
          }
        }
      }
    })
  },

  handleTileTap: function() {
    wx.navigateTo({
      url: 'content/title?title='+this.data.title,
    })
  },

  handleDescriptionTap: function() {
    wx.navigateTo({
      url: 'content/content?description=' + this.data.description,
    })
  },

  handleUpload: function () {
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选取'],
      success: res => {
        switch(res.tapIndex) {
          case 0:
            wx.chooseImage({
              sourceType: ['camera'],
              success: function(res) {
                wx.showModal({
                  title: 'debug',
                  content: JSON.stringify(res.tempFilePaths),
                })
              },
            })
            break;
          case 1:
            wx.chooseImage({
              count: 1,
              sourceType: ['album'],
              success: res => {
                const uploadTask = wx.uploadFile({
                  url: BASE_URL + '/upload',
                  filePath: res.tempFilePaths[0],
                  name: "file",
                  success: res => {
                    const {statusCode, data} = res;
                    if(statusCode === 200) {
                      this.setData({ imgUrl: data});
                    }
                  },
                  fail: res => {
                    wx.showModal({
                      title: 'fail',
                      content: JSON.stringify(res),
                    })
                  } 
                });

                uploadTask.onProgressUpdate(res => {
                  const {progress} = res;
                  if(progress === 100) {
                    wx.hideLoading();
                  }else {
                    wx.showLoading({
                      title: '正在上传',
                    })
                  }
                });
              },
            })
            break;
        }
      }
    })
  },

  deleteImg: function() {
    wx.showActionSheet({
      itemList: ["删除图片"],
      itemColor: "#ff0000",
      success: res => {
        // 发送删除 图片的请求
        this.setData({imgUrl: ""});
      }
    })
  }

})