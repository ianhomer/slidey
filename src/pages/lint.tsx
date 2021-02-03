import fs from "fs";

import { Content, Layout } from "../components";
import { getCode } from "../slidey";

export async function getStaticProps() {
  const script = getCode(fs, "./scripts/opt-lint.sh");
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
package.json

${"```"}json
"eslint": "eslint src --ext .ts,.tsx",
"eslint:fix": "eslint src --ext .ts,.tsx --fix",
"lint": "run-s prettier eslint",
"lint:fix": "run-s package:fix prettier:fix eslint:fix",
"package:fix": "format-package -w",
"prettier": "npx prettier --check .",
"prettier:fix": "npx prettier --write .",
${"```"}

.eslintrc.js
`
        }
      />
    </Layout>
  );
}
