import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
create src/pages/index.tsx

    export default function Page() {
      return <>oh!</>;
    }
`}
      />
    </Layout>
  );
}
