import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Authenticity from './components/Authenticity'
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter min-h-screen bg-white">
      <Header />
      <Hero />
      <Collections />
      <Authenticity />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
