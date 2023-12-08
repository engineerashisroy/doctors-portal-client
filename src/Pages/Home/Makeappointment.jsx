import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Makeappointment = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="flex items-center "
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-200px]" src={doctor} alt="doctors" />
      </div>
      <div className="flex-1">
        <h3 className="text-primary text-2xl">Appointment</h3>
        <h2 className="text-white text-3xl py-3">Make an Appointment</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          suscipit labore, fugit voluptatibus iure adipisci nam eligendi
          similique consequuntur tempora.
        </p>
        <PrimaryButton>Get Start</PrimaryButton>
      </div>
    </div>
  );
};

export default Makeappointment;
