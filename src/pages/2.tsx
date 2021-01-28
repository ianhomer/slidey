import { Content } from "../components";

export default function Page() {
  return (
    <Content
      children={`
    "scripts": {
      "dev": "next dev", 
      "build": "next build", 
      "start": "next start"
    }
`}
    />
  );
}
