import { useState } from "react";
import AppNavbar from "./components/AppNavbar";
import AppBreadcrumb from "./components/AppBreadcrumb";
import StudentCard from "./components/StudentCard";
import AppPagination from "./components/AppPagination";
import AppAlert from "./components/AppAlert";
import ProfileModal from "./components/ProfileModal";
import AppFooter from "./components/AppFooter";

const initialStudents = [
  { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, views: 0 },
  { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 3.8, views: 0 },
  { id: 103, name: "Grant Doe", major: "Computer Science", year: 2, gpa: 3.8, views: 0 },
  { id: 104, name: "Amy Doe", major: "Computer Science", year: 2, gpa: 3.8, views: 0 },
  { id: 105, name: "Liam Smith", major: "Information Technology", year: 3, gpa: 3.5, views: 0 },
  { id: 106, name: "Olivia Khan", major: "Software Engineering", year: 1, gpa: 3.9, views: 0 },
  { id: 107, name: "Noah Ahmed", major: "Cybersecurity", year: 4, gpa: 3.6, views: 0 },
  { id: 108, name: "Emma Raza", major: "Computer Science", year: 2, gpa: 3.7, views: 0 },
  { id: 109, name: "Ali Hassan", major: "Data Science", year: 3, gpa: 3.4, views: 0 },
  { id: 110, name: "Sara Malik", major: "Software Engineering", year: 2, gpa: 3.85, views: 0 },
  { id: 111, name: "Zain Qureshi", major: "Information Technology", year: 1, gpa: 3.3, views: 0 },
  { id: 112, name: "Hira Shah", major: "Cybersecurity", year: 4, gpa: 3.95, views: 0 },
];

const STUDENTS_PER_PAGE = 4;

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;
  const visibleStudents = students.slice(startIndex, startIndex + STUDENTS_PER_PAGE);

  const handleViewProfile = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, views: s.views + 1 } : s))
    );
    setSelectedStudentId(id);
    setAlertMessage("Profile view recorded.");
  };

  const handleCloseModal = () => {
    setSelectedStudentId(null);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const selectedStudent = students.find((s) => s.id === selectedStudentId);

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <AppBreadcrumb />

      <main className="flex-grow-1">
        <div className="container-fluid px-4 pt-4 d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Page Header</h2>
          <button className="btn btn-dark">Add New Student</button>
        </div>

        <AppAlert message={alertMessage} onDismiss={() => setAlertMessage("")} />

        <div className="container-fluid px-4 pt-3">
          <div className="row">
            {visibleStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        </div>

        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <AppFooter />

      <ProfileModal student={selectedStudent} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
