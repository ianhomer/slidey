import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./src/slidey.test.ts"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout title="src/slidey.test.ts">
      <Content
        children={`
${script}

     yarn test
`}
      />
    </Layout>
  );
}
