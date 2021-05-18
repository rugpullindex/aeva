// @format

import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import test from "ava";

import { find } from "../src/runner.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, "../package.json");
const pkg = JSON.parse(readFileSync(pkgPath).toString());

test("if test .sol files are found", async t => {
  const fixturePath = resolve(__dirname, "./fixtures/example-project");

  const paths = await find({ cwd: fixturePath });
  t.is(paths.length, 2);
  t.is(paths[0], "test/correct_test.sol");
  t.is(paths[1], "test/correct.test.sol");
});
