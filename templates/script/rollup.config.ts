import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

const options: RollupOptions = {
  input: "src/index.ts",
  output: {
    file: "../../dist/scripts/{{script_short_name}}.js",
    format: "esm",
  },
  plugins: [typescript(), nodeResolve()],
  treeshake: "recommended",
};

export default options;
