import { motion, Variants } from "framer-motion";

export const scaleInVariants: Variants = {
  offscreen: {
    scale: 0,
    rotate: -4,
  },
  onscreen: {
    scale: 1,
    rotate: 0,
    transition: {
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const spinUpVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
    rotateZ: -45,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

export const Animation: React.FC<
  React.PropsWithChildren<{ variants: Variants }>
> = ({ variants, children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      style={{ width: "fit-content" }}
      viewport={{ once: true, amount: 0.1 }}>
      <motion.div variants={variants} style={{ width: "fit-content" }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
