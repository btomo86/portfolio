import cookbook from "../cookbook.png";
import styled from "styled-components";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiStyledComponents } from "react-icons/si";
import { DiMongodb, DiGit } from "react-icons/di";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/Animation";

import weather from "../weather.png";
import nasa from "../nasa.png";

const Projects = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ProjectContainer>
        <img alt="" src={cookbook} height="500px" />
        <HeaderContainer>
          <h3>Cook Book</h3>
          <h4>Group Project | 2 weeks</h4>
          <IconContainer>
            <FaReact /> <SiJavascript /> <DiMongodb /> <SiStyledComponents />
            <DiGit /> <AiFillGithub />
          </IconContainer>
          <InnerRowContainer>
            <p>
              Cook Book is a recipe app where users can store recipes Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Numquam optio
              deserunt eos, obcaecati illo voluptates quidem inventore enim
              magni dolor labore voluptatibus eligendi animi ea eum nihil
              distinctio maiores quos?
            </p>
          </InnerRowContainer>
          <InnerRowContainer>
            <Button>
              <a
                href="https://cookbook-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GrPersonalComputer /> Live Site
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/btomo86/cookbook"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub /> Git Hub
              </a>
            </Button>
          </InnerRowContainer>
        </HeaderContainer>
      </ProjectContainer>
      <ProjectContainer>
        <img alt="" src={weather} height="500px" />
        <HeaderContainer>
          <h3>Weather App</h3>
          <h4>Manchester Codes Project | 2 weeks</h4>
          <IconContainer>
            <FaReact /> <SiJavascript /> <FaCss3Alt />
          </IconContainer>
          <InnerRowContainer>
            <p>
              Weather app is a 2 week project with manchester codes to learn the
              fundermentals of React.The app is designed to view a 5 day
              forecast of cities in the Uk and display a more detailed forecast
              for each day
            </p>
          </InnerRowContainer>
          <InnerRowContainer>
            <Button>
              <a
                href="https://weather-app2-btomo86.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GrPersonalComputer /> Live Site
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/btomo86/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub /> Git Hub
              </a>
            </Button>
          </InnerRowContainer>
        </HeaderContainer>
      </ProjectContainer>
      <ProjectContainer>
        <img alt="" src={nasa} height="500px" />
        <HeaderContainer>
          <h3>React Technical Test</h3>
          <h4>Manchester Codes Project | 1 week</h4>
          <IconContainer>
            <FaReact /> <SiJavascript /> <FaCss3Alt /> <DiGit />
            <AiFillGithub />
          </IconContainer>
          <InnerRowContainer>
            <p>
              React Techical Test was a Manchester Codes project designed to
              help us prepare effectively for a real-world tech test. The search
              function within the app can send a request to the Nasa API for a
              specific image which in turn will display all images linked to the
              original search
            </p>
          </InnerRowContainer>
          <InnerRowContainer>
            <Button>
              <a
                href="https://cookbook-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <GrPersonalComputer /> Live Site
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/btomo86/tech-test"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub /> Git Hub
              </a>
            </Button>
          </InnerRowContainer>
        </HeaderContainer>
      </ProjectContainer>
    </motion.div>
  );
};
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 100px auto;
  width: 100%;
  h3 {
    font-size: 40px;

    font-weight: 300;
  }

  h4 {
    font-size: 30px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    width: 290px;
    img {
      height: 200px;
      padding: 5px 0px;
    }
    h3 {
      font-size: 30px;
      padding: 5px 0px;
    }

    h4 {
      font-size: 20px;
      padding: 5px 0px;
    }
  }

  @media (width: 414px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    img {
      height: 200px;
    }
    h3 {
      font-size: 20px;
      /* padding: 5px 0px; */
    }

    h4 {
      font-size: 15px;
      /* padding: 5px 0px; */
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s ease;
  color: #2e2e2e;
  border-radius: 5px;
  background-color: #44cfcb;

  &:hover {
    background: #b4aee8;
    color: white;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    width: 150px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 500px;
  @media (min-width: 375px) and (max-width: 414px) {
    width: 300px;
    margin: auto;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 5px;
  margin-top: 10px;
  font-size: 40px;
  color: #77d0d8;
  width: 400px;
  align-content: center;
  @media (width: 568px) {
    font-size: 20px;
    margin: auto;
    margin-top: 5px;
  }
`;

export default Projects;
