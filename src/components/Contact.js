import me from "../me.jpeg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { RiMailSendLine } from "react-icons/ri";

const Projects = () => {
  const [state, handleSubmit] = useForm("xzbknjlq");
  if (state.succeeded) {
    return <p>Thanks for your message. I will respond as soon as I can</p>;
  }
  return (
    <>
      <ImageContainer>
        <img src={me} alt="" />
      </ImageContainer>
      <SocialContainer>
        <a
          href="https://twitter.com/northernCod3r"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a href="https://github.com/btomo86" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/northerncod3r/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </SocialContainer>
      <ContactFormContainer>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Drop me an Email</h2>
          <FormLabel htmlFor="name" required placeholder="John Smith">
            Full name
          </FormLabel>
          <FormInput id="name" type="text" name="name" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <FormLabel htmlFor="email" placeholder="Johnsmith@gmail.com" required>
            Email Address
          </FormLabel>
          <FormInput id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <StyledTextArea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button type="submit" disabled={state.submitting}>
            <RiMailSendLine />
            Submit
          </Button>
        </ContactForm>
      </ContactFormContainer>
    </>
  );
};

const ImageContainer = styled.image`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  img {
    border-radius: 50%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 400px;
  margin: auto;
  border-top: 5px solid #77d0d8;
  border-bottom: 5px solid #77d0d8;
  padding: 10px 0px;
  margin-top: 40px;
  font-size: 50px;
  a {
    text-decoration: none;
    color: #77d0d8;
  }
  a:hover {
    font-size: 60px;
    color: #b4aee8;
  }
`;

const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  width: 100%;
  height: 500px;
  border-radius: 40px solid #77d0d8;
  background: linear-gradient(to right, #606c88, #3f4c6b);
`;

const ContactForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(to right, #606c88, #3f4c6b);
  margin-top: 20px;
  h2 {
    font-size: 30px;
  }
`;

export const StyledTextArea = styled.textarea`
  height: 100px;
  border: solid 1px #44cfcb;
  background: none;
  margin-top: 15px;
  padding: 10px;
  border-radius: 6px;
  font-weight: 200;
  font-size: 18px;
  width: 100%;
  font-size: 25px;
`;

const FormInput = styled.input`
  height: 40px;
  border: solid 1px #44cfcb;
  background: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 200;
  font-size: 25px;
  width: 100%;
  margin: 10px;
`;
const Button = styled.button`
  text-decoration: none;
  width: 100%;
  height: 60px;
  background-color: #44cfcb;
  border-radius: 4px;
  border: solid 1px #44cfcb;
  font-size: 22px;
  font-weight: 200;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #b4aee8;
    color: white;
  }
`;

const FormLabel = styled.label`
  font-size: 18px;
  margin: 10px;
  color: #77d0d8;
`;
export default Projects;
