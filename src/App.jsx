import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GDPRBanner from "./components/GDPRBanner";

const Home = lazy(() => import("./pages/Home"));
const Debit = lazy(() => import("./components/MemberShip/Debit"));
const CashMembership = lazy(() => import("./pages/CashMembership"));
const PartnerMembership = lazy(() => import("./pages/PartnerMembershippage"));
const SpecialMemberships = lazy(() => import("./pages/SpecialMemberships"));
const DayPasses = lazy(() => import("./pages/DayPasses"));
const TermsConditions = lazy(() => import("./components/Term"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

const pageLoader = <div className="min-h-screen bg-black" aria-hidden="true" />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={pageLoader}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans-pricing" element={<Debit />} />
          <Route path="/cash-membership" element={<CashMembership />} />
          <Route path="/partner-memmbership" element={<PartnerMembership />} />
          <Route path="/special-memberships" element={<SpecialMemberships />} />
          <Route path="/day-passes" element={<DayPasses />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
