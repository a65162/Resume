import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import ReactHooks from 'eslint-plugin-react-hooks'
import ReactEslint from 'eslint-plugin-react'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ReactEslint.configs.flat.recommended,
  ReactHooks.configs.flat.recommended,
  ReactEslint.configs.flat["jsx-runtime"],
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
