import "./SearchResultsList.css";

const SearchResultsList = ({results}) => {
    return (
        <div className = "results-list">
            {results.map((result, id)=> {
                return <div key = {id}>{result.title}</div>
            })}
         
        </div>
    )
}

export default SearchResultsList;