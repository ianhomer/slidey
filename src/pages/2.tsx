import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function Page() {
  return (
    <>
      <ReactMarkdown
        plugins={[gfm]}
        children={`
    "scripts": {
      "dev": "next dev", 
      "build": "next build", 
      "start": "next start"
    }
`}
      />
    </>
  );
}
