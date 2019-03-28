// pages/components/form-fields/index.js
import * as RemoteFormType from "./form-type-remote.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isTXT: false,
    isImage: false,
    isVideo: false,
    isAudio: false,
    isLocation: false
  },

  attached: function(e) {
    let _isTXT = this._isTXT();
    let _isImage = this._isImage();
    let _isVideo = this._isVideo();
    let _isAudio = this._isAudio();
    let _isLocation = this._isLocation();
    const {
      item
    } = this.data;
    this.setData({
      isTXT: _isTXT,
      isImage: _isImage,
      isVideo: _isVideo,
      isAudio: _isAudio,
      isLocation: _isLocation,
      required: item.required
    });

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _isTXT: function() {
      const {
        item
      } = this.data;
      return RemoteFormType.form_type_remote_txt === item.type;
    },
    _isImage: function() {
      const {
        item
      } = this.data;
      return RemoteFormType.form_type_remote_image === item.type;
    },
    _isAudio: function() {
      const {
        item
      } = this.data;
      return RemoteFormType.form_type_remote_audio === item.type;
    },
    _isVideo: function() {
      const {
        item
      } = this.data;
      return RemoteFormType.form_type_remote_video === item.type;
    },
    _isLocation: function() {
      const {
        item
      } = this.data;
      return RemoteFormType.form_type_remote_location === item.type;
    }
  }
})