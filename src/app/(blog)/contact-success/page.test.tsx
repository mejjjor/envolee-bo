import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// import { injectServices } from "@/services";
// import { getStubHoneysAPI } from "@/services/helpers";

import Page from "./page";

test("Page", async () => {
  // injectServices("honeyAPI", getStubHoneysAPI([stubHoneyBuilder().title("toto").build()]))
  const Result = await Page();

  render(Result);

  expect(screen.getByText("toto")).toBeDefined();
});
