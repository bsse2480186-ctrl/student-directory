function AppFooter() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h6>Links</h6>
            <ul className="list-unstyled small">
              <li>Home</li>
              <li>Computer Science</li>
              <li>Courses</li>
              <li>Reports</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h6>Contact Info</h6>
            <ul className="list-unstyled small">
              <li>Contact Us</li>
              <li>+1 123 456 7890</li>
              <li>info@studentportal.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center small mb-0">
          © 2026 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
