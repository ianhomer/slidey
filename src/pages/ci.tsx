import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
add .github/workflows/build.yaml and update.yaml
    `}
      />
    </Layout>
  );
}
