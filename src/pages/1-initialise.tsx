import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
${"```"}sh
mkdir my-slides
cd my-slides
yarn init
yarn add next react react-dom 
yarn add --dev typescript @types/react @types/node
${"```"}
  `}
      />
    </Layout>
  );
}
