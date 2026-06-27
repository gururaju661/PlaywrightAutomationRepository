const { test, expect } = require("@playwright/test");
test("First Playwright test", async ({ page }) => {
  expect(120).toBe(120);
});

//skip
test("second Playwright test", async ({ page }) => {
  expect(120.44).toBe(120.44);
});

//only
test("Third Playwright test", async ({ page }) => {
  expect(129).toBeGreaterThan(120);
});

test("Fourth Playwright test", async ({ page }) => {
  expect("S G Software testing Institue").toContain("Software");
});

test("Fifth Playwright test", async ({ page }) => {
  expect("S G Software testing Institue".includes("testing")).toBeTruthy();
});
