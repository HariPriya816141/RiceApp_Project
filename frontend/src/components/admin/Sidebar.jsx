import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./adminStyles/sidebar.css";

const menuItems = [
  { label: "Home", key: "home", icon: <HomeOutlined /> },
  { label: "Products", key: "products", icon: <ShoppingCartOutlined /> },
  { label: "Orders", key: "orders", icon: <UnorderedListOutlined /> },
  { label: "Users", key: "users", icon: <UserOutlined /> },
  { label: "Billings", key: "billings", icon: <DollarOutlined /> },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        <h2 className="admin-logo">Admin Panel</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`sidebar-item ${
              activeSection === item.key ? "active" : ""
            }`}
            onClick={() => setActiveSection(item.key)}
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
