"use client";

import Markdown from "markdown-to-jsx";

export default function MarkdownContent({ children }: { children: string }) {
  return <Markdown>{children}</Markdown>;
}
