import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Dental from "./Dental";
import Makeappointment from "./Makeappointment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <Makeappointment></Makeappointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
