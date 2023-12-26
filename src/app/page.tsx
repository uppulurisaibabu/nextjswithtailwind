import Image from 'next/image'
import Sidebar from './sidebar'
import Search from './search'

export default function Home() {
  return (
    <div>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center bg-gray-200 justify-between p-40">
        {/* className="mx-auto max-w-screen-lg" */}
        <div>
          <button className="fixed top-4 right-4 bg-white text-blue px-8 py-2 rounded-full cursor-pointer new border-solid border-2 border-green-600 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-[16px] h-[16px] text-gray-800 dark:text-blue new"
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

        <div className="fixed top-4 left-64">
          <button className=" bg-white text-blue  rounded-full cursor-pointer">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </div>
          </button>
        </div>


        <div className="p-2 relative flex place-items-center before:absolute before:h-[100px] ...">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-color:white"
            src="/logo.png"
            alt="Next.js Logo"
            width={170}
            height={37}
            priority
          />
        </div>

        <div className="text-center mt-1"> {/* Adjusted top margin */}
          <h2 className="text-2xl font-bold mb-2">Welcome to Titanisu !</h2>
          <p className="text-sm text-gray-700">
            Titanisu is your personal AI-powered assistant, ready to help you <br /> navigate your day and provide valuable insights. We're here to make <br /> your life easier. Let's get started on this exciting journey together!
          </p>
        </div>
        <div className="text-left mt-4">

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-6 h-6 text-gray-800 dark:text-white natural" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
              </svg>
            </div>

            <div >
              <p className="text-xl font-bold mb-2">Natural Language Conversations</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-6 h-6 text-gray-800 dark:text-white base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
              </svg>
            </div>

            <div >
              <p className="text-xl font-bold mb-2">Knowledge Base</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-6 h-6 text-gray-800 dark:text-white personalized" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              </svg>


            </div>

            <div >
              <p className="text-xl font-bold mb-2">Personalized Recommendations</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-6 h-6 text-gray-800 dark:text-white seamless" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
              </svg>

            </div>

            <div >
              <p className="text-xl font-bold mb-2">Seamless Integrations</p>
            </div>
          </div>
        </div>
        <div className="bg-white-500 p-4 text-black fixed  bottom-0 left-60  w-3/4 z-50">
          <Search />
        </div>
      </main>
    </div>
  )
}