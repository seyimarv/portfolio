import { motion } from "framer-motion";
import Typography from "../../theme/Typography";

const WavyText = ({ text, delay = 0, duration = 0.05, replay, ...props }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
  
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
    
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden", color: "#EEEEEE", fontSize:"8rem" }}
      variants={container}
      initial="hidden"
      animate={"visible"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
