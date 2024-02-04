import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  //犬種リストを保存
  const [breeds, setBreeds] = useState([])
  //選択した犬種を保存
  const [selectedBreed, setselectedBreed] = useState([''])
  const breedchange = e => {
    setselectedBreed(e)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBreeds(data.message)
      })
  }, [])

  console.log(breeds)
  return (
    <div>
      <p>Breeds List</p>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        breedchange={breedchange}
      />
    </div>
  )
}

export default DogListContainer
