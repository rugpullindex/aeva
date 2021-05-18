#!/usr/bin/env node

// @format
import meow from "meow";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { run } from "./runner.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, "../package.json");
const pkg = JSON.parse(readFileSync(pkgPath).toString());

const cli = meow(
  `
  Usage:
    $ ${pkg.name}
`,
  {
    importMeta: import.meta
  }
);

run(cli)
  .then()
  .catch();
