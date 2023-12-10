import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  //   console.log(treatment);
  const { _id, name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const cumtomarName = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log(_id, name, slot, cumtomarName, email, phone);
    setTreatment(null);
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label
            htmlFor="my_modal_6"
            className="btn btn-sm btn-primary btn-ghost absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="font-bold text-lg text-primary pt-3 pb-3">
            Booking For : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary input input-bordered w-full max-w-xs"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
