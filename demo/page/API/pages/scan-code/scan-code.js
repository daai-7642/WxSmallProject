Page({
  data: {
    result: ''
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      success: function (res) {
        that.setData({
          result: res.result
        })
       
         wx.navigateTo({
            url: res.result
          })
      },
      fail: function (res) {
      }
    })
  }
})
