import { ChangeEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import TitleText from "../components/General/Helmet";
import InputBox from "../components/General/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { clearFields, collectInputs } from "../features/contact/contactSlice";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { users } = useSelector((store: RootState) => store.contactStore);

  const { name, email, subject, message } = users;

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInputs({ name, value }));
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("No field should be empty");
    } else {
      try {
        await axios.post("http://localhost:5000/contactMe", users);
        toast.success("Message Sent");
        dispatch(clearFields());
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  return (
    <ContactWrapper>
      <TitleText title="Contact Us" />
      <p>What do you want to tell us?</p>
      <InputsWrapper>
        <div className="name__email__con">
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
        </div>
        <InputBox
          jobName="Subject"
          typeName="text"
          inputName="subject"
          inputValue={subject}
          handleChange={handleChange}
        />
        <div className="message-con">
          <label htmlFor="">Message</label>
          <br />
          <textarea
            cols={30}
            rows={10}
            name="message"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button onClick={handleSubmit}>Send Message</button>
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

  .name__email__con {
    display: flex;
    justify-content: space-between;
  }

  .name__email__con div {
    width: 49%;
  }

  @media screen and (max-width: 650px) {
    .name__email__con {
      flex-direction: column;
    }
    .name__email__con div {
      width: 100%;
    }
  }
`;

const InputsWrapper = styled.form`
  input {
    height: 40px;
    width: 100%;
    font-size: 18px;
    padding-left: 10px;
  }

  textarea {
    width: 100%;
    font-size: 18px;
    padding: 10px;
  }
`;
