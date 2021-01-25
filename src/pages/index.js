import React from "react"
import Email from "../components/Email/Email"
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
    <Email />
  </Layout>
)

export default IndexPage
