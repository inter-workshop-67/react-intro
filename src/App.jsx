// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Welcome</h1>
//       <p>My name is Nirand</p>
//       <h2>My favorite food</h2>
//       <ul>
//         <li>Pizza</li>
//         <li>Hamburger</li>
//       </ul>

//       <h2>My pet</h2>
//       <img
//         src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         alt=""
//         width="250px"
//       />
//       <h2>Counter</h2>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//       <p>{count}</p>
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h1 className="text-3xl font-bold text-center text-white">Welcome</h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Personal Intro */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <p className="text-xl font-semibold text-gray-800">Nirand</p>
              <p className="text-gray-500">Personal Portfolio</p>
            </div>
          </div>

          {/* Favorite Foods */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">My Favorite Foods</h2>
            <ul className="space-y-1 pl-5 list-disc text-gray-700">
              <li>Pizza</li>
              <li>Hamburger</li>
            </ul>
          </div>

          {/* Counter */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700">Interaction Count:</span>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors active:scale-95"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-blue-700">{count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
