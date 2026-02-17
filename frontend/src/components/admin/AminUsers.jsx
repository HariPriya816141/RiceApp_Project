import { Table, Select, Tag } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const { Option } = Select;

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const handleRoleChange = async (userId, newRole) => {
    await axios.patch(`http://localhost:3000/users/${userId}`, {
      role: newRole,
    });
    fetchUsers();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "gold" : role === "vendor" ? "green" : "blue"}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Change Role",
      render: (_, record) => (
        <Select
          value={record.role}
          onChange={(value) => handleRoleChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Option value="public">Public</Option>
          <Option value="vendor">Vendor</Option>
          <Option value="admin">Admin</Option>
        </Select>
      ),
    },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>User Management</h2>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AdminUsers;
