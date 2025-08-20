import React from "react";
import { useParams, Link } from "react-router-dom";

// Sample profiles (same as Home/Search)
const profiles = [
  { id: 1, name: "Priya Sharma", age: 25, city: "Delhi", job: "Software Engineer", about: "Loves traveling, cooking, and reading books.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 2, name: "Ravi Kumar", age: 28, city: "Mumbai", job: "Business Analyst", about: "Enjoys fitness, movies, and long drives.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Anjali Verma", age: 24, city: "Bangalore", job: "Doctor", about: "Passionate about helping others, enjoys painting.", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 4, name: "Amit Singh", age: 30, city: "Delhi", job: "Engineer", about: "Tech enthusiast, foodie, loves adventure.", img: "https://randomuser.me/api/portraits/men/20.jpg" },
  { id: 5, name: "Neha Gupta", age: 27, city: "Mumbai", job: "Teacher", about: "Loves teaching kids, enjoys music and dance.", img: "https://randomuser.me/api/portraits/women/50.jpg" },
];

function ProfileDetails() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <h2 style={{ textAlign: "center", margin: "50px" }}>Profile not found ❌</h2>;
  }

  return (
    <div className="details-container">
      <img src={profile.img} alt={profile.name} className="details-img" />
      <div className="details-info">
        <h2>{profile.name}</h2>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>City:</strong> {profile.city}</p>
        <p><strong>Profession:</strong> {profile.job}</p>
        <p><strong>About:</strong> {profile.about}</p>
        <button className="btn">💌 Send Interest</button>
        <br />
        <Link to="/search" className="back-link">← Back to Search</Link>
      </div>
    </div>
  );
}

export default ProfileDetails;
