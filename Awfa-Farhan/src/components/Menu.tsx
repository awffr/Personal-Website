import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function Menu() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-14 items-end gap-4 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 px-3 pb-2 backdrop-blur-md"
      >
        {[...Array(6).keys()].map((i) => (
          <AppIcon mouseX={mouseX} key={i} />
        ))}
      </motion.div>
    </div>
  );
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-xl bg-white/20 shadow-md ring-1 ring-black/5 backdrop-blur-md"
    />
  );
}

export default Menu;
