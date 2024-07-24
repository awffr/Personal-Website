import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoBriefcase, IoLogoGithub, IoRocketSharp, IoStatsChart, IoDocumentSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; 

type IconProps = {
  className?: string;
};

function AppIcon({ mouseX, Icon, label }: { mouseX: MotionValue, Icon: React.ComponentType<IconProps>, label: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [50, 80, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 });

  let iconScaleSync = useTransform(distance, [-100, 0, 100], [1, 1.5, 1]);
  let iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 100, damping: 12 });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-xl bg-white/20 shadow-md ring-1 ring-black/5 backdrop-blur-md flex items-center justify-center"
          >
            <motion.div style={{ scale: iconScale }}>
              <Icon className="w-5 h-5 text-gray-700" />
            </motion.div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Menu() {
  let mouseX = useMotionValue(Infinity);

  const menuItems = [
    { Icon: AiFillHome, label: "Home" },
    { Icon: IoBriefcase, label: "Experiences" },
    { Icon: IoLogoGithub, label: "Projects" },
    { Icon: IoRocketSharp, label: "Journey" },
    { Icon: IoStatsChart, label: "Stats" },
    { Icon: IoDocumentSharp, label: "Blog" },
    { Icon: BsTelephoneFill, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto h-16 flex items-end gap-2 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-2 backdrop-blur-md"
      >
        {menuItems.map((item, i) => (
          <AppIcon mouseX={mouseX} Icon={item.Icon} label={item.label} key={i} />
        ))}
      </motion.div>
    </div>
  );
}

export default Menu;
