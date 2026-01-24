import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
        <Bestseller />
    </div>
  )
}

export default Home