'use strict'
module.exports = () => {
  try {
    global.browser = global.chrome = global.chrome || global.browser
  } catch (e) {
    let global = window
    global.browser = global.chrome = global.chrome || global.browser
  }
}
