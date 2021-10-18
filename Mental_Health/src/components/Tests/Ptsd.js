import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function App() {
	const questions = [
		{
			questionText: 'Have you ever been in a serious car accident, or serious accident at work or somewhere else?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you ever been in a major natural disaster, such as a fire, tornado, hurricane, flood, or earthquake?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you been constantly on guard, watchful, or easily startled?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you ever felt numb or detached from others, activities, or your surroundings?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you ever had a life-threatening illness, such as cancer, a heart attack, leukemia, AIDS, multiple sclerosis, and so forth?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you ever been attacked, beaten up, or mugged by anyone, including friends, family members, or strangers?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},
		{
			questionText: 'Have you ever been in any other situation in which you were seriously injured or in which you feared you might be seriously injured or killed?',
			answerOptions: [
				{ answerText: 'Never', isPositive: false },
				{ answerText: 'Once', isPositive: true },
				{ answerText: 'More than once', isPositive: true },
				{ answerText: 'I do not remember', isPositive: false },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [register, setRegister] = useState(false);

	const handleAnswerOptionClick = (isPositive) => {
		if (isPositive) {
			setScore(score + 1);
		}

		const decide = () => {
			if (score>= questions.length/2) {
				setRegister(true)
				alert("Your score is higher than normal. Please consider registering for the NewsLetter");
			}else{
				setRegister(false)
				alert("You have no symptoms of PTSD");
			}
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setTimeout( ()=> decide(), 2000)
		}
	};

	//Styles
	const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

	.wrap{
		@media screen and (max-width:410px){
      		display: block;
    	}
	}

    .container {
		@media screen and (max-width:410px){
			width: 250px;
    	}
		font-family: "Verdana", cursive, sans-serif;
  		color: #ffffff;
		background-color: #252d4a;
  		width: 450px;
  		min-height: 200px;
  		height: min-content;
  		border-radius: 15px;
  		padding: 20px;
  		box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  		display: flex;
  		justify-content: space-evenly;
        z-index: 2;
		.score-section {
  			display: flex;
  			font-size: 24px;
  			align-items: center;
		}
		.question-section {
  			width: 100%;
  			position: relative;
		}
		.question-count {
  			margin-bottom: 20px;
		}

		.question-count span {
  			font-size: 28px;
		}

		.question-text {
  			margin-bottom: 12px;
		}
		.answer-section {
  			width: 100%;
  			display: flex;
  			flex-direction: column;
  			justify-content: space-between;
		}

		button {
  			width: 100%;
  			font-size: 16px;
  			color: #ffffff;
  			background-color: #252d4a;
  			border-radius: 15px;
  			display: flex;
  			padding: 5px;
  			justify-content: flex-start;
  			align-items: center;
  			border: 5px solid #234668;
  			cursor: pointer;
		}

		.timer-text {
  			background: rgb(230, 153, 12);
  			padding: 15px;
  			margin-top: 20px;
  			margin-right: 20px;
  			border: 5px solid rgb(255, 189, 67);
  			border-radius: 15px;
  			text-align: center;
		}
		button:hover {
  			background-color: #555e7d;
		}

		button:focus {
 			outline: none;
		}

		button svg {
  			margin-right: 5px;
		}
    }
  .container::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(93,84,240,0.5);
  background: -webkit-linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
  background: -o-linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
  background: -moz-linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
  background: linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));
  pointer-events: none;
 }
  .links{
        margin-top: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
		z-index: 3;
        a{
            text-decoration: none;
        }
       .left{
			@media screen and (max-width:410px){
				padding: 0.7rem 0.8rem;
    		}
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
			@media screen and (max-width:410px){
				padding: 0.7rem 0.8rem;
    		}
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
	return (
		// <div className='app'>
		<Container>
			<div className="container">
			<div className="wrap">
			{showScore ? (
				<div className='score-section'>
					Your score is {score} out of {questions.length}
					{register}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isPositive)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			<div className="links">
                <span className="left"><Link to="/test">I'm Good</Link></span>
                <span className="right"><Link to="/signUp">Register</Link></span>
            </div>
			</div>
			</div>
		</Container>
	);
}
