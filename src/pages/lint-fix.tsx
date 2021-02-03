import { Content, Layout } from "../components";

export default function Page({ script }) {
  return (
    <Layout>
      <Content
        children={`

    yarn lint
    yarn lint:fix
`}
      />
    </Layout>
  );
}
