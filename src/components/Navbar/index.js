import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    pantrillo
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/home'>Home</NavLinks>

                    </NavItem>

                    <NavItem>
                        <NavLinks to='/welcome'>
                            About
                        </NavLinks>
                        
                    </NavItem>

                    <NavItem>
                        <NavLinks to='mealplanner'>
                            Meal Planner
                        </NavLinks>
                        
                    </NavItem>

                    <NavItem>
                        <NavLinks to='about'>
                            Sign Up
                        </NavLinks>
                        
                    </NavItem>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
               
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar