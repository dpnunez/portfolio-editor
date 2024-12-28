import { test, expect } from "@playwright/test";

test("Sould render About 'file explorer' navigation", async ({ page }) => {
  await page.goto("http://localhost:3000/about/me");
  const desktopMenu = await page.waitForSelector("#desktop-menu");

  expect(await desktopMenu.isVisible()).toBe(true);

  await expect(page.getByTestId("about-accordion")).toBeVisible();
  await expect(page.getByTestId("about-accordion")).toBeVisible();
  await expect(page.getByRole("link", { name: "me.ts" })).toBeVisible();
  await expect(page.getByRole("button", { name: "work" })).toBeVisible();
  await expect(page.getByRole("link", { name: "education.ts" })).toBeVisible();
  await expect(page.getByRole("link", { name: "skills.ts" })).toBeVisible();
  await page.getByRole("button", { name: "work" }).click();
  await expect(page.getByRole("link", { name: "softplan.md" })).toBeVisible();
  await expect(page.getByRole("link", { name: "nav9.md" })).toBeVisible();
});

test("Personal information", async ({ page }) => {
  await page.goto("http://localhost:3000/about/me");
  await page.getByRole("link", { name: "me.ts" }).click();

  await expect(page).toHaveURL("http://localhost:3000/about/me");
  await expect(page.locator("[data-is-file-active=true]")).toHaveText("me.ts");
  await expect(page.getByTestId("me-code-snippet")).toBeVisible();
});

test("Work experience", async ({ page }) => {
  await page.goto("http://localhost:3000/about/me");
  await page.getByRole("button", { name: "work" }).click();
  await page.getByRole("link", { name: "softplan.md" }).click();

  await expect(page).toHaveURL("http://localhost:3000/about/work/softplan");
  await expect(page.locator("[data-is-file-active=true]")).toHaveText(
    "softplan.md"
  );
  await expect(page.getByTestId("softplan-page")).toBeVisible();
});

test("Education", async ({ page }) => {
  await page.goto("http://localhost:3000/about/me");
  await page.getByRole("link", { name: "education.ts" }).click();

  await expect(page).toHaveURL("http://localhost:3000/about/education");
  await expect(page.locator("[data-is-file-active=true]")).toHaveText(
    "education.ts"
  );
  await expect(page.getByTestId("education-code-snippet")).toBeVisible();
});

test("Skills", async ({ page }) => {
  await page.goto("http://localhost:3000/about/me");
  await page.getByRole("link", { name: "skills.ts" }).click();

  await expect(page).toHaveURL("http://localhost:3000/about/skills");
  await expect(page.locator("[data-is-file-active=true]")).toHaveText(
    "skills.ts"
  );
  await expect(page.getByTestId("skills-code-snippet")).toBeVisible();
});
