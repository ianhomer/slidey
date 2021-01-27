import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function Page() {
  return (
    <>
      <ReactMarkdown
        plugins={[gfm]}
        children={`
    touch src/pages/index.tsx
    export default function Page() {
      return <>oh!</>;
    }
`}
      />
      oh
    </>
  );
}
