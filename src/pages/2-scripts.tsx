import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
${"```"}json
"scripts": {
  "dev": "next dev", 
  "build": "next build", 
  "start": "next start"
},
${"```"}
`}
      />
    </Layout>
  );
}
