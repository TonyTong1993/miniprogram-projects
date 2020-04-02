// components/form-fields/form-field-text.js
import myBehavior from "../form-field-behavior"
Component({
  behaviors:[myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    focus: false
  },

  attached() {
    console.log("attached form form field text")
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapInputView: function() {
      
    }, onTapTitleView: function () {
      const {
        isActive
      } = this.data;
      if (!isActive) {
        let active = !isActive;
        this.setData({
          isActive: active
        })
        setTimeout(()=> {
          this.setData({
            focus: true
          })
        },200)
      }else {
        this.setData({
          focus: true
        })
      }

    }
  }
})
