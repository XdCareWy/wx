// pages/enter/gradeEnter.js
const { BIM_LEVEL, CAD_LEVEL, BIM_APPLY } = getApp().globalData.enterType;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exampleArray: ['BIM', 'CAD'],
    exampleIndex: 0,
    idArray: ['大学生', '其他'],
    idIndex: 0,
    msg: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // id: 1-BIM等级考试；2-CAD等级考试；3-BIM技能应用
    let cardId = options.id;
    let exampleArray = ['BIM', 'CAD'];
    let exampleIndex = 0;
    switch (+cardId) {
      case BIM_LEVEL:
      case CAD_LEVEL:
        exampleIndex = cardId - 1;
        break;
      case BIM_APPLY:
        exampleArray = [
          { value: 'Revit', name: 'revit'},
          { value: '案例实操', name: 'operate' }
        ];
        exampleIndex = -1;
        break;
      default:
        exampleIndex = 0;
    }
    this.setData({ exampleIndex: exampleIndex, exampleArray: exampleArray })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      exampleIndex: e.detail.value
    })
  },
  bindIdPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      idIndex: e.detail.value
    })
  },
  showErrorMsg: function (filed, msg) {
    if (filed === "" || filed.length === 0) {
      this.setData({ msgVisible: true, msg: msg });
      const t = setTimeout(() => {
        this.setData({ msgVisible: false, msg: "" });
        t && clearTimeout(t);
      }, 2000);
      return false;
    }
    return true;
  },
  formSubmit: function (e) {
    const requireFiled = ["name", "phone", "idCard", "idType", "address", "exampleType"];
    const requireValue = {
      name: "姓名不能为空",
      phone: "手机号不能为空",
      idCard: "身份证号码不能为空",
      idType: "选择身份",
      address: "请填写单位地址",
      exampleType: "选择考试类别"
    };
    const v = e.detail.value;
    const { name, phone, idCard, idType, address, exampleType } = v;
    for (let k in v) {
      let r = requireFiled.includes(k) && this.showErrorMsg(v[k], requireValue[k]);
      if (!r) {
        return;
      }
    }
    console.log(v);

    wx.showModal({
      title: '表单信息',
      content: JSON.stringify(v),
    })
  }
})