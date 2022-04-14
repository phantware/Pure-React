import { useState, createContext } from 'react'

export const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }
  const decreaseCounter = () => {
    setCounter(counter - 1)
  }
  const value = { counter, increaseCounter, decreaseCounter }

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

export default CounterContextProvider
