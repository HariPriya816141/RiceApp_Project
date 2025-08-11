import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import StatCards from '../../components/admin/cards/StatCard';
import StatCard2 from '../../components/admin/cards/StatCard2';
import TopSellingProductsTable from '../../components/admin/cards/TopSellingProductsTable';
import TopSellersTable from '../../components/admin/cards/TopSellersTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6" style={{ marginLeft: '25%', marginTop: '8%' }}>
          <StatCards />
          <StatCard2/>
          <TopSellingProductsTable/>
          <TopSellersTable/>
        </main>
      </div>
    </div>
  );
};

export default Index;

