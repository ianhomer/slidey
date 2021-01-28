import { JourneyLink } from ".";

const journey: string[] = ["", "1", "2", "3", "4", "markdown", "git", "lint"];

export function Journey(): JSX.Element {
  return (
    <>
      <div>
        {journey.map((name, i) => (
          <JourneyLink key={i} name={name} />
        ))}
      </div>
    </>
  );
}
