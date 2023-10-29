import React from 'react'
import styled from "styled-components";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>  
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade buttom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            { rightBtnText && 
                <RightButton>
                {rightBtnText}
                </RightButton>
            }
            
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  backgroung-size: cover;
  backgroung-position: center;
  backgroung-repeat: no-repeat;
  backgroung-image: url('\public\images\model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  aligh: center; //horizontal
  background-image: ${props => 'url("/images/${props.bgImage}")'}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1;
;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  backgroung-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  cloro: black;  
`
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``