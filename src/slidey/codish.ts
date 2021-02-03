// functions to load code for rendering

export function getCode(fs, fileName: string): string {
  const script = fs.readFileSync(fileName, "utf-8");
  return stripComments(script);
}

export function stripComments(s: string): string {
  return s.replace(/#[^\n]*\n/g, "");
}
