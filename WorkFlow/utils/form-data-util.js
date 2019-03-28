export const parseformData = (formData) => {
  let results = [];
  if (!(formData instanceof Object) || formData == undefined || formData == null) return results;
  const {
    data
  } = formData;
  if (data == undefined || data == null) return results;
  const {
    tableName,
    params
  } = data;

  if (!(params instanceof Array) || params == undefined || params == null || params.length <= 0) return results;
  //TODO:need optimize params parse method
  let value = params[0]
  let items = value.items;
  if (!(items instanceof Array) || items == undefined || items == null || items.length <= 0) return results;
  items.forEach(item => {
    if (item.visible) {
      let object = new Object();
      object.title = item.alias;
      object.defaultValue = item.defaultvalue;
      object.findex = item.edit;
      object.key = item.findex;
      object.required = item.required;
      object.type = item.type;
      object.value = item.value;
      results.push(object);
    }
  });

  return results;
}