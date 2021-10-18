import { Link } from 'react-router-dom';
import styled from "styled-components";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";


const Read = () => {
    return ( 
        <Container>
            <div className="container"> 
              <Wrapper>
                <h1>Why Mental Health?</h1>
                <Img1 src={image1} alt="@gouthamgtronics" />
                <Content>
                    <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
                    Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including: <br/>
                     - Biological factors, such as genes or brain chemistry <br/>
                     - Life experiences, such as trauma or abuse <br/>
                     - Family history of mental health problems <br/>
                    Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>For more information about this App please do not hesitate to contact <a href="mailto:macarnoldnenyasha@gmail.com">Zain</a> via email</p>
                  </p>
                </Content>
                <Img2 src={image2} alt="@gouthamgtronics" />
              </Wrapper>
              <BtnContainer>
                <div className="cont">
                 <button><Link className="back-button" to="/"><span>Back</span></Link></button>
                </div>
              </BtnContainer>
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
    background-color: white;
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
      z-index: 2;
      @media screen and (max-width:410px){
      height: 100%;
      width: 100%;  
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
`;

const Wrapper = styled.div`

    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    @media screen and (max-width:410px){
    margin: 0px;
    }
    h1{
      position: absolute;
      color: #3c0473;
      top: 10px;
      @media screen and (max-width:410px){
        font-size: 20px;
        z-index: 1;
        top: 20px;
      }
    }

`;
const Img1 = styled.img`
  position: absolute;
  right: 740px;
  z-index: 0;
  @media screen and (max-width:410px){
    left: 1%;
    height: 25%;
    top: 20%;
  }
`;
const Img2 = styled.img`
  position: absolute;
  left: 700px;
  z-index: 0;
  @media screen and (max-width:410px){
    left: 70%;
    height: 10%;
    top: 2%;
  }
`;
const Content = styled.div`
   display: absolute;
   height: 80vh;
   width: 60vw;
   margin: auto;
   border-radius: 6px;
   box-shadow: 0px 13px 24px -7px #3c0473;
    background-color: rgba(255, 255, 255, 0.25);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.25);
    z-index: 1;
  }
  p{
    padding: 20px;
  }
  @media screen and (max-width:410px){
    overflow: scroll; 
    height: 80vh;
    top: 10%;
    margin: 0px;
  }
`;
const BtnContainer = styled.div`
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
    @media screen and (max-width:410px){
      display: none;
    }
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
 
export default Read;