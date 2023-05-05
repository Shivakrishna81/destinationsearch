// Write your code here
import './index.css'

const DestinationItem = props => {
  const {Details} = props
  const {name, imgUrl} = Details

  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
