// DO NOT DELETE

import './App.css'
import React, { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const response = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const randomurl = data['message']
        setDogUrl(randomurl)
      })
    // setDogUrl(dogUrl => (dogUrl = data.messages))
  }
  return (
    <div>
      Dogアプリ<p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <div>
        <button onClick={() => setDogUrl(response)}>更新</button>
      </div>
    </div>
  )
}
