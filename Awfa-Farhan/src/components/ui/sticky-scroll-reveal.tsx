"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    extras: string;
    content?: React.ReactNode | any;
    location?: string;
    date?: string;
    points?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const cardLength = content.length;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = latest / viewportHeight / 1.35;
    const cardsBreakpoints = content.map((_, index) => index / cardLength * 2.1);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(scrollPosition - breakpoint);
        if (distance < Math.abs(scrollPosition - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="mt-20 mb-32 mx-[100px] h-full flex justify-end items-center gap-7 relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div>
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="relative flex items-start px-4 mb-32"
            style={{
              opacity: activeCard === index ? 1 : 0.3,
              y: activeCard === index ? 0 : 20,
              transition: "opacity 1s ease-out, transform 0.6s ease-out"
            }}
          >
            <div className="w-3xl mr-20">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                  transition: { duration: 1, ease: "easeOut" }
                }}
                className="my-4"
              >
                <motion.h2
                  className="text-2xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-[18px] text-[#CECECE] leading-loose text-justify max-w-3xl mt-10"
                >
                  {item.description}
                </motion.p>
                <motion.p
                  className="text-base text-[#959595] max-w-2xl mt-6"
                >
                  {item.extras}
                </motion.p>
                {item.points && (
                  <motion.ol
                    className="mt-6 text-base leading-8 text-[#959595] list-disc list-inside"
                  >
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </motion.ol>
                )}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 20,
                transition: { duration: 1, ease: "easeOut" }
              }}
              className="ml-auto my-4 text-base text-end leading-8 text-[#959595]"
            >
              <div>{item.location}</div>
              <div>{item.date}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: -40,
          transition: { duration: 1, ease: "easeOut" }
        }}
        className={cn(
          "hidden lg:block h-1/4 w-80 rounded-md bg-white fixed left-16",
          "top-[45%] transform -translate-y-1/2 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
