import { ChangeEvent } from "react";
import axios from "axios";
import TitleText from "../components/General/Helmet";
import InputBox from "../components/General/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { clearFields, collectInputs } from "../features/contact/contactSlice";
import { toast } from "react-toastify";
import ContactWrapper from "../StylesWrappers/contactUs/contactUs";

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
      <p>What would you like to tell us?</p>
      <p>
        You would like to make a complaint, suggest additional features or tell
        us how much we have done? Then drop all comments below.👇
      </p>
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
    </ContactWrapper>
  );
};

export default ContactUs;
