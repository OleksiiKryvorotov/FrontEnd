import "./SendButton.css";

export default function SendButton({inputValue, setInputValue, add_message}) {
  return (
    <div
      className="SendButton"
      onClick={() => {
        add_message(inputValue)
        console.log(inputValue);
        setInputValue("")
      }}
    >
      <i className="fa-regular fa-paper-plane"></i>
    </div>
  );
}