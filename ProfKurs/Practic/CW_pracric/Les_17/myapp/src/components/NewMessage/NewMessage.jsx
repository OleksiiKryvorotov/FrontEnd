import SendButton from "../SendButton/SendButton";
import "./NewMessage.css";
import { useState } from "react";

export default function NewMessage({chatsMessages, setChatMessages}) {
  const [inputValue, setInputValue] = useState("")

  const add_message = input_value => {
    const message_item = {
        id: Date.now(),
        text: input_value,
    }
    setChatMessages([...chatsMessages, message_item])
console.log(message_item);
  }

  return (
    <div className="NewMessage">
      <div className="MessageWrapper">
        <i className="fa-regular fa-face-smile"></i>
        <input
         placeholder="Message"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)          
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setInputValue('')
            }
          }}
        />
        <i className="fa-solid fa-paperclip"></i>
      </div>
      <SendButton inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}