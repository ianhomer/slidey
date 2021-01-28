import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
- Create account https://vercel.com/
- New Project -> select your github project 
  - -> (Configure GitHub App if you need to give permissions)
- Import -> deploy
- Visit your vercel deployment URL.
    `}
      />
    </Layout>
  );
}
