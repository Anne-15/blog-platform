import React, { Suspense } from "react";
import { Login } from "../components/Login";

const page = () => {
  return (
    <div className="container mx-auto mt-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
};

export default page;
