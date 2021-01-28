import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
      mkdir my-slides
      cd my-slides
      yarn init
      yarn add next react react-dom 
      yarn add --dev typescript yarn add --dev @types/react @types/node
  `}
      />
      <pre>
        <code className="language-html">
          &lt;div&gt;This is HTML&lt;/div&gt;
        </code>
      </pre>
    </Layout>
  );
}
