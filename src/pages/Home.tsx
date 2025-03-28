import { Link } from "react-router-dom";
import { useState } from "react";


type EventKey = 'family' | 'special' | 'social';

const Home = () => {
  const [activeEvent, setActiveEvent] = useState<EventKey>('family');

  const eventData: Record<EventKey, {
    title: string;
    image: string;
    description: string;
  }> = {
    family: {
      title: 'Family Gathering',
      image: '/images/homepage/family-gathering-desktop.jpg',
      description:
        'We love catering for entire families. Please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    },
    special: {
      title: 'Special Events',
      image: '/images/homepage/special-events-desktop@2x.jpg',
      description:
        'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    },
    social: {
      title: 'Social Events',
      image: '/images/homepage/social-events-desktop@2x.jpg',
      description:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    },
  };


  return (
    <div className="p-0 m-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-[#fffefd] min-h-[920px] lg:min-h-[820px] flex flex-col lg:block bg-[#111111]">
        {/* Black Background (left side for large screens only) */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-full lg:w-[35%] bg-black z-10"></div>

        {/* Hero Image */}
        <div className="relative w-full h-[100vh] lg:absolute lg:inset-0 lg:w-full lg:h-full overflow-hidden flex items-center justify-center lg:items-end lg:justify-end">
          <picture className="absolute w-full h-full z-0">
            <source
              media="(min-width: 1024px)"
              srcSet="/images/homepage/hero-bg-desktop@2x.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/hero-bg-tablet@2x.jpg"
            />
            <img
              src="/images/homepage/hero-bg-mobile@2x.jpg"
              alt="Delicious pasta dish"
              className="w-full h-full object-cover contrast-95 object-center md:object-[center_top]"
            />
          </picture>
        </div>

        {/* Text Content */}
        <div className="absolute h-full w-full top-70 md:top-96 lg:top-0 bg-[#111111] lg:bg-transparent lg:relative z-10 md:px-20 pb-16 md:pb-20 flex flex-col gap-6 items-center lg:items-start lg:px-36 lg:py-16 lg:w-[80%]">
          <h1 className="font-['League_Spartan'] text-[48px] font-bold mb-5 lg:mb-10 leading-[48px] text-center lg:text-left">
            dine
          </h1>

          <h1 className="text-[40px] md:text-[48px] lg:text-[80px] md:leading-[64px] lg:leading-[80px] font-light md:tracking-[-0.6px] lg:tracking-[-0.03em] flex flex-col font-['League_Spartan'] text-center lg:text-left">
            <span>Exquisite dining</span>
            <span>since 1989</span>
          </h1>

          <p className="font-['League_Spartan'] text-[16px] lg:text-[20px] leading-[30px] font-light w-[320px] md:w-[450px] lg:max-w-[50%] lg:text-left text-center align-top">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>

          <Link to="/booking">
            <button className="cursor-pointer mt-6 px-8 py-4 uppercase border border-white text-[17px] tracking-[0.25em] font-['League_Spartan'] leading-[28px] hover:bg-white hover:text-[#111111] duration-200">
              Book a Table
            </button>
          </Link>
        </div>
      </section>
      {/* Menu Features */}
      <section className="relative space-y-14 px-6 sm:px-10 lg:px-36 bg-white z-10">
        {/* Section 1 */}
        <div className="relative flex flex-col lg:flex-row items-center gap-y-20 lg:gap-x-36 lg:h-[700px]">
          {/* Background Accent */}
          <div className="hidden md:block absolute left-[-560px] lg:left-[-160px] top-56 w-[895px] h-[320px] bg-[#5c6779]/10 rounded-tr-[90px] z-0"></div>

          {/* Image */}
          <div className="overflow-hidden shadow-2xl z-10 -translate-y-20">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/images/homepage/enjoyable-place-desktop.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/homepage/enjoyable-place-tablet.jpg"
              />
              <img
                src="/images/homepage/enjoyable-place-mobile.jpg"
                alt="Nature view"
                className="w-full object-cover"
              />
            </picture>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center lg:items-start md:w-[445px] space-y-6 z-20 text-[#111] -translate-y-16">
            <div className="flex items-center space-x-2 mb-[55px]">
              <div className="w-[5px] h-[5px] border-[#9e7f66] border rounded-full"></div>
              <div className="w-[56px] h-[1px] bg-[#9e7f66]"></div>
            </div>
            <h2 className="font-bold text-[32px] md:text-[48px] font-['League_Spartan'] leading-tight text-center lg:text-left flex flex-col">
              <span>Enjoyable place</span>
              <span>for all the family</span>
            </h2>
            <p className="font-['League_Spartan'] font-light text-[16px] md:text-[20px] max-w-[440px] text-center lg:text-left">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center gap-y-20 lg:gap-x-36 lg:h-[700px] space-y-[56px]">
          {/* Background Accent */}
          <div className="hidden md:block absolute right-[-300px] lg:right-[-142px] top-8/12 lg:top-96 w-[83%] h-[320px] bg-[#5c6779]/10 rounded-tl-[90px]"></div>

          {/* Image */}
          <div className="relative lg:w-[540px] h-[300px] lg:h-[720px] shadow-2xl lg:translate-y-20">
            {/* Accent Lines */}
            <div className="hidden md:absolute top-[70%] lg:top-[43%] -right-20 -translate-y-1/2 z-10 md:flex md:flex-col space-y-[8px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-[160px] h-[4px] bg-[#9E7F66]" />
              ))}
            </div>
            <div className="overflow-hidden shadow-2xl z-10">
              <picture className="relative">
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/homepage/locally-sourced-desktop.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/homepage/locally-sourced-tablet.jpg"
                />
                <img
                  src="/images/homepage/locally-sourced-mobile.jpg"
                  alt="Nature view"
                  className="w-full object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-[445px] flex flex-col items-center lg:items-start space-y-6 z-10 text-[#111]">
            <div className="flex items-center space-x-2 mb-[48px]">
              <div className="w-[5px] h-[5px] border-[#9e7f66] border rounded-full"></div>
              <div className="w-[56px] h-[1px] bg-[#9e7f66]"></div>
            </div>
            <h2 className="font-bold text-[32px] md:text-[48px] font-['League_Spartan'] leading-tight text-center lg:text-left flex flex-col">
              <span>The most locally</span>
              <span>sourced food</span>
            </h2>
            <p className="font-['League_Spartan'] font-light text-[16px] md:text-[20px] max-w-[440px] lg:max-w-[420px] text-center lg:text-left">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-black text-white flex flex-col md:flex-row px-4 md:px-32 z-20 items-center md:h-[970px] lg:h-[820px] md:mt-[85px] lg:mt-0">
        <div className="flex flex-col h-fit w-fit items-center lg:items-top gap-2 lg:gap-[180px] lg:flex-row">
          <div className="space-y-6 flex flex-col items-center lg:items-start md:mt-20 mt-24">
            <div className="flex items-center space-x-2 mb-20">
              <div className="w-[5px] h-[5px] border-[#9e7f66]/70 border rounded-full"></div>
              <div className="w-[56px] h-[1px] bg-[#9e7f66]/50"></div>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold font-['League_Spartan'] flex flex-col leading-none items-center lg:items-start text-center">
              <span>A few highlights from</span>
              <span>our menu</span>
            </h2>
            <p className="text-[16px] md:text-[20px] font-light font-['League_Spartan'] max-w-md text-center lg:text-start">
              We cater for all dietary requirements, but here's a glimpse at
              some of our diner's favourites. Our menu is revamped every season.
            </p>
          </div>
          <div className="md:w-[573px] lg:w-[540px] space-y-6 md:h-[386px] lg:h-[96px] mt-20 lg:mt-10">
            <div className="flex flex-col md:flex-row items-center gap-[200px] md:gap-12 justify-center">
              <div className="w-full md:w-[160px] h-[96px] relative">
                <div className="hidden md:block absolute top-3 w-full h-[1px] bg-[#9e7f66] -right-[32px]"></div>
                <img
                  className="w-full object-cover relative"
                  src="/images/homepage/salmon-desktop-tablet@2x.jpg"
                  alt="Seared Salmon Fillet"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-[20px] font-semibold font-['League_Spartan'] mb-2">
                  Seared Salmon Fillet
                </h3>
                <p className="text-[16px] font-light font-['League_Spartan'] max-w-sm text-center md:text-start">
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
            </div>
            <hr className="border-[#ffffff]/35 mt-8 relative" />
            <div className="flex flex-col md:flex-row items-center gap-[200px] md:gap-12 justify-center">
              <div className="w-full md:w-[160px] h-[96px] relative">
                <div className="hidden md:block absolute top-3 w-full h-[1px] bg-[#9e7f66] -right-[32px]"></div>
                <img
                  className="w-full object-cover relative"
                  src="/images/homepage/beef-desktop-tablet@2x.jpg"
                  alt="Rosemary Filet Mignon"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-[20px] font-semibold font-['League_Spartan'] mb-2">
                  Rosemary Filet Mignon
                </h3>
                <p className="text-[16px] font-light font-['League_Spartan'] max-w-sm text-center md:text-start">
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </div>
            <hr className="border-[#ffffff]/35 mt-8" />
            <div className="flex flex-col md:flex-row items-center gap-[200px] md:gap-12 justify-center">
              <div className="w-full md:w-[160px] h-[96px] relative">
                <div className="hidden md:block absolute top-3 w-full h-[1px] bg-[#9e7f66] -right-[32px]"></div>
                <img
                  className="w-full object-cover relative"
                  src="/images/homepage/chocolate-desktop-tablet@2x.jpg"
                  alt="Summer Fruit Chocolate Mousse"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-[20px] font-semibold font-['League_Spartan'] mb-2">
                  Summer Fruit Chocolate Mousse
                </h3>
                <p className="text-[16px] font-light font-['League_Spartan'] text-center md:text-start max-w-sm">
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Dynamic Tabs */}
      <section className="px-6 md:px-24 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            className="w-full md:w-1/2 object-cover shadow-lg"
            src={eventData[activeEvent].image}
            alt={eventData[activeEvent].title}
          />

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-['League_Spartan'] text-[#111]">
              {eventData[activeEvent].title}
            </h2>
            <p className="text-sm font-light font-['League_Spartan'] max-w-md">
              {eventData[activeEvent].description}
            </p>
            <Link to="/booking">
              <button className="bg-black text-white px-6 py-3 uppercase text-sm tracking-wider font-['League_Spartan'] hover:bg-[#333] transition">
                Book a Table
              </button>
            </Link>

            <div className="mt-10 space-y-2">
              {Object.keys(eventData).map((key) => (
                <div
                  key={key}
                  onClick={() => setActiveEvent(key as EventKey)}

                  className={`uppercase text-sm tracking-widest font-['League_Spartan'] cursor-pointer ${
                    activeEvent === key
                      ? "font-bold text-black border-l-[2px] border-[#9e7f66] pl-4"
                      : "text-gray-400 pl-4 hover:text-black"
                  }`}
                >
                  {eventData[key as EventKey].title}

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Call to action */}
      <section className="relative py-20 px-6 md:px-24 text-white">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/images/homepage/ready-bg-desktop@2x.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-70"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left - Heading */}
    <h2 className="text-3xl md:text-4xl font-bold font-['League_Spartan'] text-center md:text-left">
      Ready to make a reservation?
    </h2>

    {/* Right - Button */}
    <button className="px-8 py-4 uppercase text-sm tracking-widest font-['League_Spartan'] border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300">
      Book a Table
    </button>
  </div>
</section>



{/* Footer */}
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

    </div>

  );
};

export default Home;
