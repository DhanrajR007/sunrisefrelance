// import React from 'react'

import Banner from "./components/banner"
import CampusLife from "./components/CampusLife"
import Footer from "./components/Footer"
import HeadMessage from "./components/Head"
import Hero from "./components/hero"
import Navbar from "./components/Navbar"
import VisionSection from "./components/Vission"
import WhySunrise from "./components/WhySunrise"

const App = () => {
  return (
   <section className="app">
    <Navbar/>
      <Hero />
      <Banner/>
      <VisionSection/>
      <WhySunrise />
      <CampusLife/>
      <HeadMessage/>
      <Footer/> 
   </section>
  )
}

export default App  