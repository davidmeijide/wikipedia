import { useState, useEffect } from "react";


export default function SearchResults({ results, page, setPage }) {
    return (
        <ul>
            {results.map((result) => (
                <li key={result.pageid} >
                    <h3>{result.title}</h3>
                    {/* It is called dangerous not without a reason!  */}
                    <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                </li>
            ))}
            {page != 1 ?
                <button onClick={() => setPage(page - 1)}>Previous</button>
                : null
            }
            <button onClick={() => setPage(page + 1)}>Next</button>
        </ul>
    )
}