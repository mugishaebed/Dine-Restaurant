import { useState } from "react";
import "../styles/EventsTabs.css";

const EventsTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("family");

  return (
    <div className="events-tabs">
      <button onClick={() => setActiveTab("family")}>Family Gatherings</button>
      <button onClick={() => setActiveTab("special")}>Special Events</button>
      <button onClick={() => setActiveTab("social")}>Social Events</button>
      <p>{activeTab === "family" ? "Family content" : activeTab === "special" ? "Special event content" : "Social event content"}</p>
    </div>
  );
};

export default EventsTabs;
