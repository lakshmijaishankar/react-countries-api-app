import React, { Component, createContext } from 'react'
import './style/index.css'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
export const MyTheme = createContext()
class App extends Component {

  constructor() {
    super()
    this.state = {
      themeChage: false
    }
  }

  handleThemeChange = () => {
    this.setState({ themeChage: !this.state.themeChage })
  }

  render() {
    const { themeChage } = this.state
    return (
      <MyTheme.Provider value={themeChage}>
        <div className='countries_container font-nunito-sans '>
          <Navbar themeChage={themeChage} handleThemeChange={this.handleThemeChange} />
          <Main />
        </div>
      </MyTheme.Provider>
    )
  }

}

export default App