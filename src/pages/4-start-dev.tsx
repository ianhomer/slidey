import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    yarn dev 

visit http://localhost:3000/
`}
      />
    </Layout>
  );
}
