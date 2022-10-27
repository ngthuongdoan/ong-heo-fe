'use strict'
module.exports = function (name) {
  return function (v) {
    return !v || v.trim() === '' ? ''.concat(name, ' is required') : true
  }
}
