import { useState } from "react";
import "../styles/Booking.css";

const Booking = () => {
  const [people, setPeople] = useState(4);

  return (
    <div className="booking-page">
      {/* Header Section */}
      <section className="booking-hero">
        <h1>Reservations</h1>
        <p>
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-wrapper">
        <div className="booking-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />

          <div className="date-time">
            <div>
              <label>Pick a date</label>
              <div className="date-inputs">
                <input type="text" placeholder="MM" maxLength={2} />
                <input type="text" placeholder="DD" maxLength={2} />
                <input type="text" placeholder="YYYY" maxLength={4} />
              </div>
            </div>
            <div>
              <label>Pick a time</label>
              <div className="time-inputs">
                <input type="text" placeholder="09" maxLength={2} />
                <input type="text" placeholder="00" maxLength={2} />
                <select>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="people-counter">
            <button onClick={() => setPeople(people > 1 ? people - 1 : 1)}>-</button>
            <span>{people} people</span>
            <button onClick={() => setPeople(people + 1)}>+</button>
          </div>

          <button className="reserve-button">Make Reservation</button>
        </div>
      </section>
    </div>
  );
};

export default Booking;
