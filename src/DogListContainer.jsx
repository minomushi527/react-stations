import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  //犬種リストを保存
  const [breeds, setBreeds] = useState([])
  //選択した犬種を保存
  const [selectedBreed, setselectedBreed] = useState('')

  const [pictureBreed, setpictureBreed] = useState([])
  const a = 1

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('data', data)
        setBreeds(Object.keys(data.message))
      })
  }, [])

  console.log('first breeds = ' + breeds)

  const dogpic = () => {
    let texturl = 'https://dog.ceo/api/breed/'
    texturl += selectedBreed
    texturl += '/images/random/12'
    console.log('dogpic : ' + texturl)
    fetch(texturl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setpictureBreed(data.message)
      })
  }

  const breedchange = e => {
    console.log('selected :')
    console.log(selectedBreed)
    setselectedBreed(e.target.value)
  }

  return (
    <div>
      <p>Breeds List</p>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        breedchange={breedchange}
        a={a}
      />
      <button className="kousinbutton" onClick={dogpic}>
        表示
      </button>
    </div>
  )
}

export default DogListContainer
