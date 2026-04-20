import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import OurProduct from './components/sections/OurProduct'
import Specifications from './components/sections/Specifications'
import MarketCompetition from './components/sections/MarketCompetition'
import Strategies from './components/sections/Strategies'
import Financials from './components/sections/Financials'
import Future from './components/sections/Future'
import MeetTheTeam from './components/sections/MeetTheTeam'
function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OurProduct />
        <Specifications />
        <MarketCompetition />
        <Strategies />
        <Financials />
        <Future />
        <MeetTheTeam />
      </main>
      <Footer />
    </div>
  )
}

export default App
