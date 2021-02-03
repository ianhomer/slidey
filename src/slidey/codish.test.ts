import fs from "fs";

import { getCode, stripComments } from ".";

it("Removes comments", () => {
  expect(
    stripComments(`
# comment
not comment`)
  ).toBe(`
not comment`);
});
it("OK", () => {
  const code = getCode(fs, "./scripts/opt-lint.sh");
  expect(code.substring(0, 4)).toBe("yarn");
  expect(code.split("\n").length).toBe(5);
});
