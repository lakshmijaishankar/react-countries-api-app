import React, { Component } from 'react'
import SearchNavbar from '../navbar/SearchNavbar'
import Countries from './Countries'

class Home extends Component {
    render() {
        return (
            <>
                <SearchNavbar />
                <Countries />
            </>
        )
    }
}

export default Home