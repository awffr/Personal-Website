import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  IoBriefcase,
  IoLogoGithub,
  IoRocketSharp,
  IoDocument,
} from "react-icons/io5";
import { BiStats } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
// import { BsTelephoneFill } from "react-icons/bs";

type IconProps = {
  className?: string;
};

function AppIcon({
  mouseX,
  Icon,
  label,
  path,
  delay,
  isAnimating,
}: {
  mouseX: MotionValue;
  Icon: React.ComponentType<IconProps>;
  label: string;
  path: string;
  delay: number;
  isAnimating: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [50, 80, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 });

  let iconScaleSync = useTransform(distance, [-100, 0, 100], [1, 1.7, 1]);
  let iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 100, damping: 12 });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            ref={ref}
            style={{ width }}
            initial={{ opacity: 0, y: 50 }}
            animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="aspect-square w-10 rounded-md bg-[#08090A]/80 shadow-lg ring-1 ring-white/5 backdrop-blur-lg flex items-center justify-center cursor-pointer"
            onClick={() => navigate(path)}
          >
            <motion.div style={{ scale: iconScale }}>
              <Icon className="w-4 h-4 text-gray-200 hover:text-white" />
            </motion.div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-white">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Menu() {
  let mouseX = useMotionValue(Infinity);
  const location = useLocation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(false);
  }, [location]);

  const menuItems = [
    { Icon: AiFillHome, label: "Home", path: "/home" },
    { Icon: IoBriefcase, label: "Experiences", path: "/experiences" },
    { Icon: IoLogoGithub, label: "Projects", path: "/projects" },
    { Icon: IoRocketSharp, label: "Journey", path: "/journey" },
    { Icon: BiStats, label: "Stats", path: "/stats" },
    { Icon: IoDocument, label: "Blog", path: "/blog" },
    // { Icon: BsTelephoneFill, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto h-16 flex items-end gap-2 rounded-md bg-[#171717]/70 shadow-xl ring-1 ring-white/10 p-2 backdrop-blur-xl"
      >
        {menuItems.map((item, i) => (
          <AppIcon
            key={i}
            mouseX={mouseX}
            Icon={item.Icon}
            label={item.label}
            path={item.path}
            delay={hasAnimated ? 0 : i * 0.1}
            isAnimating={hasAnimated}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Menu;
