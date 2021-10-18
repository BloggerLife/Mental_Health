import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <LogoIcon />
          <LinkWrapper>
            <button className="sign"><Link className="sign" to="/signUp">Sign Up</Link></button>
          </LinkWrapper>
      </Container>
    </Nav>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 2rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const LinkWrapper = styled.div`
  button{
    font-size: 0.8rem;
    background: #f774c5;
    border: none;
    padding: 0.8rem 1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin-left: 0.5rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #ecb6d7;
      transform: translateY(-5px);
    }
    a{
      text-decoration: none;
      color: #fff;
    }
    @media (max-width: 670px) {
      /* width: 100%; */
      padding: 0.3;
    }
  }
`;

export default Navbar;