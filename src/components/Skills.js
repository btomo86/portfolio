import styled from "styled-components";
import { FaReact, FaCss3Alt, FaSass, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiVisualstudio } from "react-icons/si";
import { DiHtml5, DiGit, DiTerminal } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <h2>My Skills</h2>
      <SkillContainer>
        <SkillDiv>
          <FaReact size="2x" />
          <span>React</span>
        </SkillDiv>

        <SkillDiv>
          <SiJavascript size="2x" />
          <span>JavaScript</span>
        </SkillDiv>
        <SkillDiv>
          <FaCss3Alt size="2x" />
          <span>CSS</span>
        </SkillDiv>
        <SkillDiv>
          <DiHtml5 size="2x" />
          <span>HTML</span>
        </SkillDiv>
        <SkillDiv>
          <FaSass size="2x" />
          <span>Sass</span>
        </SkillDiv>
        <SkillDiv>
          <FaNodeJs size="2x" />
          <span>Node.js</span>
        </SkillDiv>
        <SkillDiv>
          <FaNpm size="2x" />
          <span>NPM</span>
        </SkillDiv>
        <SkillDiv>
          <SiPostgresql size="2x" />
          <span>PostgreSQL</span>
        </SkillDiv>
        <SkillDiv>
          <AiFillGithub size="2x" />
          <span>Github</span>
        </SkillDiv>
        <SkillDiv>
          <DiGit size="2x" />
          <span>Git</span>
        </SkillDiv>
        <SkillDiv>
          <DiTerminal size="2x" />
          <span>CLI</span>
        </SkillDiv>
        <SkillDiv>
          <SiVisualstudio size="2x" />
          <span>Vs code</span>
        </SkillDiv>
      </SkillContainer>
    </>
  );
};

export default Skills;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 600px;
  margin: auto;
  margin-top: 100px;
  @media screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 400px;
  }
`;

const SkillDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color: #77d0d8;
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    height: 80px;
    width: 80px;
  }
`;
