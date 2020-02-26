//import React, {Component} from 'react';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from '../logo.svg';
import '../App.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported);
                 https://www.iconfinder.com/Makoto_msk*/}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center" >
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                            My cart

                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            </BrowserRouter>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlew);
.nav-link{
    color:var(--mainWhite) !important;
    font-size;1.3rem;
    text-transform;capitalize;
}
`;