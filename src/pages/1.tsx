import { Content } from "../components";

export default function Page() {
  return (
    <Content
      children={`
    mkdir my-slides cd my-slides yarn init yarn add next react react-dom yarn
    add --dev typescript yarn add --dev @types/react @types/node
`}
    />
  );
}
