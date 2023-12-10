import { marked } from "marked";
import parse from "html-react-parser";

export const mdToJsx = (
  md: string,
  { replaceP }: { replaceP: boolean } = { replaceP: false }
) => {
  if (!md) {
    console.warn("mdToJsx: md is undefined");
    return null;
  }

  if (replaceP)
    return parse(marked(md).replace(/<p>/g, "").replace(/<\/p>/g, ""));

  return parse(marked(md));
};
