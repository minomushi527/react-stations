import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBreeds(breeds => {
          breeds.push(data.message)
        })
      })
  }, [breeds])
  return <></>
}

export default DogListContainer
