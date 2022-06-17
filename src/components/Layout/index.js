import { Routes, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "screens/Home";
import ExpensesTracker from "pages/expenses-tracker";

import { LayoutContainer } from "./style";

export default function Layout() {
  return (
    <LayoutContainer>
      <NavBar />
      <div className="PageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses-tracker" element={<ExpensesTracker />} />
          {/* <Route path="/Expenses" element={<AddExpense />} />
            <Route path="/Summary" element={<Expenses />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Map" element={<MapPage />} /> */}
        </Routes>
      </div>
    </LayoutContainer>
  );
}
