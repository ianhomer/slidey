import fs from "fs";

import { Content, Layout } from "../components";
import { getCodeBlock } from "../slidey";

export async function getStaticProps() {
  return {
    props: {
      script: getCodeBlock(fs, "./.eslintrc.js"),
    },
  };
}

export default function Page({ script }) {
  return (
    <Layout title=".eslintrc.js">
      <div className="smaller">
        <Content children={script} />
      </div>
    </Layout>
  );
}
