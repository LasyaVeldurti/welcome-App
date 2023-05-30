// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  handleClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="caption">Thank You! Happy Learning</p>

        <button onClick={this.handleClick} className="subscribe" type="button">
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
