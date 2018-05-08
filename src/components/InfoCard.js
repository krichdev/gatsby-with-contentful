import React from 'react'

const InfoCard = ({data}) => (
  <div>
    <h3>{data.node.title}</h3>
    <img src={data.node.backgroundImage.file.url} height="330px" width="300px"/>
    <p>{data.node.cardContent.cardContent}</p>
  </div>
)

export default InfoCard