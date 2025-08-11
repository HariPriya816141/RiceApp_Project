import React from 'react';
import { Dropdown, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined, ProfileOutlined, ShoppingOutlined } from '@ant-design/icons';
import "./dropdown.css"

const items = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <ProfileOutlined />,
  },
  {
    key: 'settings',
    label: 'Account Settings',
    icon: <SettingOutlined />,
  },
  {
    key: 'orders',
    label: 'Orders',
    icon: <ShoppingOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

const ProfileDropdown = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      trigger={['click']}
      dropdownRender={(menu) => (
        <div className="golden-dropdown animated-dropdown">
          {menu}
        </div>
      )}
    >
      <Avatar
        size="large"
         className="golden-avatar"
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default ProfileDropdown;

