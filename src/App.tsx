import { useState } from 'react';
import './App.css';
import { Card } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';
import ButtonContainer from './components/ButtonContainer';

const CARD_URL = "https://raw.githubusercontent.com/mttaggart/hacker-strategies/main/cards.json"


async function getCard(cards: [Card], cardType: string): Promise<Card> {
  const filteredCards = cards.filter(c => c.type === cardType);
  console.log(filteredCards);
  return filteredCards[Math.floor(Math.random() * filteredCards.length)];
}

function App() {
  const [cards, setCards] = useState(async () => {
    const data = await fetch(CARD_URL);
    return data.json(); 
  });
  const [currentCard, setCurrentCard] = useState({type: "none", text:"Select Red or Blue!"});

  const clickHandler = async (cardType: string) => {
    const newCard = await getCard(await cards, cardType);
    setCurrentCard(newCard);
  }

  return (
    <>
      <Header />
      <CardContainer currentCard={currentCard} />
      <ButtonContainer clickHandler={clickHandler} />
      <Footer />
    </>
  )
}

export default App
