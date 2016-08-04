'use strict'
module.exports = () => {
  try {
    // Edge has chrome object but only chrome.app so Object which has tabs method is real API object.
    global.browser = global.chrome = (global.chrome.tabs && global.chrome) || (global.browser.tabs && global.browser)
  } catch (e) {
    let global = window
    global.browser = global.chrome = global.chrome || global.browser
  }
}
