
// src/pages/base.page.js
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '') {
    await this.page.goto(path);
  }

  async getTitle() {
    return this.page.title();
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, text) {
    await locator.fill(text);
  }

  async isVisible(locator) {
    return locator.isVisible();
  }

  // Kept as a standalone utility — NOT called before every action,
  // only used when you explicitly need to wait for something
  // conditional/optional (e.g. a toast, a spinner disappearing).
  async waitForElement(locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}

