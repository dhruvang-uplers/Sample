import React from "react";
import Header from "../Components/Header/Header";
export default function Home(props) {
  return (
    <>
      <Header />
      <div class="container mx-auto px-4 pt-44"></div>
      <div class="flex ">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex-1 items-center space-x-4">
          <div className="flex items-center content-center">
            <div class=" font-semibold text-center flex-auto items-center justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-28" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" fill="#4f46e5" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div class="font-semibold text-center flex-auto items-center justify-center ">
              <div class="text-xl font-medium text-black capitalize ">Birthday Invitation </div>
              <button class="px-5 py-2 my-5 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 capitalize w-28">Start</button>
            </div>
          </div>
        </div>
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex-1 items-center space-x-4">
          <div className="flex">
            <div className=" font-semibold text-center text-center flex-auto items-center justify-center ">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-28" viewBox="0 0 20 20" fill="currentColor" fill="#4f46e5">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <div class="font-semibold flex-auto text-center items-center justify-center">
              <div class="text-xl font-medium text-black capitalize ">marriage invitation</div>
              <button class="px-5 py-2 my-5 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-28">Start</button>
            </div>
          </div>
        </div>

      </div>

      {/* <Form displayName={props.displayName}></Form> */}
    </>
  );
}
