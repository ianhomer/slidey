import startCase from "lodash/startCase";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { travel } from "../slidey";
import { Journey } from ".";

interface LayoutProps {
  title?: string;
  children?: any;
  transition?: (direction: number) => boolean;
}

const journey: string[] = [
  "",
  "1-initialise",
  "2-scripts",
  "3-first-page",
  "4-dev",
  "5-start-prod",
  "lint",
  "lint-eslint",
  "lint-prettier",
  "lint-fix",
  "assert",
  "git",
  "git-hooks",
  "ci",
  "vercel",
  "markdown",
];

export function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title = props.title ?? startCase(router.pathname.replace(/[/-]/g, " "));

  const transition = (direction: number) => {
    const handled = props.transition && props.transition(direction);
    if (!handled) {
      const nextStep = travel(journey, router.pathname.substring(1), direction);
      router.push("/" + nextStep);
    }
    return true;
  };

  useEffect(() => {
    const onKeyUp = (e: any) => {
      const direction =
        e.key == "ArrowLeft" ? -1 : e.key == "ArrowRight" ? 1 : 0;
      if (direction != 0) {
        transition(direction);
      }
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Journey journey={journey} />
        <h1>{title}</h1>
        <section>{props.children && <>{props.children}</>}</section>
      </main>
    </>
  );
}
