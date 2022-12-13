import { motion } from "framer-motion";

const dialogVariant = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};
export default function ViewDialog({ student, closeDialog }) {
  return (
    <div className="overlay">
      <motion.div
        variants={dialogVariant}
        initial="initial"
        animate="animate"
        className="dialog"
      >
        <img src={student.photo} alt="" />
        <p>
          <b>Name: </b> {student.name}{" "}
        </p>
        <p>
          <b>Email: </b> {student.email}{" "}
        </p>
        <p>
          <b>Department: </b> {student.dep}{" "}
        </p>
        <p>
          <b>Phone: </b> {student.phone}{" "}
        </p>
        <button onClick={closeDialog}>Close</button>
      </motion.div>
    </div>
  );
}
