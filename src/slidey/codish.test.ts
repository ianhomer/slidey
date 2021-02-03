import fs from "fs";

import { getCode, getCodeBlock, scriptType, stripComments } from ".";

it("Removes comments", () => {
  expect(
    stripComments(`
# comment
not comment`)
  ).toBe(`
not comment`);
});

it("Gets script", () => {
  const code = getCode(fs, "./scripts/opt-lint.sh");
  expect(code.substring(0, 4)).toBe("yarn");
  expect(code.split("\n").length).toBe(5);
});

it("Generates code block", () => {
  const block = getCodeBlock(fs, "./scripts/opt-git-hooks.sh");
  expect(block).toBe(`${"```"}sh
yarn -D add husky lint-staged
${"```"}`);
});

it("Gets script type", () => {
  expect(scriptType("blah.sh")).toBe("sh");
  expect(scriptType("blah.js")).toBe("javascript");
});
