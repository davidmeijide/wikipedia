import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () =>{
    let offset = page*10;
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`)
    const data = await response.json()
    setResults(data.query.search)
  }
  
  useEffect(() => {
    if(searchQuery !== "") {
      fetchData()
    }
  }, [searchQuery,page])

  return(
    <>
      <h1>React Wikipedia Search</h1>
      <SearchBar setSearchQuery={setSearchQuery}/>

      {results.length!= 0?
      <SearchResults results={results} page={page} setPage={setPage} />
        :null
      }
    </>
  )

}

