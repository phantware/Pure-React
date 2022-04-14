import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const MyCounter = () => {
  const { counter, increaseCounter, decreaseCounter } =
    useContext(CounterContext)
  return (
    <div>
      <h2>My counter is: {counter}</h2>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </div>
  )
}

export default MyCounter
