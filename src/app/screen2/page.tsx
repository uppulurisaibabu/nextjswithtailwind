// components/StaticChatScreen.tsx
"use client"
import React, { Fragment } from 'react';
import Search from '../search';

const StaticChatScreen = () => {
  return (
    
    <div className="flex h-screen justify-center items-center bg-gray-200 pb-5 p-5">
      <div className="bg-gray-100 p-7 rounded-md shadow-md w-full max-w-5xl border-4 border-indigo-400">
        {/* Question 1 */}
        <div className="mb-4">
          {/* User Profile, Question, and Edit Button Container */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User Profile"
                className="rounded-full w-9 h-9 mr-4"
              />
              <div>
                <p className="font-bold text-lg  ">
                  Explain what product thinking is
                </p>
                <button className="flex items-center mb-3 bg-white border-radius:rounded">
                  {/* Edit Command Icon (Pencil Symbol with Text) */}
                  <svg className="w-6 h-6 text-gray-800 dark:text-white mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    {/* <span className="bg-white">Edit command</span> */}
                  </svg>
                  <span >Edit command</span>
                </button>
              </div>
            </div>
          </div>
          {/* Answer Container with Pure White Background */}
          <div className="bg-white rounded-md p-8 mb-3 ">
            {/* Your provided answer for the first question */}
            Product thinking is an approach or mindset that focuses on creating and delivering
            products that truly solve customer problems and meet their needs. It involves
            understanding the target audience, their pain points, and the goals they want to achieve.
            Product thinking goes beyond just building features or functionalities; it involves
            considering the entire user journey and experience. 
            <br />
               1. User needs: What are the specific problems or challenges that users face? How can the
                product address those needs effectively?
            <br />
            2. Value Proposition: What unique value does the product offer to users? How does it
            differentiate itself from existing solutions?
            <br />
            3. User Experience: How can the product provide a seamless and intuitive experience for
            users? How can it make their lives easier or more enjoyable?
            <br />
            4. Iterative Development: How can the product be continually improved and refined based
            on user feedback and market insights?
            <br />
            5. Business Viability: How can the product generate value for the business? What are the
            revenue streams and growth opportunities?
            <br />
            Product thinking encourages a holistic view of the product development process,
            involving cross-functional collaboration among designers, developers, marketers, and
            stakeholders. It encourages experimentation, data-driven decision-making, and a focus on
            delivering value to the end-users.
            <br />
            By adopting a product thinking approach, organizations can create products that are
            user-centered, innovative, and sustainable, leading to greater customer satisfaction,
            business growth, and competitive advantage.
          {/* </div> */}
          {/* Like, Dislike, and Copy Icons with Thumbs Up, Thumbs Down, and Copy Icons */}
           <div className="flex items-center space-x-4 mt-4 bg-white ">
            <button>
              {/* Thumbs Up Icon */}
              
              <svg className="w-6 h-6 text-gray-800 dark:text-white bg-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
              {/* </svg> */}
                
                
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 2l1.41 1.41L12 5l-1.41-1.41L12 2zM12 22l-1.41-1.41L12 19l1.41 1.41L12 22z"
                /> */}
              </svg>
            </button>
            <button>
              {/* Thumbs Down Icon */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/> 
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 2l1.41 1.41L12 5l-1.41-1.41L12 2zM12 22l-1.41-1.41L12 19l1.41 1.41L12 22z"
                /> */}
              </svg>
            </button>
            <button>
              {/* Copy Icon */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              </svg>
              
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 9a2 2 0 114 0 2 2 0 01-4 0zM7 7a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zm9 9a2 2 0 100-4 2 2 0 000 4z"
                /> */}
              {/* </svg> */}
            </button>
            </div>
          </div>
        </div>
       

        {/* Question 2 */}
        <div className="mb-4">
          {/* User Profile, Question, and Edit Button Container */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {/* Same profile photo as Question 1 */}
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User Profile"
                className="rounded-full w-8 h-8 mr-4"
              />
              <div>
                <p className="font-bold text-lg">
                  What is MVP in a product context?
                </p>
                <button className="flex items-center">
                  {/* Edit Command Icon (Pencil Symbol with Text) */}
                  <svg className="w-6 h-6 text-gray-800 dark:text-white mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    {/* <span className="bg-white">Edit command</span> */}
                  </svg>
                  
                  <span>Edit command</span>
                </button>
              </div>
            </div>
          </div>
          {/* No Answer for Question 2 */}
        </div>

        {/* New Chat Icon */}
        <button className="fixed right-4 bottom-4 p-2 bg-blue-500 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14l-4-4 1.41-1.41L12 12.17l5.59-5.59L16 6l-6 6z"
            />
          </svg>
        </button>
        {/* <Search /> */}
      </div>
      
    </div>
    
  );
};

export default StaticChatScreen;
