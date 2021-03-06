import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../components/Animation";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaCss3Alt, FaSass, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiVisualstudio,
  SiMicrosoftsqlserver,
  SiDocker,
} from "react-icons/si";
import { DiHtml5, DiGit, DiTerminal, DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title variants={titleAnim}>About me</Title>

      <Container>
        <Paragraph>
          <p>
            I am a full stack JavaScript developer who has graduated from a part
            time Software Engineer FastTrack programme held by Manchester Codes.
            Having had a varied career to date across sport and a family
            business I have finessed my communication and soft skills and I have
            recently decided to pursue my passion in Front End Software
            development. I am now looking for my first full-time development
            role with mentorship and room to grow! I really love the creativity
            and visual aspects of Front End and would like the opportunity to
            further develop my skills and learn more about backend development.
            When I am not developing my skills, I can be found spending time
            with family often in nature exploring and sharing my passion for
            travel with my two boys. I am at my happiest when strapped to a
            snowboard throwing myself down a mountain.
          </p>
        </Paragraph>
      </Container>
      <div>
        <Title variants={titleAnim}>My Skills</Title>
      </div>

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
        <SkillDiv>
          <DiMongodb size="2x" />
          <span>MongoDB</span>
        </SkillDiv>
        <SkillDiv>
          <SiMicrosoftsqlserver size="2x" />
          <span>SQL</span>
        </SkillDiv>
        <SkillDiv>
          <GrMysql size="2x" />
          <span>MYSQL</span>
        </SkillDiv>
        <SkillDiv>
          <SiDocker size="2x" />
          <span>Docker</span>
        </SkillDiv>
      </SkillContainer>
    </motion.div>
  );
};

const Title = styled(motion.h1)`
  color: #77d0d8;
  text-align: center;
  padding-top: 1rem;
  font-size: 3rem;
  padding-bottom: 1rem;

  /* background-color: blue; */
`;

const Paragraph = styled.p`
  display: flex;
  width: 80%;
  padding: 0;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* background-color: yellow; */
  @media only screen and (max-width: 736px) {
    max-width: 400px;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 600px;
  margin: auto;
  margin-bottom: 250px;
  /* background: pink; */

  @media (max-width: 667px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 360px;
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

export default About;
