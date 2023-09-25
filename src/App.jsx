import './App.css';
import CardList from './components/CardList';
import clubData from './components/clubData.json';

const App = () => {
    const clubList = clubData;

  return (
    <div className="App">
      <h1>Clubs at Rowan University</h1>
      <CardList clubs = {clubList} />
    </div>
  )
}

export default App