import startCase from "lodash/startCase";
import Head from "next/head";
import { useRouter } from "next/router";
import Prism from "prismjs";
import { useEffect } from "react";

import { Journey } from ".";

interface LayoutProps {
  title?: string;
  children?: any;
}

export function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title = props.title ?? startCase(router.pathname.replace(/[/-]/g, " "));

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Journey />
        <h1>{title}</h1>
        <section>{props.children && <>{props.children}</>}</section>
      </main>
    </>
  );
}
