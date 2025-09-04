import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainerCards from '../components/Team/TrainerCards'
import Trainer from '../components/Team/Trainer'
import WhyChooseUsSection from '../components/Team/WhyChooseUsSection'

const Team = () => {
  return (
    <div>
      <Navbar />
      <Trainer />
      <TrainerCards />
      <WhyChooseUsSection />
      <Footer />
    </div>
  )
}

export default Team
