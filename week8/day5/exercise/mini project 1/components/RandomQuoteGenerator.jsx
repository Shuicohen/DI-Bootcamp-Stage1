import React, { useState } from 'react';
import QuotesDatabase from './QuotesDatabase';

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(QuotesDatabase[0]);
  const [bgColor, setBgColor] = useState('#282c34');

  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  const generateNewQuote = () => {
    let randomIndex;
    do {
        randomIndex = getRandomIndex(QuotesDatabase.length);
    } while (QuotesDatabase[randomIndex].quote === quote.quote);

    setQuote(QuotesDatabase[randomIndex]);

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);

    document.body.style.backgroundColor = randomColor;
    };

    return (
        <div style={{ color: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="quote-box">
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
            <button onClick={generateNewQuote} style={{ backgroundColor: bgColor }}>
              New Quote
            </button>
          </div>
        </div>
      );
  };

  export default RandomQuoteGenerator;