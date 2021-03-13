import cookbook from "../cookbook.png";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiStyledComponents } from "react-icons/si";
import { DiMongodb, DiGit, DiTerminal } from "react-icons/di";

const Projects = () => {
  return (
    <ProjectContainer>
      <img alt="" src={cookbook} width="600px" />
      <HeaderContainer>
        <h3>Cook Book</h3>
        <h4>Group Project | 2 weeks</h4>
        <IconContainer>
          <FaReact /> <SiJavascript /> <DiMongodb /> <SiStyledComponents />
        </IconContainer>
        <InnerRowContainer>
          <p>
            Cook Book is a recipe app where users can store recipes Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Numquam optio deserunt
            eos, obcaecati illo voluptates quidem inventore enim magni dolor
            labore voluptatibus eligendi animi ea eum nihil distinctio maiores
            quos?
          </p>
        </InnerRowContainer>
        <InnerRowContainer>
          <Button>
            <a href="https://spoondr.herokuapp.com/">
              <GrPersonalComputer /> Live Site
            </a>
          </Button>
          <Button>
            <a href="https://github.com/btomo86/cookbook">
              <AiFillGithub /> Git Hub
            </a>
          </Button>
        </InnerRowContainer>
      </HeaderContainer>
    </ProjectContainer>
  );
};
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* margin: 5px 0 5px 0; */
  margin: auto;

  height: 600px;
  width: 100%;
  h3 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 300;
  }

  h4 {
    font-size: 30px;
    margin-top: 0;
    font-weight: 300;
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
  /* background-color: #b4aee8; */

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
`;

export default Projects;
