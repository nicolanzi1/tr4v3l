import React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats/Stats"
import Testimonial from "../components/Testimonial/Testimonial"
import Trip from "../components/Trip/Trip"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trip heading="Our Favorite Destinations" />
    <Testimonial />
    <Stats />
  </Layout>
)

export default IndexPage
