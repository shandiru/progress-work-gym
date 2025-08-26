import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainerCards from '../components/Team/TrainerCards'
import Trainer from '../components/Team/Trainer'

const Team = () => {
  return (
    <div>
      <Navbar />
      <Trainer />
      <TrainerCards />
      <Footer />
    </div>
  )
}

export default Team
