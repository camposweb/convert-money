import { Date } from './components/Date'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { DateProvider } from './context'


function App() {
  return (
    <DateProvider>
      <Header />
      <Date />
      <Main />
    </DateProvider>
  )
}

export default App
