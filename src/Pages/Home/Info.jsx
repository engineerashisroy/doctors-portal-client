import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Operning Hours"
        img={clock}
        bgClass="bg-primary"
      ></InfoCard>
      <InfoCard
        cardTitle="Our Location"
        img={marker}
        bgClass="bg-accent"
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        img={phone}
        bgClass="bg-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
