// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoIncrement = () => {
    console.log('mangoIncrement is clicked')

    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  bananaIncrement = () => {
    console.log('bananaIncrement is clicked')

    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="color">{mangoCount}</span> mangoes{' '}
            <span className="color">{bananaCount}</span> bananas
          </h1>
          <div className="card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.mangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.bananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
