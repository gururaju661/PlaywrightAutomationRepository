const { test, expect } = require("@playwright/test");
test("First Playwright test", async function display({ page }) {
  console.log("Running First Playwright test Using Traditional Function");
});

test("Second Playwright test", async function ({ page }) {
  console.log("Running Second Playwright test Using Traditional Function");
});

test("Third Playwright test", async ({ page }) => {
  console.log("Running Third Playwrite test Using Traditional Function");
});
