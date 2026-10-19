function ProfileModal({ student, onClose }) {
  if (!student) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{student.name}'s Profile</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Student ID:</strong> {student.id}
              </p>
              <p>
                <strong>Major:</strong> {student.major}
              </p>
              <p>
                <strong>Year:</strong> {student.year}
              </p>
              <p>
                <strong>GPA:</strong> {student.gpa}
              </p>
              <p>
                <strong>Profile Views:</strong> {student.views}
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
