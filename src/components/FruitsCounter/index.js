// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="background">
        <div className="inner-container">
          <h1 className="count">
            Bob ate <span className="count-color">{mangoCount}</span> Mangoes
            <span className="count-color">{bananaCount} </span>Bananas
          </h1>
          <div className="align-div">
            <div className="btn-align">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button className="button" onClick={this.onIncrementMango}>
                Eat Mango
              </button>
            </div>
            <div className="btn-align">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="img"
                alt="banana"
              />
              <button className="button" onClick={this.onIncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
