import './App.css';
import {User} from './User';

function App() {
  const names = ['Pedro','Jake','Jessica','Mike','Dustin', 'Lukas'];

  const users = [
    {name: 'Pedro',age:21},
    {name: 'Jake',age:25},
    {name: 'Jessica',age:45}
  ];

  return (
    <div className='App'>
      {  users.map((user, key)=>{
          return <User name={user.name} age={user.age} />
      })}
    </div>

  );

  /*
  Array   const names = ['Pedro','Jake','Jessica','Mike','Dustin', 'Lukas'];
  return (
    <div className='App'>
      {  names.map((name, key)=>{
          return <h1 key={key}> {name}</h1>
      })}
    </div>

  */

  /*
  Ternary Operators
  <div className='App'> {age>18? <h1>overage</h1>:<h1>underage</h1>}
    <h1 style={{color: !isGreen ?'red': 'green'}}>This has color</h1>
    {isGreen && <button>This is green</button>}
  </div>
  
  */

  /*
  Props Example
  return (
    <div className={styles.App}>
      <User name="Test1" age={23} email="elgarcem@gmail.com" />
      <User name="Test2" age={24} email="elgarcem@gmail.com" />
      <User name="Test3" age={18} email="elgarcem@gmail.com" />
    </div>
  );*/
}

/*const GetName = () => { // normal Function
  return "Maha";
}


const User = (props) => { // Component and need to start with Capital Letter

  const user = (
    <div>
      <h1 className={styles.name}>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
  </div>);
  return <div>{user}</div>;
}*/
export default App;
