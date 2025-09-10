import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import CashMembership from "./pages/CashMembership";
import SpecialMemberships from "./pages/SpecialMemberships";
import DayPasses from "./pages/DayPasses";
import ChampionAthletes from "./pages/ChampionAthletes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Debit from "./components/MemberShip/Debit";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/debit" element={<Debit />} />
        <Route path="/cash-membership" element={<CashMembership />} />
        <Route path="/special-memberships" element={<SpecialMemberships />} />
        <Route path="/day-passes" element={<DayPasses />} />
        <Route path="/ChampionAthletes" element={< ChampionAthletes />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
