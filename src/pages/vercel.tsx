import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
- https://vercel.com/
- Start Deploying
- New Project
- Select your GitHub project 
- Configure GitHub App if you need to give permissions
- Import
- Deploy
- Visit URL for your Vercel deployment
- Change code in GitHub to auto-update
    `}
      />
    </Layout>
  );
}
