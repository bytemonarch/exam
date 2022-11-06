import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <p>PAGE NOT FOUND</p>
      <div className="error-page">
        
        <p>Possible you logged into a wrong page</p>
      </div>

      <button onClick={() => navigate("/")}><b>Go Back Home</b></button>
    </div>
  );
};

export default ErrorPage;