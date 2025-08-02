/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home/Home";
import { AdminManagement } from "./components/pages/AdminManagement/AdminManagement";

function App() {
  return (
    <>
      {/* <Router> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/administration-and-management"
            element={<AdminManagement />}
          />
        </Routes>
      </Layout>
      {/* </Router> */}
    </>
  );
}

export default App;
