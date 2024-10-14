import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import DataFetcher from './components/DataFetcher';
import './App.css'

function App() {
  return (
    <>
      <Greeting name="World" />
      <Counter />
      <UserCard name='Alice' age={30}/>
      <UserCard/>
      <DataFetcher/>
    </>
  )
}

export default App
