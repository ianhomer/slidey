import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./scripts/opt-git-hooks.sh"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout>
      <Content
        children={`
Auto lint on commit

${script}

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
`}
      />
    </Layout>
  );
}
