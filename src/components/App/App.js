import './App.css';
import Gallery from '../Gallery';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
function App() {
  const [memeUrls, setMemeUrls] = useState([]);
  useEffect(() => {
    loadMemes(0);
  }, []);
  const loadMemes = (randomNumber) => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(
        (result) => {
          let images = result.data.memes;
          images = images.slice(randomNumber, randomNumber + 9);
          setMemeUrls(images);
        },
        (error) => {

        }
      )
  };

  const randomLoadMemes = () => {
    const randomNumber = Math.floor(Math.random() * 92);
    loadMemes(randomNumber);
  };

  return (
    <div className="App">
      <Button onClick={() => randomLoadMemes()}>Meme</Button>
      <Container > {
        memeUrls.map(image => <Gallery meme={image}></Gallery>)
      } </Container>
    </div>
  );
}

export default App;
