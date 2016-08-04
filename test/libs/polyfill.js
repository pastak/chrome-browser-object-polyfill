import test from 'ava'
import polyfill from '../../src/libs/polyfill'

let _global = {}

test.beforeEach((t) => {
  _global = Object.assign(global, {})
  global.chrome = undefined
  global.browser = undefined
  global.window = global
})

test.afterEach((t) => {
  global = Object.assign(_global, {})
})

test('has no `chrome`', (t) => {
  window.browser = {tabs: {}}
  t.is(typeof window.chrome, 'undefined')
  polyfill()
  t.is(typeof window.chrome.tabs, 'object')
})

test('has no `browser`', (t) => {
  window.chrome = {tabs: {}}
  t.is(typeof window.browser, 'undefined')
  polyfill()
  t.is(typeof window.browser.tabs, 'object')
})

test('has no `chrome` without `global`', (t) => {
  window = {}
  window.browser = {tabs: {}}
  global = undefined
  polyfill()
  t.is(typeof window.browser.tabs, 'object')
  t.is(typeof window.chrome.tabs, 'object')
})

test('has no `browser` without `global`', (t) => {
  window = {}
  window.chrome = {tabs: {}}
  global = undefined
  polyfill()
  t.is(typeof window.browser.tabs, 'object')
  t.is(typeof window.chrome.tabs, 'object')
})
