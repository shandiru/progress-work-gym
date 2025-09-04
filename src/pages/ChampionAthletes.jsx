import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/ChampionAthletes/HeroSection'
import AthletesSection from '../components/ChampionAthletes/AthletesSection'
import QuoteStatsSection from '../components/ChampionAthletes/QuoteStatsSection'
import CtaSection from '../components/ChampionAthletes/CtaSection'

const ChampionAthletes = () => {
  return (
    <div>
      <Navbar />
    <HeroSection />
    <AthletesSection />
    <QuoteStatsSection />
    <CtaSection />
      <Footer />
    </div>
  )
}

export default ChampionAthletes
