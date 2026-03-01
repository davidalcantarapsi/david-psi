"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
  answerForSchema?: string;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const isOpen = (index: number) => openIndexes.includes(index);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow hover:shadow-md"
        >
          <button
            type="button"
            className="flex w-full items-start justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-neutral-50"
            onClick={() => toggleIndex(index)}
          >
            <span className="pr-4 font-semibold text-neutral-900">
              {faq.question}
            </span>
            <ChevronDown
              size={24}
              className={`shrink-0 text-primary-500 transition-transform ${
                isOpen(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isOpen(index) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-neutral-200 bg-background px-6 py-4 text-neutral-700">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
