import DogListContainer from './DogListContainer'
import { useCallback } from 'react'

export const BreedsSelect = props => {
  const { breeds, selectedBreed, breedchange, a } = props
  // console.log('breeds', breeds)
  // const list = Object.keys(breeds['breeds'])
  // console.log('Object.key = ')
  // console.log(Object.keys)

  const test = e => {
    console.log('test')
    breedchange(e)
  }

  return (
    <select
      onChange={e => {
        // console.log('event', e)
        // test(e)
        breedchange(e)
      }}
    >
      {breeds.map(list => (
        <option key={list}>{list}</option>
      ))}
      {console.log('do it')}
    </select>
  )
}

export default BreedsSelect
