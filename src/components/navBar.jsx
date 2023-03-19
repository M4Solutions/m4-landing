import React from "react";
import { useState } from 'react'
import {navigation} from "../services/printingServices";
import Button from "./common/button";

const NavBar = () => {
  const [state, setState] = useState(false)
    return ( 
      <nav className="py-2 w-full border-b md:border-0 md:static">
        <div className="items-center container mx-auto md:flex">
            <div className="flex items-center justify-between py-3 md:block">
                    <a href="#" className="bg-gradient-to-r from-red-200 to-red-600 bg-clip-text text-transparent">
                        M4 Solutions
                    </a>
                <div className="md:hidden">
                    <button className="text-slate-100 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="text-slate-100 hover:text-slate-300">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="hidden md:inline-block">
                <a href="#" className="py-3 px-4 text-white bg-dark-blue rounded-md shadow hover:translate-y-2">
                    Get Started
                </a>
            </div>
        </div>
    </nav>
  );
}
 
export default NavBar;
