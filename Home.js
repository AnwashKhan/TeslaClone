import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section
          title= "Modle S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText ="Existing Inventory"
        />
        <Section
          title= "Modle Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText = "Custom Order"
          rightBtnText ="Existing Inventory"
        />
        <Section
          title= "Modle 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText = "Custom Order"
          rightBtnText ="Existing Inventory"
        />
        <Section
          title= "Modle X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText = "Custom Order"
          rightBtnText ="Existing Inventory"
        />
        <Section
          title= "Lowest Cost Solar Panels in America"
          description="Money-back gurantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText = "Order Now"
          rightBtnText ="Learn More"
        />
        <Section
          title= "Solar for New Roofs"
          description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText = "Order Now"
          rightBtnText ="Learn More"
        />
        <Section
          title= "Accessories"
          backgroundImg="accessories.jpg"
          leftBtnText = "Shop Now"
        />
    </Container>
  )
}

export default Home
const Container = styled.div`
  height: 100vh;
`

