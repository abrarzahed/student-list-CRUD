export default function DataTable({
  student,
  handleView,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="table-row">
      <div>{student.id}</div>
      <div>{student.name}</div>
      <div>{student.email}</div>
      <div>{student.phone}</div>
      <div>{student.dep}</div>
      <div className="photo">
        <img src={student.photo} alt="" />
      </div>
      <div className="action">
        <span
          className="material-symbols-outlined"
          id="view"
          onClick={() => handleView(student.id)}
        >
          visibility
        </span>
        <span
          className="material-symbols-outlined"
          id="edit"
          onClick={() => handleEdit(student.id)}
        >
          edit
        </span>
        <span
          className="material-symbols-outlined"
          id="delete"
          onClick={() => handleDelete(student.id)}
        >
          delete
        </span>
      </div>
    </div>
  );
}
