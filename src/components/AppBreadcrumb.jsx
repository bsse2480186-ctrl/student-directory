function AppBreadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-light px-4 py-2">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Students</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Directory
        </li>
      </ol>
    </nav>
  );
}

export default AppBreadcrumb;
