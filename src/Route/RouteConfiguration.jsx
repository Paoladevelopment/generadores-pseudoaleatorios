import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Calculate } from "../pages/Calculate/Calculate";
import { GEM } from "../pages/GEM/GEM";
import { LCG } from "../pages/LCG/LCG";


export const RoutesConfiguration = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculate />} />
        <Route path="/GEM" element={<GEM />} />
        <Route path="/LCG" element={<LCG />} />
      </Routes>
    </Router>
  );
};
