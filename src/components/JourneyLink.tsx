import Link from "next/link";

interface JourneyLinkProps {
  name: string;
}

export function JourneyLink(props: JourneyLinkProps): JSX.Element {
  const path = "/" + props.name;

  return <Link href={path}>{props.name.charAt(0)}</Link>;
}
