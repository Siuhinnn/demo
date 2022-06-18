import { Routes, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "screens/Home";
import ExpensesTrackerPage from "pages/expenses-tracker";
import ExpensesSummaryPage from "pages/expenses-summary";

import { LayoutContainer } from "./style";

export default function Layout() {
  return (
    <LayoutContainer>
      <NavBar />
      <div className="PageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses-tracker" element={<ExpensesTrackerPage />} />
          <Route path="/expenses-summary" element={<ExpensesSummaryPage />} />
        </Routes>
      </div>
    </LayoutContainer>
  );
}
