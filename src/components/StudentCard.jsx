function StudentCard({ student, onViewProfile }) {
  return (
    <div className="col-sm-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm text-center">
        <div className="card-body d-flex flex-column">
          <div
            className="rounded-circle bg-secondary-subtle mx-auto mb-3 d-flex align-items-center justify-content-center"
            style={{ width: "72px", height: "72px" }}
          >
            <i className="bi bi-person-fill fs-2 text-secondary"></i>
          </div>
          <h5 className="card-title mb-1">{student.name}</h5>
          <p className="text-muted small mb-1">ID: {student.id}</p>
          <p className="text-muted small mb-1">Major: {student.major}</p>
          <p className="text-muted small mb-1">Year: {student.year}</p>
          <p className="text-muted small mb-3">GPA: {student.gpa}</p>

          <div className="mt-auto">
            <button
              className="btn btn-outline-primary btn-sm me-2"
              onClick={() => onViewProfile(student.id)}
            >
              View Profile
            </button>
            <span className="badge text-bg-light border">
              Views: {student.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
