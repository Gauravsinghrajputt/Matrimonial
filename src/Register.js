import React from "react";

function Register() {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="number" placeholder="Age" required />
        <input type="text" placeholder="City" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="btn" type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;
