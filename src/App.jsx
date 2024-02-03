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
  return (
    <header>
      Dogアプリ<p>犬の画像を表示するサイトです</p>
      {/* <img src="./src/dog.jpg"   /> */}
      <img src={dogUrl} />
    </header>
  )
}
