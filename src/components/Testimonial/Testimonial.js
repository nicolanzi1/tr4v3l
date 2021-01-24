import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { ColumnOne, ColumnTwo, ContentWrapper, Description, Images, Testimonials, TestimonialsContainer, TopLine } from './TestimonialElements'


const Testimonial = () => {
    const data = useStaticQuery(graphql`
        query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
    name: {in: ["testimonial-1", "testimonial-2"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
    `)

    return (
        <TestimonialsContainer>
            <TopLine>Testimonials</TopLine>
            <Description>What People Are Saying</Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonials>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`} />
                        <h3>Chris Reynolds</h3>
                        <p>"The greatest experience of my life! It was so much fin exploring the mountains and they made it super easy to book my trip and accommodations."</p>
                    </Testimonials>
                    <Testimonials>
                        <FaRegLightbulb css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem;`} />
                        <h3>Jane Miller</h3>
                        <p>"It was so easy to set up my trip! They answered all my questions right away and gave me the best price out of all the companies I researched."</p>
                    </Testimonials>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonial