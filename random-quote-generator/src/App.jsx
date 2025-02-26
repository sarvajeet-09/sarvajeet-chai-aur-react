import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const quoteaList = [
  {
    "quote": "Life isn’t about getting and having, it’s about giving and being.", 
    "author": "Kevin Kruse"
  },
  {
    "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
     "author": "Napoleon Hill"
  },
  {
    "quote": "Strive not to be a success, but rather to be of value.", 
    "author": "Albert Einstein"
  },
  {
    "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
    "author": "Robert Frost"
  },
  {
    "quote": "I attribute my success to this: I never gave or took any excuse.", 
    "author": "Florence Nightingale"
  },
  {
    "quote": "You miss 100% of the shots you don’t take.", 
    "author": "Wayne Gretzky"
  },
  {
    "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
     "author": "Michael Jordan"
  },
  {
    "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", 
    "author": "Amelia Earhart"
  },
  {
    "quote": "Every strike brings me closer to the next home run.", 
    "author": "Babe Ruth"
  },
  {
    "quote": "Definiteness of purpose is the starting point of all achievement.",
     "author": "W. Clement Stone"
  },
  {
    "quote": "We must balance conspicuous consumption with conscious capitalism.",
     "author": "Kevin Kruse"
  },
  {
    "quote": "Life is what happens to you while you’re busy making other plans.", 
    "author": "John Lennon"
  },
  {
    "quote": "We become what we think about.",
     "author": "Earl Nightingale"
  },
  {
    "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
     "author": "Mark Twain"
  },
  {
    "quote": "Life is 10% what happens to me and 90% of how I react to it.",
     "author": "Charles Swindoll"
  },
  {
    "quote": "The most common way people give up their power is by thinking they don’t have any.", 
    "author": "Alice Walker"
  },
  {
    "quote": "The mind is everything. What you think you become.",
     "author": "Buddha"
  },
  {
    "quote": "The best time to plant a tree was 20 years ago. The second best time is now.", 
    "author": "Chinese Proverb"
  },
  {
    "quote": "An unexamined life is not worth living.",
     "author": "Socrates"
  },
  {
    "quote": "Eighty percent of success is showing up.", 
    "author": "Woody Allen"
  },
]


function App() {
  const [quote, setQuote] = useState(quoteaList[0])
  const [quotes, setQuotes] = useState(quoteaList);

  //getting random quote
  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteaList.length)
    setQuote(quoteaList[randomIndex])
  }


  //setting random quote
  const addQuote = (event) => {
    event.preventDefault();

    const newQuoteText = event.target.elements.enteredQuote.value.trim();
    if (newQuoteText === "") return alert("Please enter a quote!");

    const newQuote = { quote: newQuoteText, author: "Unknown" };

    setQuotes([...quotes, newQuote]);
    setQuote(newQuote)

    event.target.reset();
    alert("Quote added successfully!");
  };



  return (
    <>
      <div className='randomquotegenerator'>
      <h1>Random Quote Generator</h1>
      <h3>" {quote.quote} "</h3>
      <button onClick={getQuote}>Get Quote</button>

      <form action="#" onSubmit={addQuote}>
        <input type="text" name="enteredQuote" placeholder='enter your quote' />
        <button>Add</button>
      </form>
      </div>
    </>
  )
}

export default App
