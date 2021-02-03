import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    yarn build
    yarn start

visit http://localhost:3000/

look in ${"`"}.next${"`"} folder for build files
`}
      />
    </Layout>
  );
}
