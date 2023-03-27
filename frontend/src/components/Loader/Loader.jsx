import { motion } from "framer-motion";

const Loader = () => {
  const container = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const circle = {
    display: "block",
    width: "200px",
    height: "200px",
    border: "3px solid #000",
    borderTopColor: "#fff",
    borderRadius: "50%",
  };

  const spinTransition = {
    rotate: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <motion.div style={container}>
      <motion.span
        style={circle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </motion.div>
  );
};

export default Loader;
