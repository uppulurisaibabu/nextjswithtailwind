

// export default function Home() {
//   const [question, setQuestion] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleSearch = () => {
//     const matchingEntries = chatbotData.pairs.filter((entry) =>
//       entry.question.toLowerCase().includes(question.toLowerCase())
//     );

//     // Update the chat history with user's question and chatbot's answer
//     setChatHistory([...chatHistory, { type: 'user', text: question }, ...matchingEntries[0]?.answer ? [{ type: 'bot', text: matchingEntries[0].answer }] : []]);
//     setQuestion('');
//   };

//   console.log("chatHistory", chatHistory);

//   return (
//     <div className=''>
//       <Sidebar />
//       <main className="flex min-h-screen flex-col items-center justify-between p-40 border-indigo-500/100">
//       <div className="flex flex-col space-y-4 max-w-md w-full mx-auto ">
//       <div >
//            <button style={{ "color": "#3f48cc", "borderBlockColor": "#3f48cc" }} className="fixed top-4 right-4 bg-white text-sm-blue px-7 py-2 rounded-full cursor-pointer">
//              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                <svg
//                  style={{ "color": "#3f48cc" }}
//                  className="w-[16px] h-[16px] text-gradient dark:text-white"
//                  aria-hidden="true"
//                  xmlns="http://www.w3.org/2000/svg"
//                  fill="currentColor"
//                  viewBox="0 0 22 21"
//                >
//                 <path d="M12.356 5.435 1.938 16.384a.5.5 0 0 0 .018.707l2.9 2.757a.5.5 0 0 0 .706-.018L15.978 8.882l-3.622-3.447Zm7.681-.819a.5.5 0 0 0-.018-.706l-2.9-2.757a.5.5 0 0 0-.707.017l-2.68 2.817 3.622 3.446 2.683-2.817Zm-2.89 12.233-1 .025-.024-1a1 1 0 1 0-2 .05l.025 1-1 .024a1 1 0 0 0 .05 2l1-.025.025 1a1 1 0 1 0 2-.05l-.025-1 1-.024a1 1 0 1 0-.05-2h-.001ZM2.953 9.2l.025 1a1 1 0 1 0 2-.05l-.025-1 1-.025a1 1 0 1 0-.05-2l-1 .025-.025-1a1 1 0 0 0-2 .049l.025 1-1 .025a1 1 0 0 0 .05 2l1-.024Zm15.07 2.626-2 .05.05 1.999 2-.05-.05-1.999ZM11.752.978l-2 .05.05 2 2-.05-.05-2Zm-2.95 2.075-2 .05.05 1.999 2-.05-.05-2ZM5.753 1.127l-1.999.05.05 2 1.999-.05-.05-2Zm15.194 7.625-2 .05.05 2 2-.05-.05-2Zm.125 4.998-2 .05.05 2 2-.05-.05-2Z" />
//                </svg>
//              </div>
//              New Chat
//            </button>
//          </div> 

//           {chatHistory.map((chatItem, index) => (
//           <div className=''>
//             <div
//               key={index}
//               className={`rounded-lg p-4  ${chatItem.type === 'user' ? 'bg-white text-gray self-start' : 'bg-gray-400 text-white self-start'}`}
//             >
//               {/* Display the logo for bot responses */}
//               {chatItem.type === 'bot' && (
//                 <div className="mb-2 ">
//                   <Image

//             src="/logo.png"
//             alt="Next.js Logo"
//             width={100}
//             height={40}

//             priority
//           />

//                 </div>
//               )}

//               {/* Display the answer text */}
//               {chatItem.text}

//             </div>
//             </div>
//           ))}
//         </div>


//         {/* <div className="flex items-center space-x-4 mt-8">
//           <input
//             type="text"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Ask a question..."
//             className="flex-1 p-2 border rounded-md"
//           />
//           <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-full">
//             Search
//           </button>
//         </div> */}
//          <div className="  bg-white-500 p-4 text-black fixed  bottom-0 left-60  w-3/4 z-50">
//                 <div className="flex items-center space-x-4 mt-8">
//           <input
//             type="text"
//             placeholder="Tell me what do you want?"
//             id="voice-search"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//           <button
//             type="button"
//             className="absolute inset-y-0 right-0 flex items-center pr-6"

//           >
//             <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
//           </svg>
//           </button>
//         </div>

//           {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
//             </svg>
//         */}
//         <button onClick={handleSearch} >
//             <svg className="bg-gray-200 w-8 h-8 text-blue-500 dark:text-blue-500  rotate-90  rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
//     </svg>
// </button>
// </div>
//   </main>
//     </div>
//   );
// }


// ... (existing imports)


"use client";
import Sidebar from './sidebar';
import { useState } from 'react';
import chatbotData from './chat-botdata.json';
import Image from 'next/image';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleButtonClick = (buttonType, index) => {
    setChatHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      const updatedItem = { ...updatedHistory[index] };

      // Toggle the corresponding button state
      if (buttonType === 'suggestions') {
        updatedItem.showSuggestions = !updatedItem.showSuggestions;
        updatedItem.showVideos = false;
        updatedItem.showLinks = false;
      } else if (buttonType === 'videos') {
        updatedItem.showVideos = !updatedItem.showVideos;
        updatedItem.showSuggestions = false;
        updatedItem.showLinks = false;
      } else if (buttonType === 'links') {
        updatedItem.showLinks = !updatedItem.showLinks;
        updatedItem.showSuggestions = false;
        updatedItem.showVideos = false;
      }

      updatedHistory[index] = updatedItem;
      return updatedHistory;
    });
  };

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
    handleSearch();
  };

  const handleSearch = () => {
    const matchingEntries = chatbotData.pairs.filter((entry) =>
      entry.question.toLowerCase().includes(question.toLowerCase())
    );

    // Update the chat history with user's question and chatbot's answer
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { type: 'user', text: question },
      ...(matchingEntries[0]?.answer
        ? [
          {
            type: 'bot',
            text: matchingEntries[0].answer,
            suggestions: matchingEntries[0].suggestions,
            links: matchingEntries[0].links,
            showSuggestions: false,
            showVideos: false,
            showLinks: false,
          },
        ]
        : []),
    ]);
    setQuestion('');
  };

  console.log("chatHistory", chatHistory);

  return (
    <div className='relative'>
      <Sidebar />
      <main className="flex max-h-screen   flex-col items-center justify-between p-5 border-indigo-500/100">
        <div className="flex flex-col space-y-4  w-1/2 mx-auto ">
          <div>
            <button
              style={{ "color": "#3f48cc", "borderBlockColor": "#3f48cc" }}
              className="fixed top-4 right-4 bg-white text-sm-blue px-7 py-2 rounded-full cursor-pointer"
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  style={{ "color": "#3f48cc" }}
                  className="w-[16px] h-[16px] text-gradient dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M12.356 5.435 1.938 16.384a.5.5 0 0 0 .018.707l2.9 2.757a.5.5 0 0 0 .706-.018L15.978 8.882l-3.622-3.447Zm7.681-.819a.5.5 0 0 0-.018-.706l-2.9-2.757a.5.5 0 0 0-.707.017l-2.68 2.817 3.622 3.446 2.683-2.817Zm-2.89 12.233-1 .025-.024-1a1 1 0 1 0-2 .05l.025 1-1 .024a1 1 0 0 0 .05 2l1-.025.025 1a1 1 0 1 0 2-.05l-.025-1 1-.024a1 1 0 1 0-.05-2h-.001ZM2.953 9.2l.025 1a1 1 0 1 0 2-.05l-.025-1 1-.025a1 1 0 1 0-.05-2l-1 .025-.025-1a1 1 0 0 0-2 .049l.025 1-1 .025a1 1 0 0 0 .05 2l1-.024Zm15.07 2.626-2 .05.05 1.999 2-.05-.05-1.999ZM11.752.978l-2 .05.05 2 2-.05-.05-2Zm-2.95 2.075-2 .05.05 1.999 2-.05-.05-2ZM5.753 1.127l-1.999.05.05 2 1.999-.05-.05-2Zm15.194 7.625-2 .05.05 2 2-.05-.05-2Zm.125 4.998-2 .05.05 2 2-.05-.05-2Z" />
                </svg>
              </div>
              New Chat
            </button>
          </div>

          {chatHistory.map((chatItem, index) => (
            <div className='' key={index}>
              {chatItem.type === 'user' && (
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
                    {/* User Icon SVG */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{chatItem.type}</span>
                </div>
              )}

              <div
                className={`rounded-lg p-4 ${chatItem.type === 'user'
                  ? 'bg-white text-gray self-start'
                  : 'bg-gray-400 text-white self-start'
                  }`}
              >
                {chatItem.type === 'bot' && (
                  <div className="mb-2 ">
                    <Image
                      src="/logo.png"
                      alt="Next.js Logo"
                      width={100}
                      height={40}
                      priority
                    />
                  </div>
                )}

                {chatItem.text}

                {/* Buttons for Suggestions, Videos, and Links */}
                {chatItem.type === 'bot' && (
                  <div className="flex  space-x-4 mt-2 ml-3 rounded-full">
                    <button
                      className={`flex items-center text-gray-900 ${chatItem.showSuggestions ? 'bg-white rounded-full ' : ''
                        }`}
                      onClick={() => handleButtonClick('suggestions', index)}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Suggestions
                    </button>
                    <button
                      className={`flex items-center text-green-500 ${chatItem.showVideos ? 'bg-gray-500' : ''
                        }`}
                      onClick={() => handleButtonClick('videos', index)}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Videos
                    </button>
                    <button
                      className={`flex items-center text-indigo-500 ${chatItem.showLinks ? 'bg-white rounded-full' : ''
                        }`}
                      onClick={() => handleButtonClick('links', index)}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Links
                    </button>
                  </div>
                )}

                {/* Suggestions */}
                {chatItem.showSuggestions && (
                  <div className="bg-gray-100 p-4 mt-5  w-1/2 rounded-md absolute ">
                    {chatItem.suggestions.map((suggestion, idx) => (
                      <div
                        key={idx}
                        className="bg-white text-gray-900 px-3 py-1 mb-2 rounded-md cursor-pointer"
                        // onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}

                {/* Videos */}
                {chatItem.showVideos && (
                  <div className="bg-gray-100 p-4 mt-4 rounded-md">
                    {/* Render video content here */}
                    <p>Videos go here...</p>
                  </div>
                )}

                {/* Links */}
                {chatItem.showLinks && (
                  <div className="bg-white p-4 mt-4   rounded-md">
                    {chatItem.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline block mb-2"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="  bg-white-500 p-1 text-black fixed bottom-0 left-60  w-3/4 z-50">
        <div className=''>
          <div className="flex items-center space-x-3 mt-8">
            <input
              type="text"
              placeholder="Tell me what do you want?"
              id="voice-search"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-6"
              // onClick={handleSearch}
            >
              <svg
                className="w-5 h-5 text-black dark:text-white"
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

          <button onClick={handleSearch}>
            <svg
              className="bg-indigo-700 w-14 h-10 text-white dark:text-white  rotate-90 p-1  fixed bottom-5 rounded-full  send mb-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 22"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
          </button>
        </div>
        </div>
      </main>
    </div>
  );
}
