import { motion } from "framer-motion";

const Loader = () => {
  const container = {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const dot = {
    display: "inline-block",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    margin: "0 10px",
    opacity: 0.3,
    backgroundColor: "#c8102e",
  };

  const dotVariants = (delay) => ({
    animate: {
      y: ["0%", "-100%", "0%"],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
        delay: delay,
      },
    },
  });

  return (
    <motion.div style={container}>
      <motion.span
        style={dot}
        variants={dotVariants(0)}
        animate="animate"
      />
      <motion.span
        style={dot}
        variants={dotVariants(0.2)}
        animate="animate"
      />
      <motion.span
        style={dot}
        variants={dotVariants(0.4)}
        animate="animate"
      />
    </motion.div>
  );
};

export default Loader;
