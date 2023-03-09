import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    // grabing the loginForm value typed by user
    const { loginForm } = authStore.getState();

    // sending to server
    await axios.post("/login", loginForm);

    // checking if the user is logged or not
    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    await axios.post("/signup", signupForm);

    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  logout: async () => {
    await axios.get("/logout");
    set({ loggedIn: false });
  },
}));

export default authStore;
