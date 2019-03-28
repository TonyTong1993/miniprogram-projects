/*
DATE:2019年03月25日
author: tony tong
description:定义表单项的通用Behavior
*/

module.exports = Behavior({
  behaviors: [],
  properties: {
    title: {
      type: String
    },
    required: {
      type: Boolean
    },
    editable: {
      type: Boolean
    },
    isActive: {
      type: Boolean
    }
  },
  data: {
    fields: {
      key:String,
      value : null
    }
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () {
      console.log('log from my-behavior.js')
    },
    onTapTitleView: function () {
      const { isActive } = this.data;
      let active = !isActive;
      this.setData({
        isActive: active
      })
    }
  }
})

