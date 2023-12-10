import axios from 'axios'
import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import arrowLeft from '../../imgutlis/arrow-left.png'

const MyContryDetailsWrapper = () => {
    const { name } = useParams()
    return (
        <CountryDetails name={name} />
    )
}

class CountryDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countryDetails: undefined,
            animation: false
        }
    }

    async componentDidMount() {
        const { name } = this.props
        var response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        if (response.status === 200)
            this.setState({ countryDetails: response.data[0], animation: true })
    }

    render() {
        const { name } = this.props
        console.log(this.state.countryDetails)
        const { countryDetails, animation } = this.state
        const countryCurrency = countryDetails && Object.entries(countryDetails.currencies)
        return (
            <section className='countrydetails_container mt-5 h-[85vh] flex flex-col gap-y-9 '>
                {/* {name} */}
                <div className="goto_previouspage flex">
                    <Link to='/' className='back_page capitalize flex items-center bg-[#ffffff] px-6 py-1 shadow rounded-md gap-x-1' >
                        <figure className='max-w-[1rem] arrow_left'>
                            <img src={arrowLeft} alt='arrow' />
                        </figure>
                        <div className='back'>
                            <span>back</span>
                        </div>
                    </Link>
                </div>
                {
                    countryDetails && <div className='flex '>
                        <aside className='country_logo w-[30%] overflow-y-hidden'>
                            <figure className={`h-[15rem] animated ${animation && 'fade-in-top'}`}>
                                <img src={countryDetails.flags.png} alt={countryDetails.flags.alt} className='w-[100%] h-[100%] aspect-square object-cover' />
                            </figure>
                        </aside>
                        <aside className={`country_details w-[70%]  px-20  overflow-hidden capitalize font-light`}>
                            <div className={`flex flex-col animated ${animation && 'fade-in-right'} h-[100%] justify-between`}>
                                <header>
                                    <b className='text-[2rem]'>
                                        <h1>{countryDetails.name.common}</h1>
                                    </b>
                                </header>
                                <section className='grid grid-cols-[repeat(2,minmax(auto,270px))]  '>
                                    <div className="content_left">
                                        <ul>
                                            <li>
                                                <b children={<span>native name:</span>} />
                                                {
                                                    Object.entries(countryDetails.name.nativeName).map(natName => (
                                                        <span className='ms-1 text-[#535354]'>{natName[1].official}</span>
                                                    )
                                                    )
                                                }
                                            </li>
                                            <li>
                                                <b children={<span>population:</span>} />
                                                <span className='ms-1 text-[#535354]'>{countryDetails.population}</span>
                                            </li>
                                            <li>
                                                <b children={<span>region:</span>} />
                                                <span className='ms-1 text-[#535354]'>{countryDetails.region}</span>
                                            </li>
                                            <li>
                                                <b children={<span>sub region:</span>} />
                                                <span className='ms-1 text-[#535354]'>{countryDetails.subregion}</span>
                                            </li>
                                            <li>
                                                <b children={<span>capital:</span>} />
                                                <span className='ms-1 text-[#535354]'>{countryDetails.capital}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content_right">
                                        <ul>
                                            <li >
                                                <b>currencies:</b>
                                                <span className='ms-1 text-[#535354]'>{countryCurrency[0][1].name}</span>
                                            </li>
                                            <li>
                                                <b>languages:</b>
                                                {
                                                    Object.entries(countryDetails?.languages).map(lang => {
                                                        return (
                                                            <span className='ms-1 text-[#535354]' key={lang}>{lang[1]}, </span>
                                                        )
                                                    })

                                                }
                                            </li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </section>
                                <div className="borders flex items-center gap-x-1 ">
                                    <b >borders countries: </b>
                                    <div className='text-[#535354] flex  justify-center overflow-x-auto web'>
                                        {
                                            countryDetails?.borders?.map(border => (

                                                <Link className='block bg-[#ffffff] shadow px-8' key={border}>
                                                    {border}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                }
            </section>
        )
    }
}

export default MyContryDetailsWrapper