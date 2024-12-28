import { projectTags } from "@/constants/projects";
import { test, expect } from "@playwright/test";

test("Should response when filter changes", async ({ page }) => {
  await page.goto("http://localhost:3000/projects");

  await expect(page.getByTestId("projects-accordion")).toHaveText("Filters");

  // get all elements with data-testid starting with projects-filter-
  const filters = await page.$$("[data-testid^=projects-filter-]");

  await expect(filters).toHaveLength(projectTags.length);

  // not find any element with data-testid starting with projects-filter-selected-tags
  await expect(page.getByTestId("sql-filter-preview")).not.toBeVisible();

  await page.getByTestId("projects-filter-TypeScript").click();
  await page.getByTestId("projects-filter-JavaScript").click();
  await page.getByTestId("projects-filter-Node.js").click();
  await page.getByTestId("projects-filter-JavaScript").click();

  // find element with data-testid starting with sql-filter-preview
  await expect(page.getByTestId("sql-filter-preview")).toBeVisible();

  // find elements with data-testid starting with sql-filter-preview-TypeScript
  // and sql-filter-preview-Node.js
  await expect(page.getByTestId("sql-filter-preview-TypeScript")).toBeVisible();
  await expect(page.getByTestId("sql-filter-preview-Node.js")).toBeVisible();
  await expect(
    page.getByTestId("sql-filter-preview-JavaScript")
  ).not.toBeVisible();
});
