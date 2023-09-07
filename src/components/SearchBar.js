import {FaSearch} from "react-icons/fa"
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({setResults}) => {

    const [input, setInput] = useState ("");


    const fetchData = async (value) => {
        const response = await fetch("https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true")
        const data = await response.json();
        const results = data.filter((goal)=> {
            return (
                value && 
                goal.title.includes(value)
            )
        });
        setResults(results);

    }


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);

    }


    return (
        <div className = "input-wrapper">
            <FaSearch id ="search-icon"/>
            <input 
                placeholder="Type to search..."
                value ={input}
                onChange = {(e) => handleChange(e.target.value)}
            />
        
        </div>
    )
}

export default SearchBar;