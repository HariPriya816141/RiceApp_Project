import React from 'react';
import { Table, Tag, Avatar } from 'antd';
import '../adminStyles/topSellersTable.css';

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar shape="square" src={record.image} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: category => {
      let color = 'green'; // default
      if (category === 'Premium') color = 'gold';
      else if (category === 'Healthy') color = 'blue';
      return <Tag color={color}>{category}</Tag>;
    },
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    render: revenue => <span>₹ {revenue.toLocaleString()}</span>,
  },
];

const data = [
  {
    key: '1',
    product: 'Golden Basmati Rice',
    image: '/topsellers/rice1.jpg',
    category: 'Premium',
    sold: 230,
    revenue: 56000,
  },
  {
    key: '2',
    product: 'Everyday Sona Masoori',
    image: '/topsellers/rice2.webp',
    category: 'Daily Use',
    sold: 310,
    revenue: 47200,
  },
  {
    key: '3',
    product: 'Organic Brown Rice',
    image: '/topsellers/rice3.webp',
    category: 'Healthy',
    sold: 95,
    revenue: 28800,
  },
];

const TopSellingProductsTable = () => (
  <div className="topsellers-table-section">
    <h3 className="section-title">Top Selling Products</h3>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      className="topsellers-table"
    />
  </div>
);

export default TopSellingProductsTable;

