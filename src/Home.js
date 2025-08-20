import React from "react";
import { Link } from "react-router-dom"; 

const profiles = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 25,
    city: "Delhi",
    job: "Software Engineer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    age: 28,
    city: "Mumbai",
    job: "Business Analyst",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Anjali Verma",
    age: 24,
    city: "Bangalore",
    job: "Doctor",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>Find Your Perfect Life Partner ❤️</h2>
        <p>Join thousands of happy couples who found their match here.</p>
        <button className="btn">Get Started</button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>🔍 Easy Search</h3>
          <p>Find profiles that match your preferences.</p>
        </div>
        <div className="feature-card">
          <h3>✅ Verified Members</h3>
          <p>All members are verified for authenticity.</p>
        </div>
        <div className="feature-card">
          <h3>❤️ Trusted Matches</h3>
          <p>Thousands of successful marriages worldwide.</p>
        </div>
      </section>

      {/* Profiles */}
      <section className="profiles">
        <h2>Featured Profiles</h2>
        <div className="profile-grid">
          {profiles.map((p) => (
            <Link to={`/profile/${p.id}`} className="profile-card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.age} yrs • {p.city}</p>
              <p className="job">{p.job}</p>
              <button className="btn">Connect 💌</button>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
