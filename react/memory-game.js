import "./styles.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {
    let tmpList = [];
    for (let i = 0; i < 6; i++) {
      tmpList.push({
        is_flip: false
      });
    }
    for (let i = 0; i < tmpList.length; i++) {
      if (i > 2) tmpList[i].text = (i % 3) + 1;
      else tmpList[i].text = i + 1;
    }
    setCards(tmpList);
  }, []);

  const handleFlipCard = (e, el) => {
    !choiceOne ? setChoiceOne(el) : setChoiceTwo(el);
  };

  useEffect(() => {
    setCards((cards) => {
      return cards.map((card) => {
        if (card === choiceOne || card === choiceTwo) card.is_flip = true;
        return card;
      });
    });

    if (choiceOne && choiceTwo) {
      if (choiceOne.text === choiceTwo.text) {
        setTimeout(() => {
          setCards((cards) => {
            return cards.filter((card) => {
              return card !== choiceOne && card !== choiceTwo;
            });
          });
        }, 500);
      } else {
        setTimeout(() => {
          setCards((cards) => {
            return cards.map((card) => {
              if (card === choiceOne || card === choiceTwo)
                card.is_flip = false;
              return card;
            });
          });
        }, 500);
      }

      setChoiceOne(null);
      setChoiceTwo(null);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <ul className="card-container">
        {cards.map((el, i) => {
          return el.is_flip ? (
            <li key={i} className="card" onClick={(e) => handleFlipCard(e, el)}>
              {el.text}
            </li>
          ) : (
            <li key={i} className="card" onClick={(e) => handleFlipCard(e, el)}>
              ?
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
