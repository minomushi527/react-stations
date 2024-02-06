import DogListContainer from './DogListContainer'

export const BreedsSelect = props => {
  const { breeds, selectedBreed, breedchange, a } = props
  console.log('breeds', breeds)
  // const list = Object.keys(breeds['breeds'])
  console.log('Object.key = ')
  console.log(Object.keys)

  return (
    <select onChange={breedchange}>
      {breeds.map(list => (
        <option key={list}>{list}</option>
      ))}
      {console.log('do it')}
    </select>
  )
}

export default BreedsSelect
