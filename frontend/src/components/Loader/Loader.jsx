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
    animation: "spin 1s ease-in-out infinite",
  };

  const animation = {
    spin: {
      transform: "rotate(360deg)",
    },
  };

  return (
    <motion.div style={container}>
      <motion.span style={circle} animate={animation.spin} />
    </motion.div>
  );
};

export default Loader;
