// components/StaticChatScreen.tsx
"use client"
import React from 'react';
import Sidebar from './sidebartwo';

const StaticChatScreen = () => {
  
  return (
    <main>
      <Sidebar />
      <div>
          <button className="fixed top-4 right-3 mr-9 bg-white text-blue px-8 py-2 rounded-full cursor-pointer new border-solid border-2 border-green-600 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
              <svg
                className="w-[16px] h-[16px] text-gray-800 dark:text-blue new border-solid border-2 border-green-600 mr-3"
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
      <div className="flex h-screen justify-center items-center bg-gray-200 pb-1 p-3 pt-9">
        <div className="bg-gray-100 p-2 rounded-md shadow-md w-full max-w-5xl border-4 border-indigo-600 pl-9 pr-9 ">
          {/* Question 1 */}
          <div className="mb-2">
            {/* User Profile, Question, and Edit Button Container */}
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="rounded-full w-9 h-9 mr-4"
                />
                <div>
                  <p className="font-bold text-lg">
                    Explain what product thinking is
                  </p>
                  <button className="flex items-center mb-3 bg-white rounded-full p-2 mt-2">
                    {/* Edit Command Icon (Pencil Symbol with Text) */}
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white mr-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                    </svg>
                    <span>Edit command</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Answer Container with Pure White Background */}
            <div className="bg-white rounded-md p-5 mb-3 ">
              {/* Your provided answer for the first question */}
              Product thinking is an approach or mindset that focuses on creating and delivering
              products that truly solve customer problems and meet their needs. It involves
              understanding the target audience, their pain points, and the goals they want to
              achieve. Product thinking goes beyond just building features or functionalities; it
              involves considering the entire user journey and experience.
              <br />
            <div className='pl-4'>
              1. User needs: What are the specific problems or challenges that users face? How can
              the product address those needs effectively?
              <br />
              2. Value Proposition: What unique value does the product offer to users? How does it
              differentiate itself from existing solutions?
              <br />
              3. User Experience: How can the product provide a seamless and intuitive experience for
              users? How can it make their lives easier or more enjoyable?
              <br />
              4. Iterative Development: How can the product be continually improved and refined
              based on user feedback and market insights?
              <br />
              5. Business Viability: How can the product generate value for the business? What are
              the revenue streams and growth opportunities?
            </div>
              <br />
              Product thinking encourages a holistic view of the product development process,
              involving cross-functional collaboration among designers, developers, marketers, and
              stakeholders. It encourages experimentation, data-driven decision-making, and a focus
              on delivering value to the end-users.
              <br /><br />
              By adopting a product thinking approach, organizations can create products that are
              user-centered, innovative, and sustainable, leading to greater customer satisfaction,
              business growth, and competitive advantage.
              {/* Like, Dislike, and Copy Icons with Thumbs Up, Thumbs Down, and Copy Icons */}
              <div className="flex items-center space-x-4 mt-4    ">
                <button>
                  {/* Thumbs Up Icon */}
                  <svg
                    className="w-8 h-8 text-gray-800 dark:text-white bg-gray-300 rounded-full border-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                  </svg>
                </button>
                <button>
                  {/* Thumbs Down Icon */}
                  <svg
                    className="w-9 h-9 text-gray-800 dark:text-white bg-gray-300 rounded-full p-1 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 22"
                  >
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z" />
                  </svg>
                </button>
                <button>
                  {/* Copy Icon */}
                  <svg
                    className="w-9 h-9 text-gray-800 dark:text-white bg-gray-300 rounded-full p-2 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </button>
                <div className='right-4 space'>
                <button className='space-y-8'>
                  {/* Copy Icon */}
                  <svg className="w-8 h-8 space-x-8 text-gray-800 dark:text-green space1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                 </svg>
                
                </button>
                </div>
               
               
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
                  <button className="flex items-center mb-3 bg-white rounded-full p-2 mt-2">
                    {/* Edit Command Icon (Pencil Symbol with Text) */}
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white mr-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                    </svg>
                    <span>Edit command</span>
                  </button>
                </div>
              </div>
            </div>
            {/* No Answer for Question 2 */}
          </div>
        </div>
      </div>

      

      {/* Search Bar */}
      <div className="flex items-center  bg-white-400 justify-center  mb-2">
        <input
          type="text"
          placeholder="Tell me what do you want"
          className="bg-gray-300 p-2 pt-2 rounded-full-md w-1/2 " // Set width to half (w-1/2)
        />
        <button className="bg-green-500 text-white p-2 rounded-r-md">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
          </svg>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
         
        </button>
        <button className="bg-green-500 text-white p-2 rounded-md ml-2">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default StaticChatScreen;
