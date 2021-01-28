import Content from "../components/Content";

export default function Page() {
  return (
    <>
      <Content
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
