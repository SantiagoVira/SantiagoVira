import { Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";

const SlideUpAnimation: React.FC<{ text: string[] }> = ({ text }) => {
  const containerVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ width: "80%" }}>
      {text.map((item, index) => (
        <Text overflow="hidden" key={index} fontSize="1.3rem">
          <motion.span
            style={{ display: "inline-block" }}
            variants={lineVariants}>
            {item.split(" ").map((word) => word + " ")}
          </motion.span>
        </Text>
      ))}
    </motion.div>
  );
};

// https://codesandbox.io/s/z7udk?file=/src/App.js:0-1145

export default SlideUpAnimation;
