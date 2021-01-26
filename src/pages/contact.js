import React from "react"
import Email from '../components/Email/Email'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Email />
  </Layout>
)

export default ContactPage