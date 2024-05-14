// eslint-disable-next-line react/prop-types
function Dropdown({ classname, children }) {
  return <div className={`dropdown ${classname}`}>{children}</div>;
}

export default Dropdown;
