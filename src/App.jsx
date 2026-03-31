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

  return (
    <>
      <Navber/>
      <Banner/>
      <StatesSection/>
      <Products/>
      <StepsSection/>
      <PricingSection/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
