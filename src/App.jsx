import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navber from './components/navber/Navber'
import PricingSection from './components/pricingSection/PricingSection'
import Products from './components/products/Products'
import StatesSection from './components/statesSection/StatesSection'
import StepsSection from './components/stepsSection/StepsSection'
import Workflow from './components/workflow/Workflow'

function App() {
const [carteAche,setCarteAche] = useState([]);
  return (
    <>
      <Navber carteAche={carteAche}/>
      <Banner/>
      <StatesSection/>
      <Products carteAche={carteAche} setCarteAche={setCarteAche}/>
      <StepsSection/>
      <PricingSection/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
