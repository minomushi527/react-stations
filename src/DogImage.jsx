import './App.css'

export const DogImage = props => {
  return (
    <li className="dogimages">
      {console.log('url:', props.imageUrl)}
      <img src={props.imageUrl} alt="dogs" className="dogs" />
    </li>
  )
}

export default DogImage
