import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: whitening,
    },
  ];
  return (
    <div className="py-24 ">
      <div className="text-center">
        <h2 className="text-3xl text-primary font-bold">Our Services</h2>
        <h3 className="text-5xl">Services We Provide</h3>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 md:gap-6 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
