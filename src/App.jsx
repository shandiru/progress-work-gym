import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import CashMembership from "./pages/CashMembership";
import SpecialMemberships from "./pages/SpecialMemberships";
import DayPasses from "./pages/DayPasses";
import ChampionAthletes from "./pages/ChampionAthletes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
         <Route path="/cash-membership" element={<CashMembership />} />
          <Route path="/special-memberships" element={<SpecialMemberships />} />
           <Route path="/day-passes" element={<DayPasses />} />
           <Route path="/ChampionAthletes" element={< ChampionAthletes />} /> 
      </Routes>
    </Router>
  );
}

export default App;
