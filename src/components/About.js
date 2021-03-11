import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Title>About me</Title>

      <Container>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          laboriosam non ducimus minima quam maxime natus consequuntur explicabo
          voluptatem asperiores, accusantium esse saepe, doloribus perferendis.
          Eaque quae corrupti est ab. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsum laboriosam non ducimus minima quam maxime
          natus consequuntur explicabo voluptatem asperiores, accusantium esse
          saepe, doloribus perferendis. Eaque quae corrupti est ab.
        </Paragraph>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  color: #77d0d8;
  text-align: center;
  padding-top: 5rem;
  font-size: 3rem;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`;

const Container = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media only screen and (max-width: 400px) {
    max-width: 300px;
  }
`;

export default About;
