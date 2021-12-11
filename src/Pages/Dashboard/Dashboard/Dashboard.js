import React from "react";
import "./Dashboard.css";
import ComponentsList from "../ComponentsList/ComponentsList";
import ComponentsItem from "../ComponentsItem/ComponentsItem";
import DashboardHome from "../DashboardHome/DashboardHome";
const Dashboard = () => {
  return (
    <section id="dashboard" className="px-5">
      <div className="main">
        <ComponentsList></ComponentsList>
        <div>
          <ComponentsItem></ComponentsItem>
          <DashboardHome></DashboardHome>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
