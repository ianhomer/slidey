import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    yarn -D add @types/jest jest

babel.config.js

package.json

    "test": "jest",
    "test:watch": "jest --watch",
    `}
      />
    </Layout>
  );
}
