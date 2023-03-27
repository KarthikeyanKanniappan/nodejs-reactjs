import React, { useState } from "react";
import AdminRegister from "./AdminRegister";

const SignUp = () => {
  const [settle, setSettle] = useState(true);
  return (
    <div className="  w-100 m-auto text-center">
      <img
        className="rounded-circle"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9tdNRBZtYSqzGX-60T9B1Gr4Eugl_uZKLw&usqp=CAU"
        alt="logo"
        width="100"
        height="100"
      />
      <AdminRegister settle={settle} />
    </div>
  );
};

export default SignUp;
