/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home/Home";
import { AdminManagement } from "./components/pages/AdminManagement";
import { InstructionalLeadership } from "./components/pages/InstructionalLeadership";
import { LearningEnvironment } from "./components/pages/LearningEnvironment";
import { AttributeDevelopment } from "./components/pages/AttributeDevelopment";

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
          <Route
            path="enabling-environment-for-learning"
            element={<LearningEnvironment />}
          />
          <Route
            path="personal-attributes-and-development"
            element={<AttributeDevelopment />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
