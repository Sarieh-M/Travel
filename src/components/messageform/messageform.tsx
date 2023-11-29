import React, { useState } from "react";
import { Message } from "./message";
import './messageform.css';
interface MessageFormProps {
  onSubmit: (message: Message) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState<Message>({
    fullName: "",
    email: "",
    subject: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
    setMessage({
      fullName: "",
      email: "",
      subject: "",
      details: "",
    });
  };

  return (
    <form className="send-message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={message.fullName}
        onChange={handleChange}
        placeholder="Full name"
      />
      <input
        type="email"
        name="email"
        value={message.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="subject"
        value={message.subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <textarea
        name="details"
        value={message.details}
        onChange={handleChange}
        placeholder="Details"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MessageForm;
