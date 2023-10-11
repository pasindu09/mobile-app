import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import './index.css'
import Login from './Login.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fort1 from './assets/fort.jpg'
import fort2 from './assets/fort2.jpg'
import fort3 from './assets/fort3.jpg'
import fort4 from './assets/fort4.jpg'
import fort5 from './assets/fort5.jpg'
import fort6 from './assets/fort6.jpg'
import fort7 from './assets/fort7.png'
import fort8 from './assets/fort8.webp'
import fort9 from './assets/gaming-ekkaphan-AdobeStock.avif'
import zelda from './assets/zelda.jpg'
import wpm from './assets/wpm.webp'
import valo from './assets/valorant.jpg'
import farcry from './assets/farcry.avif'

function Home() {

    return (
        <div>
            <Navbar />
            <section className="items-end lg:flex gap-4 bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${fort4})`, backgroundSize: 'cover'}}>
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="lg:w-3/5 relative ml-6">
                    <h1 className="text-white text-3xl font-semibold mb-6 mt-6 relative z-10 uppercase">W
                    </h1>
                    <div className="gap-4 mb-2 h-[770px] w-full md:w-full p-4 mt-12">
                        <div className="p-2 h-full" id="events">
                            <img src={fort3} className="" alt="Fornitesimage" />
                        </div>
                    </div>
                </div>

                <div className="mb-12 lg:w-2/5 relative bg-no-repeat object-cover z-10">
                    <h1 className="text-orange-500 text-5xl font-semibold mb-6 mt-6">Welcome</h1>
                    <div className="lg:flex gap-4 mb-4 h-96 w-full md:w-full p-4 mt-12" style={{ backgroundImage: `url(${fort9})`, backgroundSize: 'cover' }}>
                        <div className="lg:flex flex-col justify-center items-center lg:w-1/2">
                           
                            <h1 className="text-white text-xl mb-4 ml-6">A place where you can find all the games you want to play
                            </h1>
                            <button className="p-2 rounded-full bg-orange-500 text-white font-semibold text-lg">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className="ml-8 text-black text-4xl font-bold mt-12">Most Trending</h1>
            <div className="grid gap-4 mb-4">
                <section>
                    <h1 className="ml-12 text-white text-3xl font-semibold mb-6 mt-6">Most Trending</h1>
                    <aside className="lg:flex justify-between gap-4">

                    <aside className="p-3 hover:scale-105 transition ease-in-out">
    <img src={fort1} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
    <div className="py-2">
        <section className="flex flex-col justify-center items-center mt-6 text-gray-500">
            <Link to="/mobile-app/zelda">
                <button
                    className="button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                    Play Now
                </button>
            </Link>
        </section>
    </div>
</aside>

                        

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={fort2} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]"
                                alt="sin" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                                    <button className="button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                                        Play Now
                                    </button>
                                </section>
                            </div>
                        </aside>

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={fort6} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" style={{width:'300px'}} alt="" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                                    <button className=" w-64 button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                                        Play Now
                                    </button>
                                </section>
                            </div>
                        </aside>

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={fort7} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" style={{width:'300px'}} alt="" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                                    <button className=" w-64 button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white">
                                        Play Now
                                    </button>
                                </section>
                            </div>
                        </aside>
                    </aside>
                </section>
            </div>
            <h1 className="ml-8 text-black text-4xl font-bold mt-12">Our PlatForm Games</h1>
            <div className="grid gap-4 mb-4">
                <section>
                    <h1 className="ml-12 text-white text-3xl font-semibold mb-6 mt-6">Most Trending</h1>
                    <aside className="lg:flex justify-between gap-4">

                    <aside className="p-3 hover:scale-105 transition ease-in-out">
    <img src={zelda} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
    <div className="py-2">
        <section className="flex flex-col justify-center items-center mt-6 text-gray-500">
            <Link to="/mobile-app/zelda">
                <button
                    className="button w-64 p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                    Play Now
                </button>
            </Link>
        </section>
    </div>
</aside>

                        

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={wpm} className="h-96 w-96 object-fill rounded-bl-[50px] rounded-tr-[50px]"
                                alt="sin" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">
                                <Link to="/mobile-app/app2">
                                    <button className=" w-64 button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                                        Play Now
                                    </button>
                                    </Link>
                                </section>
                            </div>
                        </aside>

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={valo} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                                    <button className=" w-64 button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                                        Coming Soon..
                                    </button>
                                </section>
                            </div>
                        </aside>

                        <aside className="p-3 hover:scale-105 transition ease-in-out">
                            <img src={farcry} className="h-96 w-96 object-cover rounded-bl-[50px] rounded-tr-[50px]" alt="" />
                            <div className="py-2">
                                <section className="flex flex-col justify-center items-center mt-6 text-gray-500">

                                    <button className=" w-64 button p-4 rounded-full mb-2 mt-6 w-full bg-orange-500 text-white" style={{width:'300px'}}>
                                    Coming Soon..
                                    </button>
                                </section>
                            </div>
                        </aside>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default Home
