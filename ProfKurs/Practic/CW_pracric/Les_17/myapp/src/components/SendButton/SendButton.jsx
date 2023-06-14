import "./SendButton.css";

export default function SendButton() {
  return (
    <div
      className="SendButton"
      onClick={() => {
        console.log("Click");
      }}
    >
      <i className="fa-regular fa-paper-plane"></i>
    </div>
  );
}