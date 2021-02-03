import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
Source code for these slides at https://github.com/ianhomer/slidey

Try to do the following

- Set up a layout
- Set up global styles
- props & state
- Server side rendering
- React hooks

Then explore more.

`}
      />
    </Layout>
  );
}
