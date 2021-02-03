import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
Source code for these slides at https://github.com/ianhomer/slidey

Dojo:

- Set up a layout
- Set up global styles
- Experiment with props & state
- Experiment with react hooks
- Try server side rendering
- Create the best slide transition
`}
      />
    </Layout>
  );
}
