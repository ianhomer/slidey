import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    .next/ node_modules/ *.log
    `}
      />
    </Layout>
  );
}
