import styled from "styled-components";
import TitleText from "../components/General/Helmet";
import InputBox from "../components/General/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { collectInputs } from "../features/contact/contactSlice";
import { ChangeEvent } from "react";

const ContactUs = () => {
  const { name, email, subject, message } = useSelector(
    (store: RootState) => store.contactStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInputs({ name, value }));
  };

  return (
    <ContactWrapper>
      <TitleText title="Contact Us" />
      <p>What do you want to tell us?</p>
      <InputsWrapper>
        <InputBox
          jobName="Your Name"
          typeName="text"
          inputName="name"
          inputValue={name}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Your Email"
          typeName="email"
          inputName="email"
          inputValue={email}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Subject"
          typeName="text"
          inputName="subject"
          inputValue={subject}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Message"
          typeName="text"
          inputName="message"
          inputValue={message}
          handleChange={handleChange}
        />
        <button>Send Message</button>
      </InputsWrapper>
    </ContactWrapper>
  );
};

export default ContactUs;

const ContactWrapper = styled.main`
  background-color: #fff;
  margin: 2.5rem 4vw;
  padding: 5vh 3vw;
  border-radius: 5px;
`;

const InputsWrapper = styled.form`
  /*  */
`;
