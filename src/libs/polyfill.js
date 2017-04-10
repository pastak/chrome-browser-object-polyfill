'use strict'
module.exports = () => {
  try {
    // Edge has chrome object but only chrome.app so Object which has i18n method is real API object.
    global.browser = global.chrome = (global.chrome && global.chrome.i18n && global.chrome) || (global.browser && global.browser.i18n && global.browser)
  } catch (e) {
    let global = window
    global.browser = global.chrome = global.chrome || global.browser
  }
}
