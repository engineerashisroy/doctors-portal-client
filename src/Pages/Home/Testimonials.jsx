import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewsCard from "./ReviewsCard";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      img: people1,
      location: "USA califonia",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      img: people2,
      location: "USA Boston",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      img: people3,
      location: "USA Newwork",
    },
  ];
  return (
    <section className="py-5">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients Say</h2>
        </div>
        <div>
          <img className="lg:w-48 w-24" src={quote} alt="this is quote" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewsCard key={review._id} review={review}></ReviewsCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
