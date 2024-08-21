"use client";
import { useEffect, useId, useRef, useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.classList.toggle("overflow-hidden", !!active);

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const cardsMemo = useMemo(() => cards, []);
  const handleCardClick = useCallback(
    (card: (typeof cards)[number]) => {
      setActive(card);
    },
    []
  );

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-lg z-3"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[50]">
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[#08090A] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            ></motion.button>
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
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-[#ffffff] dark:text-neutral-200 text-xl"
                  >
                    {active.title}
                  </motion.h3>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-500 text-xs md:text-sm lg:text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="mx-auto w-full grid grid-cols-4 gap-4 shadow-xl">
        {cardsMemo.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => handleCardClick(card)}
            className="col-span-1 p-10 flex flex-col bg-black hover:bg-[#0e0e0e] border border-[#111111] rounded-xl cursor-pointer hover:shadow-3xl"
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
                  className="font-medium text-neutral-300 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-center md:text-left leading-7 text-[14px] mt-3"
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
    description:
      "Leveraging disruptive tech and computational paradigms to tackle complex problems.",
    title: "Technological Innovation",
    src: "/interest-image-tech.webp",
    content: () => (
      <p>
        I am deeply fascinated by how technology, especially computers, can solve complex human problems through innovative and compelling approaches. The unknown endless potential of technology to transform lives and industries drives my passion and curiosity in this field, especially in Computers.
      </p>
    ),
  },
  {
    description:
      "Scalable, on-demand computing, enhancing agility and cost-efficiency with modern IT infrastructure.",
    title: "Cloud Computing",
    src: "/interest-image-cloud.webp",
    content: () => (
      <p>
        Cloud computing intrigues me with its ability to provide scalable and flexible computing resources. During my internship at Elitery, a company that provides IT transformation solutions, I gained valuable experience in implementing these solutions for clients. I am specifically interested in how cloud solutions can enhance efficiency, reduce costs, and enable businesses to innovate without the constraints of traditional IT infrastructure.
      </p>
    ),
  },
  {
    description:
      "Derivable insights through data mining, end-to-end data analytics, and data visualization.",
    title: "Data Analytics",
    src: "/interest-image-data.webp",
    content: () => (
      <p>
        Data analytics is another area that I find incredibly compelling. The ability to transform raw data into actionable insights that drive strategic decisions is fascinating. During an exchange program at the University of Tokyo, I learned the R language and completed mini projects, which further ignited my passion for data analytics. I am keen on utilizing advanced analytical techniques to uncover patterns, identify opportunities, and solve complex problems in various domains.
      </p>
    ),
  },
  {
    description:
      "Autonomous system learning, optimizing predictive analytics and process automation.",
    title: "Machine Learning",
    src: "/interest-image-ml.webp",
    content: () => (
      <p>
        Machine learning captivates me with its potential to create intelligent systems that can learn and adapt over time. For my thesis, I  applied deep learning methods to perform multiclass segmentation for Glioblastoma Subregion in the medical field. Right now, I am enthusiastic about exploring how machine learning, particularly in Oil & Gas industry, can be leveraged to analyze data, predict trends, and automate processes, ultimately leading to smarter and more efficient decision.
      </p>
    ),
  },
];
