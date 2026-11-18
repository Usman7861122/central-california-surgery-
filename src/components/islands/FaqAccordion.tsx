import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Item = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mt-8 divide-y border-y">
      {items.map((it, i) => (
        <div key={it.question} className="py-4">
          <button className="w-full text-left font-medium" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {it.question}
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pt-2 text-sm"
              >
                {it.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
