import styled from "styled-components";

import { JourneyLink } from ".";

const journey: string[] = [
  "",
  "1-initialise",
  "2-scripts",
  "3-first-page",
  "4-dev",
  "5-start-prod",
  "lint",
  "assert",
  "git",
  "git-hooks",
  "ci",
  "vercel",
  "markdown",
];

const Index = styled.div`
  @media (min-width: 800px) {
    display: block;
    position: absolute;
    bottom: 0%;
    z-index: 999;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export function Journey(): JSX.Element {
  return (
    <>
      <Index>
        {journey.map((name, i) => (
          <JourneyLink key={i} name={name} />
        ))}
      </Index>
    </>
  );
}
