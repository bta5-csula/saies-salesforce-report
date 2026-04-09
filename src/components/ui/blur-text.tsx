import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const BlurText = ({
  text,
  className,
  delayDefault = 0.1, // Initial delay before animation starts
  delayByWord = 0.1, // Stagger delay per word
}: {
  text: string;
  className?: string;
  delayDefault?: number;
  delayByWord?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Simple tokenization to support <br /> injection
  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => {
        if (word === "<br/>") {
          return <br key={i} />;
        }
        return (
          <motion.span
            key={i}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              isInView
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 }
            }
            transition={{
              duration: 0.5,
              delay: delayDefault + i * delayByWord,
            }}
            className="inline-block mr-[0.3em] last:mr-0"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
