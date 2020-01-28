function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  var updateObj = Object.assign({}, object)
  updateObj.prop = 'prop 2'
  return object
}

