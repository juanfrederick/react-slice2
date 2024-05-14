import { BiJoystick } from "react-icons/bi";
import SidebarItem from "../Element/SidebarItem";
import Dropdown from "../Element/Dropdown";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Sidebar({ hambActive }) {
  const [product, setProduct] = useState(false);
  const [templates, setTemplates] = useState(false);

  useEffect(() => {
    if (product) {
      setTemplates(false);
    }
  }, [product]);

  useEffect(() => {
    if (templates) {
      setProduct(false);
    }
  }, [templates]);

  return (
    <div
      className={`sidebar ${hambActive ? "sidebar-show" : "sidebar-hidden"}`}
    >
      <BiJoystick className="logo" />
      <div className="sidebar-list">
        <SidebarItem
          title="Product"
          dropdown={true}
          onclick={() => {
            setProduct(!product);
          }}
        />
        <Dropdown classname={`${product ? "show-dropdown" : undefined}`}>
          <SidebarItem
            title="Bonsai Workflow"
            text="Organize your bussiness & look professional"
          />
          <SidebarItem
            title="Bonsai Tax"
            text="Maximize write-offs, and estimate and save for 1099 taxes"
          />
          <SidebarItem
            title="Bonsai Cash"
            text="Manage your money with a no-fee business account"
          />
        </Dropdown>
        <SidebarItem
          title="Templates"
          dropdown={true}
          onclick={() => {
            setTemplates(!templates);
          }}
        />
        <Dropdown classname={`${templates ? "show-dropdown" : undefined}`}>
          <SidebarItem text="Contract Templates" />
          <SidebarItem text="Proposal Templates" />
          <SidebarItem text="Invoice Templates" />
          <SidebarItem text="Agreement Templates" />
        </Dropdown>
        <SidebarItem title="Pricing" dropdown={false} />
        <SidebarItem title="Reviews" dropdown={false} />
        <button className="sidebar-btn-1">LOG IN</button>
        <button className="sidebar-btn-2">START FREE</button>
      </div>
    </div>
  );
}

export default Sidebar;
