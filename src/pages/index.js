import React from 'react'
import Link from 'gatsby-link'
import InfoCard from '../components/InfoCard'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    {data.allContentfulInfoCard.edges.map(node => <InfoCard data={node} />)}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
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
