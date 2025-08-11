import React from 'react';
import { Table, Progress, Tag } from 'antd';
import "../adminStyles/topSellersTable.css"

// Dummy Data
const data = [
  {
    key: '1',
    name: 'Ramesh Kumar',
    email: 'ramesh.kumar@vendor.in',
    region: 'Delhi',
    volume: 123456,
    amount: '₹2,34,000',
    satisfaction: 92,
  },
  {
    key: '2',
    name: 'Anjali Mehta',
    email: 'anjali.m@ricecorp.in',
    region: 'Mumbai',
    volume: 98765,
    amount: '₹1,80,000',
    satisfaction: 78,
  },
  {
    key: '3',
    name: 'Vikram Iyer',
    email: 'vikram.iyer@vendor.in',
    region: 'Chennai',
    volume: 87412,
    amount: '₹2,10,000',
    satisfaction: 64,
  },
  {
    key: '4',
    name: 'Neha Agarwal',
    email: 'neha.ag@vendor.in',
    region: 'Kolkata',
    volume: 95123,
    amount: '₹1,95,500',
    satisfaction: 88,
  },
  {
    key: '5',
    name: 'Rohit Sharma',
    email: 'rohit.s@vendor.in',
    region: 'Hyderabad',
    volume: 106578,
    amount: '₹2,45,700',
    satisfaction: 95,
  },
  {
    key: '6',
    name: 'Divya Desai',
    email: 'divya.desai@vendor.in',
    region: 'Ahmedabad',
    volume: 90234,
    amount: '₹1,76,000',
    satisfaction: 42,
  },
  {
    key: '7',
    name: 'Amitabh Joshi',
    email: 'amitabh@vendor.in',
    region: 'Jaipur',
    volume: 79214,
    amount: '₹1,65,500',
    satisfaction: 56,
  },
  {
    key: '8',
    name: 'Kiran Rao',
    email: 'kiran.rao@vendor.in',
    region: 'Bangalore',
    volume: 123789,
    amount: '₹2,78,000',
    satisfaction: 85,
  },
  {
    key: '9',
    name: 'Tanya Bhatt',
    email: 'tanya.b@vendor.in',
    region: 'Pune',
    volume: 84567,
    amount: '₹1,98,750',
    satisfaction: 71,
  },
  {
    key: '10',
    name: 'Sanjay Patel',
    email: 'sanjay.p@vendor.in',
    region: 'Surat',
    volume: 92134,
    amount: '₹2,10,430',
    satisfaction: 33,
  },
];

// Table Columns
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <strong>{text}</strong>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a href={`mailto:${text}`}>{text}</a>,
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    render: (region) => <Tag color="geekblue">{region}</Tag>,
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
    render: (vol) => vol.toLocaleString(),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Satisfaction',
    dataIndex: 'satisfaction',
    key: 'satisfaction',
    render: (value) => {
      let color = 'red';
      if (value >= 80) color = 'green';
      else if (value >= 60) color = 'gold';
      return <Progress percent={value} strokeColor={color} showInfo={false} />;
    },
  },
];

const TopSellersTable = () => {
  return (
    <div
      style={{
        padding: '24px',
        background: 'linear-gradient(125deg, #d4c712ff, #e0e0e0)',
        borderRadius: '12px',
        border: '1px solid #e4ebe7', // ✅ subtle soft border
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)', // ✅ lighter shadow
        marginBottom: '24px',
        marginTop: "24px",
      }}
    >
      <h2
        style={{
          marginBottom: '16px',
          fontSize: '20px',
          fontWeight: 700,
          color: '#fff', // ✅ modern muted dark green
        }}
      >
        Top Sellers
      </h2>

      <Table
  className="custom-top-sellers-table"
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 5 }}
  scroll={{ x: true }}
/>

    </div>
  );
};

export default TopSellersTable;
