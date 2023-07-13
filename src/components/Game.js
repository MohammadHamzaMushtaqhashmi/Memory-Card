import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../CSS/card.css';
const Game = () => {
  const [cards, setCards] = useState([
    { id: 1, image: 'Cat.jpg', text: 'Cat' },
    { id: 2, image: 'Dog.jpg', text: 'Dog' },
    { id: 3, image: 'Deer.jpg', text: 'Deer' },
    { id: 4, image: 'Fox.jpg', text: 'Fox' },
    { id: 5, image: 'Horse.jpg', text: 'Horse' },
    { id: 6, image: 'Lion.jpg', text: 'Lion' },
    { id: 7, image: 'Monkey.jpg', text: 'Monkey' },
    { id: 8, image: 'Panda.jpg', text: 'Panda' },
    { id: 9, image: 'Tiger.jpg', text: 'Tiger' },
    { id: 10, image: 'Zebra.jpg', text: 'Zebra' },
    { id: 11, image: 'Frog.jpg', text: 'Frog' },
    { id: 12, image: 'Beer.jpg', text: 'Beer' },
    
    // ... more cards
  ]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    // shuffle cards and set state
    setCards((cards) => shuffle(cards));
  }, []);

  const shuffle = (array) => {
    // shuffle logic here
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleClick = (id) => {
    if (clickedIds.includes(id)) {
      // card has already been clicked
      setScore(0);
      setClickedIds([]);
    } else {
      // card has not been clicked
      setClickedIds([...clickedIds, id]);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
  };

  return (
    <div className="game">
      <p className="game-score">Score: {score}</p>
      <p className="game-score">Best Score: {bestScore}</p>
      <div id="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            text={card.text}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
