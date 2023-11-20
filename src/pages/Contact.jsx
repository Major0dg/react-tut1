import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <h2>This is contact page</h2>
        <Card
        header="Contact header"
        text="Contact text"
        
        />
      </div>
    </main>
  );
};

export default Contact;
