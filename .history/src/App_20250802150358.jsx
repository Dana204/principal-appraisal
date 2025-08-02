/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home/Home";
import { AdminManagement } from "./components/pages/AdminManagement/AdminManagement";
import { InstructionalLeadership } from "./components/pages/ InstructionalLeadership";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="administration-and-management"
            element={<AdminManagement />}
          />
          <Route
            path="instructional-leadership"
            element={<InstructionalLeadership />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
