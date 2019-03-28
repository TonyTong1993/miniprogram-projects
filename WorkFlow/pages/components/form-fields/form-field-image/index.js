// pages/components/form-fields/form-field-image/index.js
import myBehavior from "../form-field-behavior"
Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tempFilePaths: [],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    chooseImage: function() {
      var that = this;
      wx.showActionSheet({
        itemList: ['从相册中选择', '拍照'],
        itemColor: "#CED63A",
        success: function(res) {
          if (!res.cancel) {
            if (res.tapIndex == 0) {
              that._thooseImage('album');
            }else if(res.tapIndex == 1){
              that._thooseImage('camera');
            }
          }
        }
      })
    },
    _thooseImage: function(type) {
      var that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
          console.log(res);
          that.setData({
            tempFilePaths: res.tempFilePaths,
          })
        }
      })
    }
  }
})
