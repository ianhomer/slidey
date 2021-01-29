import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
.gitignore

${"```"}
.next/
node_modules/
*.log
${"```"}
    `}
      />
    </Layout>
  );
}
