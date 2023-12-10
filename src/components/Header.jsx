import React, { Component } from 'react'
import Navbar from './navbar/Navbar'

class Header extends Component {
    render() {
        return (
            <header className='header_container sticky top-0  shadow-sm z-50'>
                <Navbar />
            </header>
        )
    }
}

export default Header