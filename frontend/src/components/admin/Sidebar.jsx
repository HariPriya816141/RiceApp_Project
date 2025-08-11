import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./adminStyles/Sidebar.css";

const menuItems = [
  { label: "Home", icon: <HomeOutlined /> },
  { label: "Products", icon: <ShoppingCartOutlined /> },
  { label: "Orders", icon: <UnorderedListOutlined /> },
  { label: "Users", icon: <UserOutlined /> },
  { label: "Billings", icon: <DollarOutlined /> },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        <h2 className="admin-logo">Admin Panel</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="sidebar-item"
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

