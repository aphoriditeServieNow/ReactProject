import './App.css';

function App() {
  

  return (
    <div className="App">
      <User name="Test1" age={23} email="elgarcem@gmail.com" />
      <User name="Test2" age={24} email="elgarcem@gmail.com" />
      <User name="Test3" age={18} email="elgarcem@gmail.com" />
    </div>
  );
}

const GetName = () => { // normal Function
  return "Maha";
}


const User = (props) => { // Component and need to start with Capital Letter

  const user = (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
  </div>);
  return <div>{user}</div>;
}
export default App;
