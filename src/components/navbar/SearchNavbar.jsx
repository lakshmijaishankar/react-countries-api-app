import React, { Component } from 'react'
import TextField from '../searchbox/TextField'
import { AiOutlineSearch } from 'react-icons/ai'
import arrowDown from '../../imgutlis/arrow-down.png'
import Search from '../search/Search'
import axios from 'axios'
import { Link } from 'react-router-dom'

const country = ['africa', 'america', 'asia', 'europe', 'oceania']

class SearchNavbar extends Component {

    constructor() {
        super();
        this.state = {
            dropDownOpen: false,
            selectCountry: '',
            searchCoun: false,
            searchResult: [],
            inputValue: "",
            fillterResult: "",
            focusedIndex: -1
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        this.setState({ searchResult: response.data })
    }

    handleSearchResult = (e) => {
        this.setState({ inputValue: e.target.value })
        const value = e.target.value
        var { searchResult } = this.state
        var temp = searchResult.filter(country => {
            return value && country.name.common.toLowerCase().includes(value)
        })
        this.setState({ fillterResult: temp })
    }

    handleKeyPressDown = e => {
        // e.preventDefault();
        console.log(e.key)
        const { key } = e
        const { focusedIndex, fillterResult } = this.state
        let nextIndexCount = 0
        if (key === 'ArrowDown') { nextIndexCount = (focusedIndex + 1) % fillterResult.length; e.preventDefault(); e.stopPropagation(); }
        if (key === 'ArrowUp') { nextIndexCount = (focusedIndex + fillterResult.length - 1) % fillterResult.length }
        this.setState({ focusedIndex: nextIndexCount })
        console.log(focusedIndex)
    }

    render() {
        const { dropDownOpen, searchCoun, inputValue, fillterResult, focusedIndex } = this.state
        console.log(this.state.searchCoun)
        return (
            <nav className="search_country_container flex mt-9 justify-between items-center sticky top-[4.5rem] z-10 ">
                <div
                    className="search_for_country max-w-[22rem] w-[100%] bg-[#ffffff] shadow-sm flex items-center px-6 gap-x-1 rounded py-1.5 flex-row-reverse relative"
                    onKeyDown={this.handleKeyPressDown}

                >
                    <TextField
                        type="search"
                        placeholder="Search for a country..."
                        className="w-[100%] h-[2rem] outline-[0] py-1 placeholder:text-[0.8rem]"
                        onChange={this.handleSearchResult}
                        value={inputValue}
                    />
                    <button className="search_svg" type='button'>
                        <AiOutlineSearch className='text-[1.2rem]' />
                    </button>
                    {
                        fillterResult != "" && <Search fillterResult={fillterResult} focusedIndex={focusedIndex} />
                    }
                </div>
                <div className="filter_by_region relative bg-[#ffffff] shadow-sm py-2 px-3 text-[0.8rem] rounded flex">
                    <header className='flex items-center gap-x-1'>
                        <h3>Filter by Region</h3>
                        <figure className='max-w-[1.2rem] cursor-pointer' onClick={() => this.setState({ dropDownOpen: !this.state.dropDownOpen })}>
                            <img src={arrowDown} alt='arrow-down' className={`${dropDownOpen ? 'rotate-[-180deg]' : 'rotate-[0]'} duration-500`} />
                        </figure>
                    </header>
                    <div className={`${dropDownOpen ? 'max-h-[10rem]' : 'max-h-0'} bg-[#ffffff] absolute left-0 top-11 right-0 shadow-sm rounded overflow-y-hidden transition-[max-height] duration-500`}>
                        <ul className={`capitalize flex flex-col gap-y-1 `}>
                            {
                                country.map(coun => {
                                    return (
                                        <Link to={`/region/${coun}`} key={coun} >
                                            <li className='cursor-pointer px-4 py-1 hover:bg-slate-200' aria-label={coun} >
                                                {coun}
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav >
        )
    }
}

export default SearchNavbar