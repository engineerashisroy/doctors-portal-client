import React from "react";
import Treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Dental = () => {
  return (
    <div className="hero mx-12  mt-20 mb-40 ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started!</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Dental;
