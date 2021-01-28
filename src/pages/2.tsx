import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
    "scripts": {
      "dev": "next dev", 
      "build": "next build", 
      "start": "next start"
    }
`}
      />
    </Layout>
  );
}
