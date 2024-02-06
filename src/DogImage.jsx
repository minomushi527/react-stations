export const DogImage = props => {
  return (
    <div>
      {console.log('url:', props.imageUrl)}
      <img src={props.imageUrl} alt="dogs" />
    </div>
  )
}

export default DogImage
