import { motion } from "framer-motion";
import { useState } from "react";

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
export default function EditDialog({ student, closeDialog, editStudent }) {
  const [formData, setFormData] = useState({ ...student });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  return (
    <div className="overlay">
      <motion.div
        variants={dialogVariant}
        initial="initial"
        animate="animate"
        className="dialog"
        onChange={handleInputChange}
      >
        <form id="form" onSubmit={(e) => editStudent(e, student.id, formData)}>
          <input
            value={formData.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            value={formData.email}
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            value={formData.dep}
            name="dep"
            type="text"
            placeholder="Department"
            onChange={handleInputChange}
          />
          <input
            value={formData.phone}
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={handleInputChange}
          />
          <input
            value={formData.photo}
            name="photo"
            type="text"
            placeholder="Photo"
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </form>
        <button onClick={closeDialog}>Close</button>
      </motion.div>
    </div>
  );
}
