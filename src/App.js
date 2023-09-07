import './App.css';
import GoalContainer from './containers/GoalContainer';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import SearchResultsList from './components/SearchResultsList';

function App() {

  const [results, setResults] = useState([]);
  return (

    <>
      <div className= "header"></div>
      <div className = "search-bar-container">
        <SearchBar setResults = {setResults}/>
        <SearchResultsList results = {results}/>
      </div>
        


      <GoalContainer />
    
    </>


  );
}

export default App;
