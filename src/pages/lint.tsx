import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./scripts/opt-lint.sh"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout>
      <Content
        children={`
${script}

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
`}
      />
    </Layout>
  );
}
