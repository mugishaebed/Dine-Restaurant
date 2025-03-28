import { useState } from "react";

interface BookingForm {
  name: string;
  email: string;
  date: string;
  time: string;
  people: number;
}

const Booking = () => {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    date: "",
    time: "",
    people: 4,
  });

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
    <section className="relative bg-white text-black">
      {/* Top Background Section */}
      <div className="relative h-[450px] bg-[#111] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/homepage/ready-bg-desktop@2x.jpg')" }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-['League_Spartan'] font-light">Reservations</h1>
          <p className="text-lg font-light max-w-md mt-4">
            We can’t wait to host you. If you have any special requirements please feel free to call on the phone
            number below. We'll be happy to accommodate you.
          </p>
        </div>
      </div>

      {/* Form Section - floated up and to the right */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-36 mb-20 flex justify-end">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black shadow-xl p-8 w-full max-w-md space-y-6 rounded-sm"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Date Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-500">Pick a date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

          {/* Time Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-500">Pick a time</label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>

          {/* People Selector */}
          <div className="flex items-center justify-between border-t border-b py-4">
            <button
              type="button"
              onClick={() => setForm({ ...form, people: Math.max(1, form.people - 1) })}
              className="text-2xl px-4"
            >
              -
            </button>
            <span className="text-lg font-semibold">{form.people} {form.people === 1 ? "person" : "people"}</span>
            <button
              type="button"
              onClick={() => setForm({ ...form, people: form.people + 1 })}
              className="text-2xl px-4"
            >
              +
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 uppercase tracking-widest hover:bg-[#333]"
          >
            Make Reservation
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#111111] text-white px-6 md:px-24 py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left - dine logo */}
        <h1 className="font-['League_Spartan'] text-[36px] font-bold mb-10 lg:mb-0">
          dine
        </h1>

        {/* Center - info blocks */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mx-auto text-sm tracking-widest font-['League_Spartan'] text-center lg:text-left">
          {/* Address */}
          <div className="space-y-2">
            <p className="uppercase">Marthwaite, Sedbergh</p>
            <p className="uppercase">Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>

          {/* Open Times */}
          <div className="space-y-2">
            <p className="uppercase">Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Booking;
