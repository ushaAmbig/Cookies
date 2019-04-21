import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import FontAwesome from 'react-fontawesome';

const HeaderComponent = ({menuOpened, onMenuClick}) =>(
      <React.Fragment>
        <Navbar className="header">
        <FontAwesome name="bars" size="2x" className="mr-medium" onClick={onMenuClick}/>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <FontAwesome name="shopping-cart" size="2x" className="mr-medium"/>
        </Navbar>
      </React.Fragment>
);
export default HeaderComponent;
