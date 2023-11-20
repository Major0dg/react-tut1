import { Navigation, useNavigation } from "react-router-dom";

const Card = ({ header, text, inStock }) => {
  const handleClick = () => {};

  return (
    <div className="card">
      <h1>{header}</h1>
      <p className="text">{text}</p>

      {inStock ? (
        <p>The product is in stock</p>
      ) : (
        <p>This product is out of stock</p>
      )}

      {inStock && <button onClick={handleClick}>Buy</button>}
    </div>
  );
};

export default Card;
