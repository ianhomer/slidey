import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./babel.config.js"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout title="Unit tests with Jest">
      <Content
        children={`
    yarn -D add @types/jest jest

babel.config.js

${script}

package.json

    "test": "jest",
    "test:watch": "jest --watch",
`}
      />
    </Layout>
  );
}
