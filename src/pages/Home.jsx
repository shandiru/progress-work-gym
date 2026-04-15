import { lazy } from "react";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import MembershipPlans from "../components/Home/MembershipSection";
import SpecialOffers from "../components/Home/SpecialOffers";
import LazySection from "../components/LazySection";

const Equipment = lazy(() => import("../components/Home/Equipment"));
const Contact = lazy(() => import("../components/Home/Contact"));
const Apparel = lazy(() => import("../components/Home/Apparel"));
const TrainersSection = lazy(() => import("../components/Home/PersonalTrainers"));
const Products = lazy(() => import("../components/Home/Products"));
const FoodProducts = lazy(() => import("../components/Home/FoodProducts"));
const InHousePartners = lazy(() => import("../components/Home/InHousePartners"));
const ChampSection = lazy(() => import("../components/Home/ChampSection"));
const WhyChooseUsSection = lazy(() => import("../components/Team/WhyChooseUsSection"));
const Review = lazy(() => import("../components/Home/Review"));
const FaqSection = lazy(() => import("../components/Home/FaqSection"));
const ContactForm = lazy(() => import("../components/Home/ContactForm"));
const Partners = lazy(() => import("../components/Home/Partners"));

const sectionPlaceholder = "min-h-[360px] w-full bg-black/40 animate-pulse";

function Home() {
  return (
    <>
      <Header />
      <SpecialOffers />
      <MembershipPlans />
      <About />
      <LazySection component={Equipment} minHeightClassName={sectionPlaceholder} />
      <LazySection component={Contact} minHeightClassName={sectionPlaceholder} />
      <LazySection component={Apparel} minHeightClassName={sectionPlaceholder} />
      <LazySection component={TrainersSection} minHeightClassName={sectionPlaceholder} />
      <LazySection component={Products} minHeightClassName={sectionPlaceholder} />
      <LazySection component={FoodProducts} minHeightClassName={sectionPlaceholder} />
      <LazySection component={InHousePartners} minHeightClassName={sectionPlaceholder} />
      <LazySection component={ChampSection} minHeightClassName={sectionPlaceholder} />
      <LazySection component={WhyChooseUsSection} minHeightClassName={sectionPlaceholder} />
      <LazySection component={Review} minHeightClassName={sectionPlaceholder} />
      <LazySection component={FaqSection} minHeightClassName={sectionPlaceholder} />
      <LazySection component={ContactForm} minHeightClassName={sectionPlaceholder} />
      <LazySection component={Partners} minHeightClassName={sectionPlaceholder} />
    </>
  );
}

export default Home;
