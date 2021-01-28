import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
};

export function Content(props: MarkdownProps): JSX.Element {
  return (
    <ReactMarkdown
      renderers={renderers}
      plugins={[gfm]}
      children={props.children}
    />
  );
}
