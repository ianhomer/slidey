import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./.prettierignore"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout>
      <Content
        children={`
.prettierignore

${script}
`}
      />
    </Layout>
  );
}
