import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MyTheme } from '../../App'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animation: false,
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.data != this.props.data)
    //         console.log(this.props.data)
    // }
    componentDidMount() {
        this.setState({ animation: true })
    }

    render() {
        const { data } = this.props
        // console.log(data)
        return (
            <MyTheme.Consumer>
                {
                    theme => {
                        return (
                            <Link className='card_container rounded-md overflow-hidden ' to={`countrydetails/${data.name.common}`}>
                                <div className={`card flex flex-col ${theme ? 'bg-[#2b3945]' : 'bg-[#ffffff]'} animated ${this.state.animation ? 'fade-in-top' : ''} pb-6 shadow`}>
                                    <figure className="country_img h-[135px]">
                                        <img src={data.flags.png} alt="" className='w-[100%] h-[100%] aspect-square object-cover' />
                                    </figure>
                                    <article className='flex flex-col mt-2 px-6 gap-y-4'>
                                        <header>
                                            <h3>
                                                <b>{data.name.common}</b>
                                            </h3>
                                        </header>
                                        <div className='text-[0.9rem] flex-col flex capitalize gap-y-[0.01rem]'>
                                            <div className='flex gap-x-1'>
                                                <span>population:</span>
                                                <span className='opacity-75'>{data.population}</span>
                                            </div>
                                            <div className='flex gap-x-1'>
                                                <span>region:</span>
                                                <span className='opacity-75'>{data.region}</span>
                                            </div>
                                            <div className='flex gap-x-1'>
                                                <span>capital:</span>
                                                <span className='opacity-75'>{data.capital}</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </Link>
                        )
                    }
                }
            </MyTheme.Consumer>
        )
    }
}

export default Card