import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import bg from "../assets/bg.png";

const QuizInstructions = () => (
    <Container bg={bg}>
        <Wrapper>
                <Content>
                    <div className="content">
                    <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
                    <div className="container">
                        <h1>How does it Work</h1>
                        <div className="section">
                            <h4>The following assessment gives you information to help you understand and improve your mental health.</h4>
                            <p className="p1">Please Note: This screaning tool is meant to be a quick snapshot of your mental health. If your results indicate that you may be experiencing symptoms of mental illness, consider sharing your results with someone close. A mental health practitioner can give you a full assessment and may give you a full diagnosis of the problem issue.</p>
                            <p className="p2">If your test score is more than half (1/2) of the answered question you need to visit a mental health practitioner and you might consider registering for our Mental Health Newsletter.</p>
                        </div>           
                        <div className="links">
                            <span className="left"><Link to="/">Decline</Link></span>
                            <span className="right"><Link to="/test">Continue</Link></span>
                        </div>
                    </div>
                    </div>
                </Content>
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
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width:410px){
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ bg }) => bg});
    background-repeat: repeat-x;
    background-position: center;
    height: 140vh;
  }
`;
const Wrapper = styled.div`
  @media screen and (max-width:410px){
    display: block;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    height: 100%;
    width: 100%;
  }
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Content = styled.div`
   height: 40%;
   width: 60%;
   margin: auto;
   margin-top: 140px;
   display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width:410px){
        margin-top: 80px;
        width: 100%;
    }

   .section{
    height: 90%;
    width: 60vw;
    margin-top: 40px;
    border-radius: 6px;
    box-shadow: 0px 13px 24px -7px #651fac;
    background-color: rgba(247, 115, 196, 0.5);
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
     -webkit-backdrop-filter: blur(35px);
     backdrop-filter: blur(35px);
     background-color: rgba(247, 115, 196, 0.25);
     z-index: 1;
    }
    }

   h1{
       margin: 20px;
       font-size: 3.5rem;
       font-weight: 900;
       color: #3c0473;
       @media screen and (max-width:410px){
            font-size: 4.8rem;
            font-weight: 900;
        }
    }
    @media screen and (max-width:970px){
        h1{
       margin: 20px;
       font-size: 3rem;
       font-weight: 700;
       color: #3c0473;
        }
    }
    @media screen and (max-width:760px){
        h1{
        padding-top: 50px;
       margin: 20px;
       font-size: 3rem;
        }
    }
    @media screen and (max-width:740px){
        h1{
        padding-top: 70px;
       margin: 20px;
       font-size: 2.5rem;
        }
    }
    @media screen and (max-width:630px){
        h1{
        padding-top: 100px;
       margin: 20px;
       font-size: 1.9rem;
        }
        .section{
            margin-top: 0px;
            overflow: scroll;
        }
    }
    @media screen and (max-width:510px){
        h1{
        padding-top: 130px;
       margin: 20px;
       font-size: 1.8rem;
        }
    }
    @media screen and (max-width:451px){
        h1{
        padding-top: 160px;
       font-size: 2.5rem;
        }
    }

   h4{
       margin: 20px 20px;
       padding-top: 30px;
   }
   @media screen and (max-width:451px){
        h1{
        padding-top: 160px;
        }
        .section h4{
       margin: 20px 20px;
       padding-top: 0px;
    }
    @media screen and (max-width:420px){
        h1{
        padding-top: 180px;
        }
    }
    @media screen and (max-width:410px){
        h1{
        padding-top: 200px;
        font-size: 1.3rem;
        }
    }
    @media screen and (max-width:362px){
        .content{
          margin-top: 100px;
        }
    }
    }
   p {
    margin: 20px 20px;
    
   }
   .p2{
    padding-bottom: 30px;
   }
   .links{
        @media screen and (max-width:410px){
            margin-top: 40px;
        }
        margin-top: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
       .left{
           margin: 10px 30px;
           background: #f774c5;
           border: none;
           padding: 0.9rem 1.1rem;
           color: #fff;
           border-radius: 1rem;
           box-shadow: 0px 13px 24px -7px #f774c5;
           transition: all 0.3s ease-in-out;
           margin: 0.5rem;
           font-size: 0.8rem;
           cursor: pointer;
           &:hover {
             box-shadow: 0px 17px 16px -11px #f774c5;
             transform: translateY(-5px);
            }
            a{
                color: #fff;
            }
        }
       .right{
           margin: 10px 30px;
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
                color: #fff;
            }
        }
   }
`;


export default QuizInstructions;