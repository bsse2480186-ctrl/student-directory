function AppAlert({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="container-fluid px-4">
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        {message}
        <button
          type="button"
          className="btn-close"
          onClick={onDismiss}
        ></button>
      </div>
    </div>
  );
}

export default AppAlert;
