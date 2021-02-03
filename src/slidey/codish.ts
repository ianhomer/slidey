// functions to load code for rendering

export function getCode(fs, fileName: string): string {
  const script = fs.readFileSync(fileName, "utf-8");
  return stripComments(script);
}

export function stripComments(string: s): string {
  return string.replace(/#[^\n]*\n/g, "");
}
