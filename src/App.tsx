import { Header } from './components/Header'
import { SummurayTable } from './components/SummaryTable'
import './styles/global.css'

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <Header/>
        <SummurayTable/>
      </div>
    </div>
  )
}

export default App