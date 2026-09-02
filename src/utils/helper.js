// src/utils/helpers.js

/**
 * Waits for a network response matching a URL pattern — useful when
 * a UI action triggers a backend call you need to wait on explicitly.
 */
export async function waitForResponse(page, urlPattern, timeout = 10000) {
  return page.waitForResponse(
    (response) => response.url().includes(urlPattern) && response.status() === 200,
    { timeout }
  );
}

/**
 * Retries an async action a set number of times before failing —
 * useful for flaky third-party widgets (e.g. a slow-loading dropdown).
 */
export async function retry(fn, retries = 3, delayMs = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

export function acceptNextDialog(page) {
  page.once('dialog', (dialog) => dialog.accept());
}

export function dismissNextDialog(page) {
  page.once('dialog', (dialog) => dialog.dismiss());
}

export async function getDialogMessage(page) {
  return new Promise((resolve) => {
    page.once('dialog', (dialog) => {
      resolve(dialog.message());
      dialog.accept();
    });
  });
}
