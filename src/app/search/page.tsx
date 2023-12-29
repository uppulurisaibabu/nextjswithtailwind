// "use client"
// import React, { useState, useEffect } from 'react';
// import Sidebar from '../sidebar';

// interface SearchResult {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface SearchHistoryItem {
//   query: string;
//   results: SearchResult[];
// }

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [history, setHistory] = useState<SearchHistoryItem[]>([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${query}`);
//       const data: SearchResult[] = await response.json();
//       setResults(data);

//       // Add the current search to the history
//       const updatedHistory = [
//         { query, results: data },
//         ...history.slice(0, 2), // Keep the history limited to the last 3 searches
//       ];
//       setHistory(updatedHistory);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     // Clear results when the query changes
//     setResults([]);
//   }, [query]);

//   return (
    
//     <main>
//    <Sidebar />
   
    
//     <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-gray-50 border-t border-gray-300">
//       {results.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">Search Results:</h2>
//           <ul>
//             {results.map((result) => (
//               <li key={result.id} className="my-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
//                 <h3 className="text-blue-500 text-lg">{result.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300">{result.body}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {history.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">Search History:</h2>
//           <ul>
//             {history.map((item, index) => (
//               <li key={index} className="my-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
//                 <h3 className="text-blue-500 text-lg">Query: {item.query}</h3>
//                 <ul>
//                   {item.results.map((result) => (
//                     <li key={result.id}>
//                       <p className="text-gray-700 dark:text-gray-300">{result.title}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className='bg-white'>
//       <form className="mt-4 flex items-center pt-9">
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Tell me what do you want?"
//             id="voice-search"
//             className="bg-white-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="absolute inset-y-0 right-0 flex items-center pr-6"
//             onClick={handleSearch}
//           >
//             <svg
//               className="w-6 h-6 text-gray-800 dark:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 16 20"
//             >
//               {/* ... (unchanged) */}
//             </svg>
//           </button>
//           </div>
        
//       </form>
//       </div>
//     </div>
//     </main>
//   );
// };

// export default Search;
"use client"

import React, { useState } from 'react';

// Define a type for the results
interface SearchResult {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${query}`);
      const data: SearchResult[] = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    // ... rest of the component remains the same
    <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Tell me what do you want?"
        id="voice-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-6"
        onClick={handleSearch}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          />
        </svg>
      </button>
    </div>

    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>

    {results.length > 0 && (
      <div className="mt-4">
        <h2 className="text-lg font-bold">Search Results:</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3 className="text-blue-500">{result.title}</h3>
              <p>{result.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )}
  </form>
  );
};

export default Search;

