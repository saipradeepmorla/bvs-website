import React from 'react'
import ExploreOurServices from '../components/servicepage/ExploreOurServices'
import TopFeatures from '../components/servicepage/TopFeatures'
import WhyYouNeed from '../components/servicepage/WhyYouNeed'
import OurInventory from '../components/servicepage/OurInventory'
import ReviewsSection from '../components/ReviewsSection'

const Services = () => {
  return (
    <>
    <ExploreOurServices />
    <TopFeatures/>
    <WhyYouNeed/>
    <OurInventory/>
    <ReviewsSection title="Testimonials" />
    </>
  )
}

export default Services