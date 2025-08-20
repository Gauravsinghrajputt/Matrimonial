import React, { useState } from "react";

const profiles = [
  { id: 1, name: "Priya Sharma", age: 25, city: "Delhi", job: "Software Engineer", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 2, name: "Ravi Kumar", age: 28, city: "Mumbai", job: "Business Analyst", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Anjali Verma", age: 24, city: "Bangalore", job: "Doctor", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 4, name: "Amit Singh", age: 30, city: "Delhi", job: "Engineer", img: "https://randomuser.me/api/portraits/men/20.jpg" },
  { id: 5, name: "Neha Gupta", age: 27, city: "Mumbai", job: "Teacher", img: "https://randomuser.me/api/portraits/women/50.jpg" },
];

function Search() {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");

  const filteredProfiles = profiles.filter((p) => {
    return (
      (age === "" || p.age === parseInt(age)) &&
      (city === "" || p.city.toLowerCase().includes(city.toLowerCase())) &&
      (job === "" || p.job.toLowerCase().includes(job.toLowerCase()))
    );
  });

  return (
    <div className="search-page">
      <h2>Search Profiles 🔍</h2>

      {/* Filter Form */}
      <div className="filters">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profession"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>

      {/* Results */}
      <div className="profile-grid">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((p) => (
            <div className="profile-card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.age} yrs • {p.city}</p>
              <p className="job">{p.job}</p>
              <button className="btn">Connect 💌</button>
            </div>
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
