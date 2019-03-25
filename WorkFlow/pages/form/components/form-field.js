// pages/form/components/form-field.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "title":String,
    "required":Boolean,
    "isActive":Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function() {

    },
    onTapTitleView: function() {
      const { isActive } = this.data;
      let active = !isActive;
      this.setData({
        isActive: active
      })
    }
  }
})
