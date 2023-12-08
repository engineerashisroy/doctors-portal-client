import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="py-10"
    >
      <div>
        <h3 className="text-primary text-2xl text-center">Contact Us</h3>
        <h2 className="text-white text-3xl py-3 text-center">
          Stay connected with us
        </h2>
      </div>
      <div className="w-96 mx-auto">
        <form>
          {/* xs */}
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            className="input input-bordered input-md w-full py-3 my-3"
          />
          {/* sm */}
          <input
            type="email"
            placeholder="Enter Your Email"
            name="name"
            className="input input-bordered input-md w-full py-3 my-3 "
          />
          {/* md */}
          <input
            type="tel"
            placeholder="Enter Your Phone Number "
            className="input input-bordered input-md w-full py-3 my-3 "
          />
          {/* lg */}
          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="input input-bordered input-md w-2/4 mx-auto py-3 my-3 bg-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
