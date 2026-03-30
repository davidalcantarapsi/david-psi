"use client";

import Markdown from "markdown-to-jsx";

export default function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="px-1 py-2 md:px-2 md:py-3">
      <Markdown
        options={{
          forceBlock: true,
          overrides: {
            p: {
              props: { className: "mb-6 px-1 leading-relaxed text-neutral-700" },
            },
            h2: {
              props: { className: "mt-8 mb-4 px-1 text-2xl font-bold text-neutral-900" },
            },
            ul: {
              props: { className: "mb-6 list-disc space-y-2 pl-7 pr-1 text-neutral-700" },
            },
            ol: {
              props: { className: "mb-6 list-decimal space-y-2 pl-7 pr-1 text-neutral-700" },
            },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
