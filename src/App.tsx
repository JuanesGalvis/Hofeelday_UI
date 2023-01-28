import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { CreateNewTask } from './components/CreateTask';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <CreateNewTask />
      <Tasks/>
    </div>
  )
}

export default App
