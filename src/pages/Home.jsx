import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Shop",
      text: "Amount: N10000",
      inStock: true,
    },
    {
      id: 2,
      title: "House",
      text: "Amount: N20000",
      inStock: false,
    },
    {
      id: 3,
      title: "Room",
      text: "Amount: N40000",
      inStock: true,
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <h2>The Home page</h2>

        {data.map((item) => (
          <Card
            key={item.id}
            text={item.text}
            header={item.title}
            inStock={item.inStock}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
