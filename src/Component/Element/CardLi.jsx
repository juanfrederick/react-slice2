import { TiTick } from "react-icons/ti";

function CardLi({ text }) {
  return (
    <li>
      <TiTick className="check-icon" />
      <p>{text}</p>
    </li>
  );
}

export default CardLi;
