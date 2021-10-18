import bg from "../assets/bg-01.jpg";
import styled from "styled-components";
import "../styles/newUser.css";
import Axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const NewUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");


  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      name : name,
      surname : surname,
      email : email, 
    })
  };
    // const validate = () => {
    //   const email = document.getElementById("email");
    //   if (email !== " ") {
    //       addUser();
    //       alert("You have successfully registered");
    //   } else {
    //       alert("Not Registered!")
    //   }
    // }
    return ( 
        <Container bg={bg}>
            <div className="container"> 
                <h1> <span>Sign Up</span> For Our NewsLetter</h1>
            <Wrapper>
                <div className="newUser">
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Name</label>
                            <input
                                type="text" placeholder="Zain"
                                onChange={(event) => {
                                setName(event.target.value);
                                }}
                            required/>
                        </div>
                        <div className="newUserItem">
                            <label>Surname</label>
                            <input
                                type="text" placeholder="Mika"
                                onChange={(event) => {
                                setSurname(event.target.value);
                                }}
                            required/>
                        </div>
                        <div className="newUserItem">
                            <label>Email</label>
                            <input
                                type="email" placeholder="zainmika@gmail.com" id="email"
                                onChange={(event) => {
                                setEmail(event.target.value);
                                }}
                            required/>
                        </div>
                        <button onClick={addUser} className="newUserButton">Sign Up</button>
                    </form>
                </div>
            </Wrapper>
            <BtnBack>
                    <div className="cont">
                      <button><Link className="back-button" to="/"><span>Back</span></Link></button>
                    </div>
              </BtnBack>
            </div>
        </Container>
    );
}
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .container {
      max-width: 1000px;
      height: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
        z-index: 1;
        h1{
            span{
                color: #651fac;
            }
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 2.1rem;
            font-weight: 900;
            color: #3c0473;
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
 .signUp{
     padding-bottom: 90px;
 }
 @media screen and (max-width:1025px){
      .container span{
        padding-left: 60px;
      }
    }
    @media screen and (max-width:960px){
      .container span{
        padding-left: 100px;
      }
    }
    @media screen and (max-width:650px){
      .container h1{
        font-size: 1.6rem;
        font-weight: 800;
        top: 40px;
      }
    }
    @media screen and (max-width:412px){
      .container{
        h1{
        position: relative;
        font-size: 1.6rem;
        font-weight: 700;
        top: 100px;
        left: -2px;
        }
        span{
          position: absolute;
          top: -24px;
          left: -40px;
        }
      } 
    }
    @media screen and (max-width:380px){
      .container{
        height: 100vh;
        h1{
        position: relative;
        font-size: 1.3rem;
        font-weight: 700;
        top: 60px;
        left: -6px;
        }
        span{
          position: absolute;
          top: -24px;
          left: -40px;
        }
      } 
    }
`;

const Wrapper = styled.div`

    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 320px;
    
    .newUser{
        position: absolute;
        margin: 20px;
        padding: 10px 0px 30px 0px;
        border-radius: 6px;
        box-shadow: 0px 13px 24px -7px #3c0473;
        background-color: rgba(255, 255, 255, 0.5);
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(15px);
            backdrop-filter: blur(15px);
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
    .newUserItem{
        padding: 0px 40px;
    }
    button{
        position: absolute;
        margin-top: 42px;
        background: #651fac;
        border: none;
        color: #fff;
        border-radius: 1rem;
        box-shadow: 0px 13px 24px -7px #651fac;
        transition: all 0.3s ease-in-out;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 17px 16px -11px #651fac;
            transform: translateY(-5px);
        }
    }
    @media screen and (max-width:1025px){
      .newUser{
        right: 20px;
      }
    }
    @media screen and (max-width:960px){
      .newUser{
        right: 40px;
      }
    }
    @media screen and (max-width:810px){
      .newUser{
        right: 70px;
      }
    }
    @media screen and (max-width:750px){
      .newUser{
        right: 100px;
      }
    }
    @media screen and (max-width:690px){
      .newUser{
        right: 140px;
      }
    }
    @media screen and (max-width:520px){
        .newUser{
        right: 180px;
      }
    }
    @media screen and (max-width:412px){
      .newUserItem{
        padding: 0px 40px;
        margin-right: 0px;
      }
      .newUser{
        right: 28px;
      }
    }
    @media screen and (max-width:380px){
      .newUserItem{
        padding: 0px 20px;
        margin-right: 0px;
      }
      .newUser{
        right: 20px;
      }
    }
`;
const BtnBack = styled.div`
    display: flex;
    position: absolute;
    bottom: 30px;
    left: 20px;
    @media screen and (max-width:380px){
      display: none;
    }
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
 
export default NewUser;