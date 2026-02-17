import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import StatCards from "../../components/admin/cards/StatCard";
import StatCard2 from "../../components/admin/cards/StatCard2";
import TopSellingProductsTable from "../../components/admin/cards/TopSellingProductsTable";
import TopSellersTable from "../../components/admin/cards/TopSellersTable";
import "../../styles/adminLayout.css";
import AdminUsers from "../../components/admin/AminUsers";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="admin-main">
          {activeSection === "home" && (
            <>
              <StatCards />
              <StatCard2 />
              <TopSellingProductsTable />
              <TopSellersTable />
            </>
          )}

          {activeSection === "users" && <AdminUsers />}
        </main>
      </div>
    </div>
  );
};

export default Index;
