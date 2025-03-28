import { useState } from "react";

interface BookingForm {
  name: string;
  email: string;
  date: string;
  time: string;
  people: number;
}

const Booking = () => {
  const [form, setForm] = useState<BookingForm>({ name: "", email: "", date: "", time: "", people: 1 });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "This field is required.";
    if (!form.email) newErrors.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please use a valid email address.";
    if (!form.date) newErrors.date = "This field is incomplete.";
    if (!form.time) newErrors.time = "This field is incomplete.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Reservation successful!");
    }
  };

  return (
    <div className="booking">
      <h2>Reservations</h2>
      <p>We can't wait to host you.</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {errors.name && <p className="error">{errors.name}</p>}

        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        {errors.date && <p className="error">{errors.date}</p>}

        <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
        {errors.time && <p className="error">{errors.time}</p>}

        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default Booking;
