import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface JourneyLinkProps {
  name: string;
}

const StyledLink = styled.a<{ active: boolean }>`
  background-color: ${(active: boolean) => (active ? "#fff" : "auto")};
  color: ${(active: boolean) => (active ? "#000" : "auto")};
  display: block;
  float: left;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  padding: 0em;
  margin-right: 0.5em;
  border: 1px solid #fff;
`;

export function JourneyLink(props: JourneyLinkProps): JSX.Element {
  const router = useRouter();
  const path = "/" + props.name;

  return (
    <Link href={path}>
      <StyledLink active={router.pathname == path}>
        {props.name.charAt(0)}
      </StyledLink>
    </Link>
  );
}
