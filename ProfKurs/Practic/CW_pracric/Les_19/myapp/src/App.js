import "./App.css";

const Text = () => {
  return <p>Text</p>;
};

const Avatar = () => {
  return (
    <img
      src="https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg"
      style={{ width: "40px", height: "40px", borderRadius: "50%" }}
    />
  );
};
//Создание компонентов прямо здесь в App.js
//Создать компонент, который оборачивает все существующие уже компоненты:

const YellowWrapper = (props) => {
  return (
    <div
       style={{      
           padding: "10px",
           borderRadius: "13px",
           border: "2px solid yellow",    
           display: "inline-block", 
        }}            
    >
      {props.children} 
    </div>
  )
}
function App() {
  return (
    <div>
      <YellowWrapper>
        <Avatar />
      </YellowWrapper>
      <YellowWrapper>
        <Text />
      </YellowWrapper>
    </div>
  );
}

export default App;