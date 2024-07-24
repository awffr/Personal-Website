import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoBriefcase, IoLogoGithub, IoRocketSharp, IoDocument } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { BiStats } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; 
import { useNavigate } from "react-router-dom"; 

type IconProps = {
  className?: string;
};

function AppIcon({ mouseX, Icon, label, path }: { mouseX: MotionValue, Icon: React.ComponentType<IconProps>, label: string, path: string }) {
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
            className="aspect-square w-10 rounded-lg bg-white/60 shadow-sm ring-1 ring-black/10 backdrop-blur-lg flex items-center justify-center cursor-pointer"
            onClick={() => navigate(path)} 
          >
            <motion.div style={{ scale: iconScale }}>
              <Icon className="w-4 h-4 text-gray-700" />
            </motion.div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Menu() {
  let mouseX = useMotionValue(Infinity);

  const menuItems = [
    { Icon: AiFillHome, label: "Home", path: "/" },
    { Icon: IoBriefcase, label: "Experiences", path: "/experiences" },
    { Icon: IoLogoGithub, label: "Projects", path: "/projects" },
    { Icon: IoRocketSharp, label: "Journey", path: "/journey" },
    { Icon: BiStats, label: "Stats", path: "/stats" },
    { Icon: IoDocument, label: "Blog", path: "/blog" },
    { Icon: BsTelephoneFill, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto h-16 flex items-end gap-2 rounded-lg bg-white/20 shadow-lg ring-1 ring-black/10 p-2 backdrop-blur-sm"
      >
        {menuItems.map((item, i) => (
          <AppIcon mouseX={mouseX} Icon={item.Icon} label={item.label} path={item.path} key={i} />
        ))}
      </motion.div>
    </div>
  );
}

export default Menu;