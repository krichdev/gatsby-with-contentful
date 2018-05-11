import React from 'react'
import styled from 'styled-components'

const InfoCardWrapper = styled.div`
  width: 30%;
  margin: 0 10px;
  height: 330px;
  text-align: center;
  background-color: white;
  position: relative;
  padding: 10px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.3;
  }
  @media (max-width: 860px) {
    margin: 10px 0; 
    width: 80%;
  }
`

 const InfoCardContent = styled.div`
   z-index: 2;
   position: relative;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.6);`

const InfoCard = ({ data }) => (
  <InfoCardWrapper>
    <InfoCardContent>
      <h3>{data.node.title}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: data.node.cardContent.cardContent,
        }}
      />
    </InfoCardContent>
    <img src={data.node.backgroundImage.file.url} />
  </InfoCardWrapper>
)



export default InfoCard