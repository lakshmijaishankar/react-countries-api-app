import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyContryDetailsWrapper from './CountryDetails';
import SearchNavbar from '../navbar/SearchNavbar';
import Countries from './Countries';
import { RegionFilterWrapper } from './FillterByRegion';
import { MyTheme } from '../../App';
class Main extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MyTheme.Consumer>
                {
                    theme => {
                        console.log(theme)
                        return (
                            <main className={` flex flex-col px-20 ${theme ? 'bg-[#2b3945]' : 'bg-[#fafafa]'}`}>
                                <BrowserRouter>
                                    <SearchNavbar theme={theme} />
                                    <Routes>
                                        <Route path='/' element={<Countries />} />
                                        <Route path='/countrydetails/:name' element={<MyContryDetailsWrapper />} />
                                        <Route path='/region/:name' element={<RegionFilterWrapper />} />
                                    </Routes>
                                </BrowserRouter>
                            </main>
                        )
                    }
                }
            </MyTheme.Consumer>
        )
    }

}

export default Main