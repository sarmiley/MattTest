// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('loginFail', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('loginFail', async function() {
    await driver.get("https://sarmiley.github.io/MattTest/")
    await driver.manage().window().setRect(1440, 801)
    await driver.findElement(By.css("p")).click()
    await driver.findElement(By.css(".type-area:nth-child(2) input")).click()
    await driver.findElement(By.css(".type-area:nth-child(2) input")).sendKeys("qwert")
    await driver.findElement(By.css(".type-area:nth-child(3) input")).click()
    await driver.findElement(By.css(".type-area:nth-child(3) input")).sendKeys("asdfg")
    await driver.findElement(By.css("button")).click()
    assert(await driver.switchTo().alert().getText() == "登入失敗")
  })
})
