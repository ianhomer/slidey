import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
  yarn dev http://localhost:3000/</>
`}
      />
    </Layout>
  );
}
