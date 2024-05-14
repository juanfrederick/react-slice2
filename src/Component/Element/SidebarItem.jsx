import { RiArrowDropDownLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function SidebarItem({ title, dropdown, text, onclick }) {
  return (
    <div className="sidebar-item" onClick={onclick}>
      <p>{title}</p>
      {dropdown ? <RiArrowDropDownLine className="logo" /> : undefined}
      {text && <p className="small-text">{text}</p>}
    </div>
  );
}

export default SidebarItem;
