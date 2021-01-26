import React from "react"
import Trip from '../components/Trip/Trip'

import Layout from "../components/layout"
import SEO from "../components/seo"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips Page" />
    <Trip />
  </Layout>
)

export default TripsPage