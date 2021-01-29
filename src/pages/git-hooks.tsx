import fs from "fs";

import { Content, Layout } from "../components";

export async function getStaticProps() {
  const script = fs.readFileSync("./scripts/opt-git-hooks.sh", "utf-8");

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
          "```sh\n" +
          script +
          "```\n" +
          `
${"```"}json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged --quiet",
      "pre-push": "yarn lint"
    }
  },
  "lint-staged": {
    "*.{js,json,ts,tsx,yaml}": "prettier --write"
  },
${"```"}
`
        }
      />
    </Layout>
  );
}
