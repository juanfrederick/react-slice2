import { TiTick } from "react-icons/ti";

function Card({ title, text, price, per, children }) {
  return (
    <div className="card">
      <div className="card-title">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="card-price">
        <h1>${price}</h1>
        <p>{per}</p>
      </div>
      <ul>{children}</ul>
      <button>Start Free</button>
    </div>
  );
}

export default Card;
