import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { 
    ProductsContainer,
    ProductsHeading,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductWrapper,
    TextWrap }
from "./TripElements"
import { Button } from '../Button'
import { ImLocation } from 'react-icons/im'


const Trip = ({ heading }) => {
    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                node {
                    alt
                    button
                    name
                    img {
                    childImageSharp {
                        fluid {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
}
    `)

    function getTrips(data) {
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg 
                        src={item.node.img.childImageSharp.fluid.src}
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid} 
                    />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <Button to="/trips" primary="true" round="true" css={`position: absolute; top: 420px; font-size: 14px;`}>{item.node.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Trip
