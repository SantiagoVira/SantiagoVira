import { Box, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

export default function SlideUpAnimation() {
  // Placeholder text data, as if from API
  const placeholderText = [
    { text: "Framer Motion" },
    {
      text: "Animating responsive text!",
    },
  ];

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
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {placeholderText.map((item, index) => (
        <Text overflow="hidden" whiteSpace="nowrap" key={index}>
          <motion.span
            style={{ display: "inline-block" }}
            variants={lineVariants}>
            {item.text.split(" ").map((word) => word + " ")}
          </motion.span>
        </Text>
      ))}
    </motion.div>
  );
}
