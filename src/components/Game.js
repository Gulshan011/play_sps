
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from "../images/scissor.avif";
import img2 from "../images/paper.jpg";
import img1 from "../images/stone.webp";
import Header from "./Header";
import Swal from "sweetalert2";
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import { useMediaQuery } from 'react-responsive';
 import Confetti from 'react-confetti';


const Game = () => {
  const history = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);
  const [cpuCard, setCPUCard] = useState(null);
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (attemptsLeft === 0) {
      setGameOver(true);
      if (userScore > cpuScore) {
        setWinner('User');
      } else if (cpuScore > userScore) {
        setWinner('CPU');
      } else {
        setWinner('Tie');
      }
    }
  }, [attemptsLeft, userScore, cpuScore]);

  const handleClick = (cardName, cardImage) => {
    setSelectedCard({ image: cardImage, name: cardName });
  };

  const handlePlay = () => {
    const cpuCards = [
      { name: 'stone', image: img1 },
      { name: 'paper', image: img2 },
      { name: 'scissor', image: img3 }
    ];
    const cpuCardIndex = Math.floor(Math.random() * 3);
    const cpuCard = cpuCards[cpuCardIndex];
    setCPUCard(cpuCard);

    matchMedia(cpuCard, selectedCard);
  };

  const matchMedia = (cpuCard, selectedCard) => {

    if(!selectedCard){
      Swal.fire({
        title: 'You need to select a card to begin',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    // Perform the matching logic here
   else if (selectedCard.name === cpuCard.name) {
      Swal.fire({
        title: "OOPS !! It's a tie",
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://tenor.com/view/excited-happy-cheer-cheering-bear-16318454.gif)
          left top / 300px 200px
          no-repeat
        `
      });
    } else if (selectedCard.name === 'stone' && cpuCard.name === 'scissor') {
      setUserScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You won. STONE beats SCISSOR !!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/aJumv0mMceoAAAAi/cheer-cheering.gif)
          left top
          no-repeat
        `
      });
    } else if (selectedCard.name === 'stone' && cpuCard.name === 'paper') {
      setCpuScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You Lost ; Try Again!!! PAPER wraps STONE  :)',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/ptwljHtCNosAAAAi/peachcat-cat.gif)
          left top
          no-repeat
        `
      });
    } else if (selectedCard.name === 'paper' && cpuCard.name === 'stone') {
      setUserScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You won. PAPER wraps STONE !!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/aJumv0mMceoAAAAi/cheer-cheering.gif)
          left top
          no-repeat
        `
      });
    }else if (selectedCard.name === 'paper' && cpuCard.name === 'scissor') {
        setCpuScore(prevScore => prevScore + 1);
        Swal.fire({
          title: 'You lost. SCISSOR cuts PAPER !!',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url(https://media.tenor.com/ptwljHtCNosAAAAi/peachcat-cat.gif)
            left top
            no-repeat
          `
        });
    } else if (selectedCard.name === 'stone' && cpuCard.name === 'paper') {
      setCpuScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You Lost ; Try Again!!! STONE wraps PAPER:)',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/ptwljHtCNosAAAAi/peachcat-cat.gif)
          left top
          no-repeat
        `
      });
    } else if (selectedCard.name === 'scissor' && cpuCard.name === 'stone') {
      setCpuScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You Lost ; Try Again!!! STONE beats SCISSOR :)',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/ptwljHtCNosAAAAi/peachcat-cat.gif)
          left top
          no-repeat
        `
      });
    } else if (selectedCard.name === 'scissor' && cpuCard.name === 'paper') {
      setUserScore(prevScore => prevScore + 1);
      Swal.fire({
        title: 'You won.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(https://media.tenor.com/ptwljHtCNosAAAAi/peachcat-cat.gif)
          left top
          no-repeat
        `
      });
    } else {
      console.log('no match');
    }

    setAttemptsLeft(prevAttempts => prevAttempts - 1);
  };



  const handleGameResult = () => {
    if (userScore > cpuScore) {
      return (
        <div>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <h2>Game Over!</h2>
          <p>{winner === 'Tie' ? "It's a tie!" : `The winner is ${winner}`}</p>
          <Button onClick={resetGame}>Play Again</Button>
        </div>
      );
    }
    return null; // Return null if the condition is not met
  };
  
  
  
  const resetGame = () => {
        setSelectedCard(null);
        setCPUCard(null);
        setAttemptsLeft(10);
        setUserScore(0);
        setCpuScore(0);
        setGameOver(false);
        setWinner('');
      };
    
      if (gameOver) {
        return (
          <div>
          <Confetti/>
            <Header />
       
            <Container>
              <Row>
                <Col sm={12}>
                  <div className="game-over">
                    <h2>Game Over!</h2>
                    <p style={{fontSize:"25px",fontWeight:"200px"}}>{winner === 'Tie' ? "It's a tie!" : `The winner is ${winner}`}</p>
                    <Button onClick={resetGame}>Play Again</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }

  return (
    <div>
      <Header attemptsLeft={attemptsLeft} cpuScore={cpuScore} userScore={userScore}/>
      
      <div className="card-container">
        <Card border="success" className="game-card" style={{ borderWidth: "5px" }} onClick={() => handleClick('stone', img1)}>
          <Card.Img variant="top" src={img1} className="card-image img-fluid" />
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>I am a Stone🪨</Card.Title>
          </Card.Body>
        </Card>
        <Card border="success" className="game-card" style={{ borderWidth: "5px" }} onClick={() => handleClick('paper', img2)}>
          <Card.Img variant="top" src={img2} className="card-image img-fluid" />
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>Ahmm , paper📃!!!</Card.Title>
          </Card.Body>
        </Card>
        <Card border="success" className="game-card" style={{ borderWidth: "5px" }} onClick={() => handleClick('scissor', img3)}>
          <Card.Img variant="top" src={img3} className="card-image img-fluid" />
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>Scissor✂️ !!!</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='box-container'>
        <div className='box1'>
          {selectedCard && (
            <div>
              <p>{selectedCard.name}</p>
              <img src={selectedCard.image} alt={selectedCard.name} style={{ height: "250px", width: "250px", borderRadius: "50px", fontSize: "20px" }} />
            </div>
          )}
        </div>
        <div className='box2'>
          {cpuCard && (
            <div>
              <p>{cpuCard.name}</p>
              <img src={cpuCard.image} alt={cpuCard.name} style={{ height: "250px", width: "250px", borderRadius: "50px", fontSize: "20px" }} />
            </div>
          )}
        </div>
      </div>
      <Button
        variant="outline-success"
        style={{ width: "100px", marginTop: "20px", height: "50px" }}
        onClick={handlePlay}
        disabled={attemptsLeft === 0}
      >
        {attemptsLeft === 0 ? '' : 'Play'}
      </Button>
      {attemptsLeft === 0 && (
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>
          No attempts left. Game over.
        </p>
      )}
      {attemptsLeft > 0 && (
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>
          Attempts left: {attemptsLeft}
        </p>
      )}
      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        <p>User Score: {userScore}</p>
        <p>CPU Score: {cpuScore}</p>
        {attemptsLeft === 0 && (
          <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
            Winner: {winner}
          </p>
        )}
      </div>
      {gameOver && handleGameResult()}
    </div>
  );
};

export default Game;



