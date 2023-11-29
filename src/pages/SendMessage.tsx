import MessageForm from "../components/messageform/messageform";
import { Message } from "../components/messageform/message";
import './Styling/SendMessage.css';
const typing = require('../assets/typing.png');
const SendMessage: React.FC = () => {
    const handleSubmit = (message: Message) => {
        console.log(message);
      };
    return(<div className="sendmessage_page_container">
    <h1 className="sendmessage_page_text_overlay">Send message</h1>
    <img className="typing_image" src={typing} alt="hardworking staff" />
    <div className="sendmessage_form_container">
      <MessageForm onSubmit={handleSubmit}/>
    </div>
  </div>

  )
}

export default SendMessage;