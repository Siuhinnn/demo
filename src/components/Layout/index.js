import { Routes, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import SidebarMenu from "components/SidebarMenu";
import Home from "screens/Home";
import ExpensesTrackerPage from "pages/expenses-tracker";
import ExpensesSummaryPage from "pages/expenses-summary";
import MapPage from "pages/expenses-map";

import { LayoutContainer } from "./style";

export default function Layout() {
  return (
    <LayoutContainer>
      <NavBar />
      <SidebarMenu />
      <div className="PageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses-tracker" element={<ExpensesTrackerPage />} />
          <Route path="/expenses-summary" element={<ExpensesSummaryPage />} />
          <Route path="/expenses-map" element={<MapPage />} />
        </Routes>
      </div>
    </LayoutContainer>
  );
}
