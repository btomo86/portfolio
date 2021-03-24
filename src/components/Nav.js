import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link id="#logo" to="/">
        northernCod3r
      </Link>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 10rem;
  /* background: linear-gradient(to right, #43cea2, #185a9d); */
  background: linear-gradient(to right, #606c88, #3f4c6b);
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid #77d0d8;
  font-family: "Lobster", cursive;

  a {
    color: #77d0d8;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
    h1 {
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #b4aee8;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
