import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Mental Health Assessment for people of all ages</h5>
      <h1>Assess</h1>
      <h1>Yourself.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        <button className="readmore"><Link to="/read">Read More</Link></button>
        <button className="trial"><Link to="/trial"><span>Quick Trial</span></Link></button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
    a{
      text-decoration: none;
    }
  }
  .trial{
    a{
      color: #fff;
    }
  }
  .readmore {
    a{
      color: #81d1ff;
    }
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
