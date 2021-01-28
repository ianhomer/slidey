import fs from "fs";

import { Content, Layout } from "../components";

export async function getStaticProps() {
  const script = fs.readFileSync("./scripts/opt-1-lint.sh", "utf-8");

  return {
    props: {
      script,
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout>
      <Content
        children={
          script +
          `
     "husky":
    "hooks": "pre-commit": "lint-staged --quiet", "pre-push": "yarn lint" ,
    "lint-staged": "*.
    {(js, json, ts, tsx, yaml)}
    ": "prettier --write" , "eslint": "eslint src --ext .ts,.tsx", "eslint:fix":
    "eslint src --ext .ts,.tsx --fix", "lint": "run-s prettier eslint",
    "lint:fix": "run-s package:fix prettier:fix eslint:fix", "package:fix":
    "format-package -w", "prettier": "npx prettier --check .", "prettier:fix":
    "npx prettier --write .", .prettierignore .next .eslintrc.js
`
        }
      />
    </Layout>
  );
}
