import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Game from './Game';

const Home = () => {
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleInstructionClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (showGame) {
    return <Game />;
  }

  return (
    <div>
      <div className='game-container'>
        <h1>Stone🪨 || Paper 📃|| Scissor✂️</h1>
        <Button
          variant='outline-success'
          className='instruction-btn'
          onClick={handleInstructionClick}
        >
          Instructions
        </Button>
        <Button
          variant='outline-success'
          className='play-btn'
          onClick={handlePlayClick}
        >
          Play
        </Button>
      </div>
      {showModal && (
        <div className='modal-container'>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeModal}>
              <Modal.Title>Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> 1.) To begin the game, select any of the three cards and then click on "Play!"</p>
              <p> 2.) User: Stone & CPU: Scissor; User wins a score, otherwise, CPU wins.</p>
              <p> 3.) User: Paper & CPU: Stone; User wins a score, otherwise, CPU wins.</p>
              <p> 4.) User: Scissor & CPU: Paper; User wins a score, otherwise, CPU wins.</p>
              <p> 5.) User and CPU match; no one gets a score.</p>
              <p> 6.) There are a maximum of 10 chances, and at the end, the one with the highest score wins the game!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='success' onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
};

export default Home;
