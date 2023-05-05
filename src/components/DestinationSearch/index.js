// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredItems = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            value={searchInput}
            onChange={this.onSearchInput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img"
          />
        </div>
        <ul className="container2">
          {filteredItems.map(eachUser => (
            <DestinationItem Details={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
