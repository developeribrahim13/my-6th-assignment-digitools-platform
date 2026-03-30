import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navber from './components/navber/Navber'
import PricingSection from './components/pricingSection/PricingSection'
import StatesSection from './components/statesSection/StatesSection'
import Workflow from './components/workflow/Workflow'

function App() {

  return (
    <>
      <Navber/>
      <Banner/>
      <StatesSection/>
      <PricingSection/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
