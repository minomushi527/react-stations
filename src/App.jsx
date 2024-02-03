// DO NOT DELETE

import './App.css'
import React, { useState } from 'react'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
