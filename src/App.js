import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quotes from './sections/Quotes';
import HeroSection from './sections/HeroSection';
import PhoneModel from './sections/PhoneModel';

function App() {
  return (
  <>
  
  <GlobalStyle/>
  <Quotes/>
  <PhoneModel/>
  <HeroSection/>
  </>
   
  );
}

export default App;
