import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoCard from '../components/InfoCard'

const InfoCardRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const IndexPage = ({data}) => (
  <div>
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
         }
       `
