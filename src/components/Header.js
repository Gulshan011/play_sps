import React from 'react';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Header = ({ attemptsLeft, userScore, cpuScore }) => {
  const Nav = styled.div`
    background: #1e1e2f;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      justify-content: space-between;
      padding: 0 10px;
    }
  `;

  const NavIcon = styled.div`
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  `;

  const Badge = styled.div`
    position: absolute;
    top: 10px;
    right: -8px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    @media screen and (max-width: 768px) {
      top: 5px;
      right: -5px;
      width: 20px;
      height: 20px;
      font-size: 10px;
    }
  `;

  return (
    <div className='header'>
      <Nav>
        <NavIcon to='#'>
          Chances
          <AiIcons.AiFillAlert />
          {attemptsLeft > 0 && <Badge>{attemptsLeft}</Badge>}
        </NavIcon>
        <NavIcon to='#'>
          CPU
          <AiIcons.AiFillContainer />
          <Badge>{cpuScore}</Badge>
        </NavIcon>
        <NavIcon to='#'>
          User
          <IoIcons.IoIosPaper />
          <Badge>{userScore}</Badge>
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Header;
