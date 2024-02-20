import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quotes from './sections/Quotes';
import HeroSection from './sections/HeroSection';
import PhoneModel from './sections/PhoneModel';
import DesignSection from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection';
import { ProcessorSection } from './sections/ProcessorSection';

function App() {
  return (
  <>
  
  <GlobalStyle/>
  <Quotes/>
  {/* <PhoneModel/> */}
  <HeroSection/>
  <DesignSection/>
  <DisplaySection/>
  <ProcessorSection/>
  </>
   
  );
}

export default App;
