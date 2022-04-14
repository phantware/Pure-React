import './App.css'
import MyCounter from './playground/components/MyCounter'
import CounterContextProvider from './playground/contexts/CounterContext'

function App() {
  return (
    <CounterContextProvider>
      <div className='App'>
        <MyCounter />
      </div>
    </CounterContextProvider>
  )
}

export default App
