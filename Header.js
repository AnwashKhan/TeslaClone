import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from "react-redux";

function Header() {
  const[burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/image/logo.svg" />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href='#'>{ car }</a>
        ))}
        
      </Menu>
      <RightMenue>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenue>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li key={index}><a href='#'>{ car }</a></li>
        ))}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Use Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: spaced-between;
  padding: 0 20px;
  top:0;
  left: 0;
  right:0;
  z-index: 1;

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px){
    flex-direction: column;
  }
`
const RightMenue = styled.div`
  display: flex;
  align-items: centered;

  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom:0;
  right:0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  pading: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: $props{props => props.show ? 'translate(0)': 'translate(100%)'};
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight: 600;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end; 
`