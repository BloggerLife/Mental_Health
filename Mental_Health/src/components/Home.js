import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import Tilt from "react-tilt";
import bg from "../assets/bg.png";

// import '../styles/components/_home.css'

const Home = () => (
    <Container bg={bg}>
        <Wrapper>
                <div className="home">
                  <div className="section1">
                      <header>
                          <h3>Anxiety</h3>
                          <h3>Test</h3>
                          <p>This Test is for people who suspects that worry and fear are affecting their daily activities</p>
                          <BtnContainer>
                            <button><Link className="play-button" to="test/anxiety"><span>Start</span></Link></button>
                          </BtnContainer>
                      </header>
                      <header>
                        <h3>PTSD</h3>
                        <h3>Test</h3>
                        <p>This Test is for people who have gone through a traumatic event, it might be the loss of a relative or accident</p>
                        <BtnContainer>
                          <button><Link className="play-button" to="/test/ptsd"><span>Start</span></Link></button>
                        </BtnContainer>
                      </header>
                  </div>
                  <div className="section2">
                      <header>
                        <h3>Depression</h3>
                        <h3>Test</h3>
                        <p>This Test is for people who are feeling too much sadness and probably lonliness even around people</p>
                        <BtnContainer>
                          <button><Link className="play-button" to="/test/depression"><span>Start</span></Link></button>
                        </BtnContainer>
                      </header>
                    <header>
                        <h3>General Health</h3>
                        <h3>Test</h3>
                        <p>This Test assesses your general well beign as we believe that good general health advocates good mental state</p>
                        <BtnContainer>
                          <button><Link className="play-button" to="/test/general"><span>Start</span></Link></button>
                        </BtnContainer>
                    </header>
                  </div>
                  
                </div>
                <BtnBack>
                    <div className="cont">
                      <button><Link className="back-button" to="/trial"><span>Back</span></Link></button>
                    </div>
              </BtnBack>
        </Wrapper>
    </Container>
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width:410px){
    display: block;
    justify-content: center;
    align-items: center;
    background-image: url(${({ bg }) => bg});
    background-repeat: repeat-x;
    background-position: center;
    height: 160vh;
  }


  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;

    &:nth-of-type(1) {
        color: #651fac;
      font-weight: 500;
    }
    &:nth-of-type(2) {
        color: #3c0473;
    }
  }
`;
const Wrapper = styled.div`
 .home{
   margin-top: 20px;
   @media screen and (max-width:410px){
    margin-top: 0px;
  }
 }
 @media screen and (max-width:410px){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 .section1{
  margin-left: 300px;
  margin-right: 300px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:410px){
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 0px 44px;
  }
  header{
    @media screen and (max-width:410px){
      height: 100%;
      width: 80%;
      margin: 16px 10px;
    }
    height: 90%;
    width: 60%;
    margin: 0px 10px;
    margin-top: 2.5%;
    border-radius: 6px;
    box-shadow: 0px 13px 24px -7px #651fac;
    background-color: rgba(247, 115, 196, 0.5);
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
     -webkit-backdrop-filter: blur(35px);
     backdrop-filter: blur(35px);
     background-color: rgba(247, 115, 196, 0.25);
     z-index: 1;
    }
    p{
      margin: 10px 20px 0px;
      font-weight: 500;
      color: #651fac;
    }
  }
 }
 .section2{
  margin-top: 10px;
  margin-left: 300px;
  margin-right: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:410px){
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px 0px 44px;
  }

  header{
    @media screen and (max-width:410px){
      height: 100%;
      width: 80%;
      margin: 16px 10px;
    }
    height: 90%;
    width: 60%;
    margin: 0px 10px;
    margin-top: 2.5%;
    border-radius: 6px;
    box-shadow: 0px 13px 24px -7px #651fac;
    background-color: rgba(247, 115, 196, 0.9);
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
     -webkit-backdrop-filter: blur(35px);
     backdrop-filter: blur(35px);
     background-color: rgba(247, 115, 196, 0.25);
     z-index: 1;
    }
    
    p{
      margin: 10px 20px 0px;
      font-weight: 500;
      color: #651fac;
    }
  }
 }
  height: 100%;
  width: 100%;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BtnContainer = styled.div`
    @media screen and (max-width:410px){
      margin-top: 1rem;
    }
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      text-decoration: none;
      color: #fff;
    }
  span{
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: default;
  }
  button {
    @media screen and (max-width:410px){
      padding: 0.5rem 0.8rem;
    }
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    /* box-shadow: 0px 13px 24px -7px #81d1ff; */
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;
const BtnBack = styled.div`
    @media screen and (max-width:410px){
      display: none;
    }
    display: flex;
    position: absolute;
    bottom: 30px;
    left: 20px;

    a{
      text-decoration: none;
    }
  span{
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }
  button {
    background: #f774c5;
    border: none;
    padding: 0.7rem 1rem ;
    color: white;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #651fac;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #651fac;
      transform: translateY(-5px);
    }
  }
`;

export default Home;