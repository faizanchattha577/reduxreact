import React from "react";
import Navbar from "./components/NavBar";
import UserDetails from "./components/UserDetails";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <UserDetails/>
      </div>
    </>
  );
}
