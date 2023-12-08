import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "button",
        backgroundRepeat: "no-repeat",
      }}
      className="hero lg:min-h-screen  bg-center"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            temporibus earum deleniti, animi aut corporis fuga aperiam esse
            doloremque asperiores.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
