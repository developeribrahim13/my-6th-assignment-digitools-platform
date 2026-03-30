import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navber from './components/navber/Navber'
import StatesSection from './components/statesSection/StatesSection'
import Workflow from './components/workflow/Workflow'

function App() {

  return (
    <>
      <Navber/>
      <Banner/>
      <StatesSection/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
