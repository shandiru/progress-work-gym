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


function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <MembershipPlans />
      <About />
      <TrainersSection />
      <Partners />
      <LifestyleSection />
      <WhatWeDoBest />
      <Equipment />
      <LatestEquipment />
      <CustomerReviews />
      <Contact />
      <Footer />
    </>
  )
}

export default Home