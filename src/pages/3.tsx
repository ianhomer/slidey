import { Content } from "../components";

export default function Page() {
  return (
    <Content
      children={`
    touch src/pages/index.tsx
    export default function Page() {
      return <>oh!</>;
    }
`}
    />
  );
}
