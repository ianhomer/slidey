import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

const components = {
  code({ inline = false, className = "", children, ...props }): JSX.Element {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "sh";
    return !inline && language ? (
      <SyntaxHighlighter
        language={language}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
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
