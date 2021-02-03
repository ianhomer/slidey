import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
Add the following to your package.json

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
