import { Content } from "../components";

export default function Page() {
  return (
    <Content
      children={`
    .next/ node_modules/ *.log
    `}
    />
  );
}
