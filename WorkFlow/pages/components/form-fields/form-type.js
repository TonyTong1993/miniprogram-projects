/*input and text-area type;text-field single line input*/ 
const form_type_text_field_decimal = "text field with decimal keyboard type";//数字键盘输入
const form_type_text_field_default = "text field with default keyboard type";//默认键盘输入
const form_type_text_field_phone = "text need phone verify";//需要手机号码验证的表单
const form_type_text_field_emall = "text need emall verify";//需要邮箱号码验证的表单

const form_type_text_view_horizatol = "text view display horizatol";//与title在水平方向上显示
const form_type_text_view_vertical = "text view display vertical";//与title在垂直方向上显示

/*date type*/
const form_type_date_default = "date default";//date type for YYYY-MM-DD format date
const form_type_date_format_YYYY = "date format YYYY";//date type for YYYY format date
const form_type_date_format_YYYYMM = "date format YYYYMM";//date type for YYYY-MM format date
const form_type_date_format_YYYYMMDD = "date format YYYYMMDD";//date type for YYYY-MM-DD format date
const form_type_date_format_HHMMSS = "date format HHMMSS";//date type for HH:mm:ss format date

/*selector type*/

/*media type*/
const form_type_media_image = "media image";//media type for image selector
const form_type_media_video = "media video";//media type for video selector
const form_type_media_audio = "media audio";//media type for audio selector

module.exports = {
  form_type_text_field_decimal,
  form_type_text_field_default,
  form_type_text_field_phone,
  form_type_text_field_emall,
  
  form_type_text_view_horizatol,
  form_type_text_view_vertical,

  form_type_date_default,
  form_type_date_format_YYYY,
  form_type_date_format_YYYYMM,
  form_type_date_format_YYYYMMDD,
  form_type_date_format_HHMMSS,

  form_type_media_image,
  form_type_media_video,
  form_type_media_audio
}