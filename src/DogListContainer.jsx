import { useEffect, useState, useCallback } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  //犬種リストを保存
  const [breeds, setBreeds] = useState([])
  //選択した犬種を保存
  const [selectedBreed, setselectedBreed] = useState('affenpinscher')

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

  // console.log('first breeds = ' + breeds)

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
        console.log(pictureBreed)
      })
  }

  const breedchange = useCallback(e => {
    const selected = e.target.value
    console.log('e.target:', e.target.value)
    setselectedBreed(`${selected}`)
    // console.log('selected', selectedBreed)
  }, [])

  // const dogpiclist = () => {
  //   pictureBreed.map(list => <DogImage imageUrl={list} />)
  // }

  const dog_picture = () => {
    dogpic()
    // dogpiclist()
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
      <button className="kousinbutton" onClick={dog_picture}>
        表示
      </button>
      {pictureBreed.map((list, key) => (
        <DogImage imageUrl={list} key={key} />
      ))}
    </div>
  )
}

export default DogListContainer
