"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      document.body.classList.add('overflow-hidden'); // Add overflow hidden to prevent scrolling
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove('overflow-hidden'); // Remove overflow hidden
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove('overflow-hidden'); // Clean up overflow hidden
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md h-full w-full z-2" // Apply backdrop blur
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.02,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[#08090A] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-[#08090A] sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-[#ffffff] dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-500 text-xs md:text-sm lg:text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-10 flex flex-col bg-[#040506] hover:bg-[#0e0e0e] rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="mt-6 flex justify-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-300 text-center md:text-left text-[18px]"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-center md:text-left text-base mt-3"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}


const cards = [
  {
    description: "Leveraging disruptive tech and computational paradigms to tackle complex problems.",
    title: "Technological Innovation",
    src: "/interest-image-tech.webp",
    ctaText: "",
    ctaLink: "",
    content: () => {
      return (
        <p>
          I am fascinated by disruptive technologies and how they tackle complex challenges using advanced algorithms and computational paradigms. Innovations like AI, quantum computing, and blockchain drive my enthusiasm for transformative solutions.
        </p>
      );
    },
  },
  {
    description: "Scalable, on-demand computing, enhancing agility and cost-efficiency with modern IT infrastructure.",
    title: "Cloud Computing",
    src: "/interest-image-cloud.webp",
    ctaText: "",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Cloud computing enables scalable, on-demand resources, optimizing agility and cost-efficiency. My experience with AWS and Azure showcases how dynamic provisioning and containerization streamline operations and foster innovation.
        </p>
      );
    },
  },
  {
    description: "Actionable insights through data mining, end-to-end analytics, and visualization.",
    title: "Data Analytics",
    src: "/interest-image-data.webp",
    ctaText: "",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Data analytics involves using big data frameworks and statistical models to derive insights. Tools like R and Python for data mining and predictive analytics help transform raw data into actionable strategies.
        </p>
      );
    },
  },
  {
    description: "Autonomous system learning, optimizing predictive analytics and process automation.",
    title: "Machine Learning",
    src: "/interest-image-ml.webp",
    ctaText: "",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Machine learning leverages neural networks for autonomous learning and optimization. My work with deep learning and reinforcement learning enhances predictive analytics and process automation.
        </p>
      );
    },
  },
];


