import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

const CARD_URL = "https://"

function App() {
  const [card, setCard] = useState("");

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
