import React, { useState } from "react";
import riceicon from '../../assets/rice-icon.png';
import { Link } from "react-router-dom";
import { Input, Dropdown, Avatar, Menu } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BulbOutlined,
  BulbFilled,
} from "@ant-design/icons";
import "./adminStyles/header.css";

const Header = ({ onThemeToggle, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="admin-header">
      <div className="header-left">
        <img src={riceicon} alt="logo" className="logo-icon" />
        <Link className="brand-text" to="/">RiceWorld</Link>
      </div>

      <div className="admin-header-center">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="admin-header-right">
        <div className="theme-toggle" onClick={onThemeToggle}>
          {isDarkMode ? <BulbFilled style={{ fontSize: 20 }} /> : <BulbOutlined style={{ fontSize: 20 }} />}
        </div>
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <Avatar style={{ backgroundColor: "#fff8e1", cursor: "pointer",color: "#bfa100", border: "1px solid #bfa100" }} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;

