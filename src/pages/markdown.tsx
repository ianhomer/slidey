import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    yarn add react-markdown remark-gfm
`}
      />
    </Layout>
  );
}
