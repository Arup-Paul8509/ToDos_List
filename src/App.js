//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
function App() {
  const onDelete=()=>{
    console.log("I'm OnDelete")
  }
  let todos=[
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done 1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done 2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done 3"
    }
  ]
  return (
    <>
      <Header title="My ToDos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
