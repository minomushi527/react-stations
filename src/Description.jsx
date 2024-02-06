import './App.css'
import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const response = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} key={1} />
      <div>
        <button className="dogbutton" onClick={response}>
          更新
        </button>
      </div>
    </div>
  )
}

export default Description
