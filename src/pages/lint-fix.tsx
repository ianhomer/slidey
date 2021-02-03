import { Content, Layout } from "../components";

export default function Page() {
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
