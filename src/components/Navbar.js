import React , { Component } from 'react';
import {  Button } from '@mui/material';

class AppNavbar extends Component {
    render() {
      //const { characterData } = this.props
  
      return (
        <nav className='app-navbar app-stndrd-padding'>
            <div className='app-navbar-inner'>
                <div className='app-logo'>
                    ColorPal
                </div>
                <Button variant='contained'>Sign Up</Button>
            </div>
        </nav>
      )
    }
}

export default AppNavbar