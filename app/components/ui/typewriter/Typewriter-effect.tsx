"use client";

import { cn } from "@/app/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export type TypewriterWord = {
  text: string;
  className?: string;
};

interface TypewriterProps {
  words: TypewriterWord[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect = ({
                                   words,
                                   className,
                                   cursorClassName,
                                 }: TypewriterProps) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div
      className={cn(
        "text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-left",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <span key={idx} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={index}
                className={cn(
                  "text-gray-900 dark:text-gray-100 opacity-0 hidden",
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>

      {/* blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] min-h-8 md:h-6 lg:h-10 bg-blue-500 dark:bg-blue-400",
          cursorClassName
        )}
      />
    </div>
  );
};
