import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

const components = {
  code({ inline = false, className = "", children, ...props }): JSX.Element {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export function Content(props: MarkdownProps): JSX.Element {
  return (
    <ReactMarkdown
      components={components}
      plugins={[gfm]}
      children={props.children}
    />
  );
}
