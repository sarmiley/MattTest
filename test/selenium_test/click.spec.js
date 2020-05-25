// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Click', function () {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function () {
    await driver.quit()
  })
  it('Click', async function () {
    await driver.get('https://sarmiley.github.io/MattTest/')
    await driver.manage().window().setRect(1440, 801)
    await driver.findElement(By.css('a:nth-child(2) > p')).click()
  })
})
