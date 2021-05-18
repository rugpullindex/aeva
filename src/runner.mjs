// @format
import globby from "globby";

export async function run(args) {
  const paths = await find();
}

export async function find(options) {
  options = { ...options };
  return await globby(["**/*_test.sol", "**/*.test.sol"], options);
}
