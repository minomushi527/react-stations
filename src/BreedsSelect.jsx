import DogListContainer from './DogListContainer'

export const BreedsSelect = (breeds, selectedBreed, breedchange) => {
  const list = Object.keys(breeds['breeds'])
  console.log('Object.key = ')
  console.log(Object.keys)
  return (
    <select onChange={breedchange}>
      {list.map(list => (
        <option>{list}</option>
      ))}
    </select>
  )
}

export default BreedsSelect
