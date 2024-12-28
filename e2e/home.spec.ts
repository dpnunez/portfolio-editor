import { test, expect } from "@playwright/test";

test("Should render home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByText("Hi all, I'm")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Daniel Núñez" })
  ).toBeVisible();
  await expect(page.getByText("Full Stack Developer,")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "// fell free to access the" })
  ).toBeVisible();
});
