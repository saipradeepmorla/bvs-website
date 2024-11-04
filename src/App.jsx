import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingIcon from './components/FloatingIcon'

function App() {

  return (
    <>
    <Header/>
    <main className='pt-16'>
      <Outlet/>
    </main>
    <Footer/>
    <FloatingIcon/>
    </>
  )
}

export default App
