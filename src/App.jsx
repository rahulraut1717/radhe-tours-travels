
import { useState } from "react";
import "./App.css";

const vehicles = [
  {
    name: "Swift Dzire",
    category: "Comfortable Sedan Travel",
    seats: "4 Seats",
    image: "/dzire.jpeg",
  },
  {
    name: "Force Traveller",
    category: "Family & Group Trips",
    seats: "9–17 Seats",
    image: "/traveller.jpeg",
  },
  {
    name: "Force Urbania",
    category: "Premium Group Travel",
    seats: "10–17 Seats",
    image: "/urbania.jpeg",
  },
  {
    name: "Innova Crysta",
    category: "Premium Family Travel",
    seats: "6–7 Seats",
    image: "/crysta.webp",
  },
];

const WHATSAPP_NUMBER = "917499739835";

const initialForm = {
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  date: "",
  passengers: "4",
  vehicle: "Any Available Vehicle",
  tripType: "One Way",
  message: "",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      setStatus("कृपया 10 अंकी मोबाइल नंबर टाका.");
      return;
    }

    const bookingMessage = `
RADHE TOURS AND TRAVELS - BOOKING REQUEST

Name: ${form.name}
Mobile: ${form.phone}
Pickup: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date}
Passengers: ${form.passengers}
Vehicle: ${form.vehicle}
Trip Type: ${form.tripType}
Additional Requirements: ${form.message || "None"}

Please confirm vehicle availability and the total fare.
    `.trim();

    if (WHATSAPP_NUMBER === "91XXXXXXXXXX") {
      setStatus(
        "WhatsApp सुरू करण्यासाठी App.jsx मध्ये तुमचा व्यवसायाचा WhatsApp नंबर सेट करा."
      );
      return;
    }

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(bookingMessage);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus(
      "WhatsApp मध्ये मेसेज तयार झाला आहे. बुकिंग विनंती पाठवण्यासाठी Send दाबा."
    );
  }

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">R</span>
          <span>
            <strong>RADHE</strong>
            <small>TOURS & TRAVELS</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#fleet">Our Fleet</a>
          <a href="#about">About Us</a>
          <a href="#booking">Contact</a>
        </nav>

        <a className="nav-button" href="#booking">
          Book Your Trip
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay">
            <span className="eyebrow">
              YOUR JOURNEY, OUR PRIORITY
            </span>

            <h1>
              Explore More.
              <br />
              <span>Travel Together.</span>
            </h1>

            <p>
              Comfortable rides, memorable journeys and reliable
              travel services for families, friends and groups.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#booking">
                Plan Your Trip →
              </a>

              <a className="outline-button" href="#fleet">
                Explore Our Fleet
              </a>
            </div>

            
<div className="hero-features">
  <div className="hero-feature-card">
    <span className="feature-icon">👨‍👩‍👧‍👦</span>
    <div>
      <strong>Family Trips</strong>
      <small>Comfortable & Safe</small>
    </div>
  </div>

  <div className="hero-feature-card">
    <span className="feature-icon">🚐</span>
    <div>
      <strong>Group Travel</strong>
      <small>For Friends & Groups</small>
    </div>
  </div>

  <div className="hero-feature-card">
    <span className="feature-icon">📍</span>
    <div>
      <strong>Outstation Trips</strong>
      <small>Explore New Destinations</small>
    </div>
  </div>
</div>

          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="section-heading">
            <span className="eyebrow">START YOUR JOURNEY</span>
            <h2>Book Your Ride</h2>
            <p>Share your trip details to request a booking.</p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Full Name *
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Mobile Number *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  required
                />
              </label>

              <label>
                Pickup Location *
                <input
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="Where should we pick you up?"
                  required
                />
              </label>

              <label>
                Destination *
                <input
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Where do you want to go?"
                  required
                />
              </label>

              <label>
                Travel Date *
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toLocaleDateString("en-CA")}
                  required
                />
              </label>

              <label>
                Number of Passengers
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                >
                  {Array.from(
                    { length: 30 },
                    (_, index) => index + 1
                  ).map((number) => (
                    <option key={number} value={number}>
                      {number} Passenger{number > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Select Vehicle
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                >
                  <option>Any Available Vehicle</option>
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.name} value={vehicle.name}>
                      {vehicle.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Trip Type
                <select
                  name="tripType"
                  value={form.tripType}
                  onChange={handleChange}
                >
                  <option>One Way</option>
                  <option>Round Trip</option>
                  <option>Local Rental</option>
                  <option>Multi-Day Tour</option>
                </select>
              </label>

              <label className="full-width">
                Additional Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Luggage, stops or special requests..."
                  rows="3"
                />
              </label>
            </div>

            <button
              className="primary-button submit-button"
              type="submit"
            >
              Request Booking on WhatsApp →
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}

            <p className="form-note">
              Your booking is confirmed only after availability
              and fare are verified by our team.
            </p>
          </form>
        </section>

        <section className="fleet-section" id="fleet">
          <div className="section-heading">
            <span className="eyebrow">TRAVEL YOUR WAY</span>
            <h2>Explore Our Fleet</h2>
            <p>Choose a vehicle that suits your journey.</p>
          </div>

          <div className="vehicle-grid">
            {vehicles.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.name}>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                />

                <div className="vehicle-info">
                  <span className="vehicle-seats">
                    {vehicle.seats}
                  </span>

                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.category}</p>

                  <a
                    className="vehicle-link"
                    href="#booking"
                    onClick={() =>
                      setForm((previous) => ({
                        ...previous,
                        vehicle: vehicle.name,
                      }))
                    }
                  >
                    Book This Vehicle →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="fleet-note">
            Vehicle models and seating capacities are illustrative.
            Actual availability and capacity will be confirmed by our team.
          </p>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">WHY TRAVEL WITH US?</span>
          <h2>Every Trip Deserves a Better Journey.</h2>

          <div className="benefit-grid">
            <div>
              <span className="benefit-icon">🚐</span>
              <h3>Vehicle Options</h3>
              <p>Choose a suitable vehicle for your trip.</p>
            </div>

            <div>
              <span className="benefit-icon">📍</span>
              <h3>Flexible Routes</h3>
              <p>Share your pickup and destination details.</p>
            </div>

            <div>
              <span className="benefit-icon">💬</span>
              <h3>Easy Booking</h3>
              <p>Send your booking request directly on WhatsApp.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div>
            <span className="eyebrow">
              LET'S PLAN YOUR NEXT TRIP
            </span>
            <h2>Ready to hit the road?</h2>
            <p>
              Contact Radhe Tours and Travels for your next journey.
            </p>
          </div>

          <a className="primary-button" href="#booking">
            Enquire Now →
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">R</span>
          <span>
            <strong>RADHE</strong>
            <small>TOURS & TRAVELS</small>
          </span>
        </a>

        <p>Travel Together. Create Memories.</p>
        <p>© {new Date().getFullYear()} Radhe Tours and Travels.</p>
      </footer>
    </>
  );
}

export default App;
