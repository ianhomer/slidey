import styled from "styled-components";

import { JourneyLink } from ".";

interface JourneyProps {
  journey: string[];
}

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

export function Journey(props: JourneyProps): JSX.Element {
  return (
    <>
      <Index>
        {props.journey.map((name, i) => (
          <JourneyLink key={i} name={name} />
        ))}
      </Index>
    </>
  );
}
