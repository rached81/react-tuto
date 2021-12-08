import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Form from './components/form/Form';

function App() {
  const  tasks = [
    {
        id: 1,
        title: "T1",
        duration: 25,
        type: "Type 1",
        date: "05-05-2022"
    },
    {
        id: 2,
        title: "T2",
        duration: 25,
        type: "Type 2",
        date: "05-05-2022"
    },
    {
        id: 3,
        title: "T3",
        duration: 25,
        type: "Type 2",
        date: "05-05-2022"
    },
    {
        id: 4,
        title: "T4",
        duration: 25,
        type: "Type 3",
        date: "05-05-2022"
    }
]
  return (
    <div className="App">
    <Form />
     <List tasks = {tasks}/>
    </div>
  );
}

export default App;
