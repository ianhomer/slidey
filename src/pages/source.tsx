import { Content, Layout } from "../components";

export default function Page() {
  return (
    <Layout>
      <Content
        children={`
Source code for these slides at https://github.com/ianhomer/slidey

Exercise:

- Set up a reusable layout
- Set up global styles
- Experiment with props & state
- Experiment with react hooks
- Try server side rendering

Then ... impress me ...

**☞ Award for the best slide transition ☜**

⌘ ☻☃︎☻☼☻🂡☻❖☻✼☻❀☻ ⌘

Read ahead for linting, **CI** - GitHub actions and **CD** - deployment with Vercel.
`}
      />
    </Layout>
  );
}
