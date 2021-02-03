// functions to load code for rendering

export function getCode(fs, filename: string): string {
  const script = fs.readFileSync(filename, "utf-8");
  return stripComments(script);
}

export function getCodeBlock(fs, filename: string): string {
  return `${"```"}${scriptType(filename)}
${getCode(fs, filename)}${"```"}`;
}

const extensions = {
  js: "javascript",
};

export function scriptType(filename: string) {
  const extension = filename.split(".").pop();
  return extensions[extension] ?? extension;
}

export function stripComments(s: string): string {
  return s.replace(/#[^\n]*\n/g, "");
}
