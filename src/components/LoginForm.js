import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    // navigate
    navigate("/");
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.email}
        type="email"
        name="email"
        placeholder="type your email"
      />
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.password}
        type="password"
        name="password"
        placeholder="type your password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
