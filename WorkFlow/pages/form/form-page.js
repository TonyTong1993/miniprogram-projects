// pages/form/form-page.js
import * as formDataUtil from "../../utils/form-data-util.js"
const formData = require('form-data');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formItems:[],
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
     setTimeout(()=> {
       wx.hideLoading();
       let reuslts = formDataUtil.parseformData(formData)
       console.log(reuslts)
       this.setData({
         formItems:reuslts,
         loading:true
       })
     },1000);
     
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})