//React
import React from 'react'
import styled from 'styled-components'

function Index() {

  return (
    <PulseSvgContainer>
      <PulseSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1395 630">
        <PolyLine className="pulse" points="0 312.85 170 312.85 210 288 262 331 298 277 321 625 359 5 404 341 447 278 480 312.85 681 312.85 720.33 286 759 349 796 281 826 625 861 5 909 341 945 273 979 312.85 1395 312.85" />
      </PulseSvg>
      <Descriptions>
      fill: none; <br />
      stroke: #4480f7;  <br />
      stroke-width: 10px; <br />
      stroke-linejoin: round; <br />
      stroke-dasharray: 4034; <br />
      stroke-dashoffset from N to 0
      </Descriptions>
    </PulseSvgContainer>
  )
}

const PulseSvgContainer = styled.div`
  width: 450px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const PulseSvg = styled.svg`

`

const PolyLine = styled.polyline`
  fill: none;
  stroke: #4480f7;
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-dasharray: 4034;

  animation: pulse 2s linear infinite;

  @keyframes pulse{
    0% {
      stroke-dashoffset: 4034;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`

const Descriptions = styled.p`
  width: 400px;
`


export default Index