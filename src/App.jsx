import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import fort1 from './assets/fort.jpg'
import fort2 from './assets/fort2.jpg'
import fort3 from './assets/fort3.jpg'
import fort5 from './assets/fort5.jpg'
import fort6 from './assets/fort6.jpg'
import fort7 from './assets/fort7.png'
import fort8 from './assets/fort8.webp'
import fort9 from './assets/fort9.jpg'

function App() {


  return (
    <div className="px-6 bg-[#202425]">


      <nav
        className="bg-[#2a2a2a] fixed w-full z-20 top-0 left-0 border-b0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <span
              className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GamerHub404</span>
          </a>
          <div className="flex md:order-2">
            <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
               <button type="button"
              className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            <button data-collapse-toggle="navbar-sticky" type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg> 
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-sticky">
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LeaderBoard</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="lg:flex gap-4 bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${fort5})` }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="lg:w-3/5 relative ml-6">
          <h1 className="text-white text-3xl font-semibold mb-6 mt-6 relative z-10 uppercase">
          </h1>
          <div className="gap-4 mb-4 border h-[570px] w-full md:w-full p-4">
            <div className="p-2 h-full" id="events">
              <img src={fort3} className="" alt="Fornitesimage"/>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 relative bg-no-repeat object-cover z-10">
          <h1 className="text-white text-3xl font-semibold mb-6 mt-6">News Archive</h1>
          <div className="lg:flex gap-4 mb-4 border h-96 w-full md:w-full p-4" style={{ backgroundImage: `url(${fort9})` }}>
            <div className="lg:flex flex-col justify-center items-start lg:w-1/2">
              <p className="text-white text-2xl mb-4 font-semibold">
                Greeting Gamers ...
              </p>
              <p className="text-white mb-4">
                Welcome to the gamehub404, a place where you can find all the games you want to play. We have a wide variety of games to choose from. You can also join our groups and play with your friends.
              </p>
              <button className="bg-transparent text-orange-500 font-semibold text-lg">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>


      <div className="grid gap-4 mb-4 mt-6">
        <section>
          <h1 className="text-white text-3xl font-semibold mb-6 mt-6">Popular games</h1>
          <aside className="lg:flex justify-between gap-4">

            <aside className="p-3 hover:scale-105 transition ease-in-out">
              <img src={fort1} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
              <div className="py-2">
                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                  <button
                    className="text-white button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                    Play Now
                  </button>
                </section>
              </div>
            </aside>

            <aside className="p-3 hover:scale-105 transition ease-in-out">
              <img src={fort2} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]"
                alt="sin" />
              <div className="py-2">
                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                  <button className="button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                    Play Now
                  </button>
                </section>
              </div>
            </aside>

            <aside className="p-3 hover:scale-105 transition ease-in-out">
              <img src={fort6} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
              <div className="py-2">
                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                  <button className="button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                    Play Now
                  </button>
                </section>
              </div>
            </aside>

            <aside className="p-3 hover:scale-105 transition ease-in-out">
              <img src={fort7} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
              <div className="py-2">
                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                  <button className="button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                    Play Now
                  </button>
                </section>
              </div>
            </aside>
          </aside>
        </section>
      </div>

      <div className="lg:grid gap-4 mb-4 mt-6">
        <section>
          <h1 className="text-3xl font-semibold mb-6 mt-6">Popular Groups</h1>

          <aside className="lg:flex justify-between gap-4">
            <aside className="border border-gray-200 rounded-lg w-96 p-6">
              <div>
                <h1 className="font-medium text-xl">Robin Hood</h1>
                <p className="text-gray-600 text-sm">Public Group</p>
              </div>
              <div className="flex justify-between gap-2">
                <button className="button p-4 rounded-full mb-2 mt-6 bg-orange-100 text-gray-700">
                  READ MORE
                </button>
                {/* <img src="assets/images/groups.png" alt="" /> */}
              </div>
            </aside>


            <aside className="border border-gray-200 rounded-lg w-96 p-6">
              <div>
                <h1 className="font-medium text-xl">The Legend of Zero</h1>
                <p className="text-gray-600 text-sm">Public Group</p>
              </div>
              <div className="flex justify-between gap-2">
                <button className="button p-4 rounded-full mb-2 mt-6 bg-orange-100 text-gray-700">
                  READ MORE
                </button>
                {/* <img src="assets/images/groups.png" alt="" /> */}
              </div>
            </aside>



            <aside className="border border-gray-200 rounded-lg w-96 p-6">
              <div>
                <h1 className="font-medium text-xl">Game of Thrones</h1>
                <p className="text-gray-600 text-sm">Public Group</p>
              </div>
              <div className="flex justify-between gap-2">
                <button className="button p-4 rounded-full mb-2 mt-6 bg-orange-100 text-gray-700">
                  READ MORE
                </button>
                {/* <img src="assets/images/groups.png" alt="" /> */}
              </div>
            </aside>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default App
