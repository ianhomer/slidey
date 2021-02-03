import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./.github/workflows/build.yaml"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout title=".github/workflows/build.yaml">
      <div className="smaller">
        <Content children={script} />
      </div>
    </Layout>
  );
}
