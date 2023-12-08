import React from "react";

const ReviewsCard = (props) => {
  const { name, img, location } = props.review;

  return (
    <div className="card lg:w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className="flex items-center">
          <div>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="images" />
              </div>
            </div>
          </div>
          <div className="ml-5">
            <h3 className="text-primary text-2xl">{name}</h3>
            <h4>{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
