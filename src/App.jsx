import { useState } from "react";
import DataTable from "./components/DataTable";
import EditDialog from "./components/EditDialog";
import ViewDialog from "./components/ViewDialog";
import { students } from "./data";

function App() {
  const [studentsArray, setStudentsArray] = useState(students);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dep: "",
    phone: "",
    photo: "",
  });

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentEdit, setSelectedStudentEdit] = useState(null);

  // add student input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  // add students
  const addStudent = (e) => {
    e.preventDefault();
    const studentsArrayCopy = studentsArray.map((data) => data);
    studentsArrayCopy.push({ id: studentsArray.length + 1, ...formData });
    setStudentsArray(studentsArrayCopy);
    setFormData({
      name: "",
      email: "",
      dep: "",
      phone: "",
      photo: "",
    });
  };

  // edit student
  const handleEdit = (id) => {
    // eslint-disable-next-line eqeqeq
    const student = studentsArray.find((s) => s.id == id);
    setSelectedStudentEdit(student);
  };

  const editStudent = (e, id, data) => {
    e.preventDefault();

    const updatedArray = studentsArray.map((std) => {
      // eslint-disable-next-line eqeqeq
      if (std.id == id) {
        return { ...data };
      }
      return std;
    });
    setStudentsArray(updatedArray);
    setSelectedStudentEdit(null);
  };

  // view student
  const handleView = (id) => {
    // eslint-disable-next-line eqeqeq
    const student = studentsArray.find((s) => s.id == id);
    setSelectedStudent(student);
  };

  // close view student dialog
  const closeDialog = () => {
    setSelectedStudent(null);
  };

  // close edit student dialog
  const closeDialogEdit = () => {
    setSelectedStudentEdit(null);
  };

  // delete student
  const handleDelete = (id) => {
    console.log(id);
    // eslint-disable-next-line eqeqeq
    const updatedArray = studentsArray.filter((student) => student.id != id);
    setStudentsArray(updatedArray);
  };
  return (
    <div className="App">
      {selectedStudent && (
        <ViewDialog closeDialog={closeDialog} student={selectedStudent} />
      )}
      {selectedStudentEdit && (
        <EditDialog
          editStudent={editStudent}
          closeDialog={closeDialogEdit}
          student={selectedStudentEdit}
        />
      )}
      <div className="container">
        <aside>
          <h2>Add Student</h2>
          <form id="form" onSubmit={addStudent}>
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
        </aside>
        <main>
          <div className="table-header">
            <div>#</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Department</div>
            <div>Photo</div>
            <div>Action</div>
          </div>
          <div className="output">
            {studentsArray.map((student) => (
              <DataTable
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleView={handleView}
                student={student}
                key={student.id}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
