import Navbar from "../components/Navbar"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Partners from "../components/Home/Partners"
import LifestyleSection from "../components/Home/LifestyleSection"
import WhatWeDoBest from "../components/Home/WhatWeDoBest"
import LatestEquipment from "../components/Home/LatestEquipment"
import CustomerReviews from "../components/Home/CustomerReviews"
import Footer from "../components/Footer"
import MembershipPlans from "../components/Home/MembershipSection"
import TrainersSection from "../components/Home/PersonalTrainers"
import Equipment from "../components/Home/Equipment"
import Contact from "../components/Home/Contact"
import WhyChooseUsSection from '../components/Team/WhyChooseUsSection'
import Products from "../components/Home/Products"
import FaqSection from "../components/Home/FaqSection"
import ContactForm from "../components/Home/ContactForm"
import Review from "../components/Home/Review"
import ChampSection from "../components/Home/ChampSection"
import InHousePartners from "../components/Home/InHousePartners"
import SpecialOffers from "../components/Home/SpecialOffers"
import FoodProducts from "../components/Home/FoodProducts"
import Apparel from "../components/Home/Apparel"
function Home() {

  return (
    <>
      <Header />
      <About />
       <Equipment />
      
      <MembershipPlans />
      <SpecialOffers />
      <Partners />
     
      <Products />
      <FoodProducts />
      <Apparel />
      <InHousePartners />
      <ChampSection />
      <TrainersSection />
      <WhyChooseUsSection />
      <Review />
      <FaqSection />
      <Contact />
      <ContactForm />
    </>
  )
}

export default Home