import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import InfoCard from '../components/InfoCard'

const InfoCardRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items:center;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const IndexPage = ({data}) => (
  <div>
    <ImageWrapper>
      <Img sizes={data.background.sizes}/>
    </ImageWrapper>
    <InfoCardRowWrapper>
    {data.allContentfulInfoCard.edges.map(node => <InfoCard data={node} />)}
    </InfoCardRowWrapper>
  </div>
)

export default IndexPage

export const query = graphql`
         query IndexPageQuery {
           allContentfulInfoCard {
             edges {
               node {
                 id
                 title
                 cardContent {
                   cardContent
                 }
                 backgroundImage {
                   file {
                     url
                   }
                 }
               }
             }
           }
           background: imageSharp(id: {regex: "/seattle-sugaring.jpg/"}){
             sizes(maxHeight: 300){
               ...GatsbyImageSharpSizes
             }
           }
         }
       `
