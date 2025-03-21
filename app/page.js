import React from "react";

export default function HomePage() {
  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center bg-primary text-white">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Bootstrap is Working!</h1>
        <p className="lead">If you see this, Bootstrap is correctly installed.</p>
        <button className="btn btn-light mt-3">Click Me</button>
      </div>
    </div>
  );
}