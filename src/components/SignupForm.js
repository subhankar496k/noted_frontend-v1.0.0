import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  }
  return (
    <form onSubmit={handleSignup}>
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.email}
        type="email"
        name="email"
        placeholder="type your email"
      />
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.password}
        type="password"
        name="password"
        placeholder="type your password"
      />
      <button type="submit">Signup</button>
    </form>
  );
}