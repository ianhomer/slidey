import { Content } from "../components";

export default function Page() {
  return (
    <Content
      children={`
    yarn -D add @typescript-eslint/eslint-plugin \\ @typescript-eslint/parser \\
    eslint \\ eslint-config-prettier \\ eslint-plugin-simple-import-sort \\
    format-package \\ husky \\ npm-run-all \\ lint-staged \\ prettier "husky":
    "hooks": "pre-commit": "lint-staged --quiet", "pre-push": "yarn lint" ,
    "lint-staged": "*.
    {(js, json, ts, tsx, yaml)}
    ": "prettier --write" , "eslint": "eslint src --ext .ts,.tsx", "eslint:fix":
    "eslint src --ext .ts,.tsx --fix", "lint": "run-s prettier eslint",
    "lint:fix": "run-s package:fix prettier:fix eslint:fix", "package:fix":
    "format-package -w", "prettier": "npx prettier --check .", "prettier:fix":
    "npx prettier --write .", .prettierignore .next .eslintrc.js
`}
    />
  );
}
