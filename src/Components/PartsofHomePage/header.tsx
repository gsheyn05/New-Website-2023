
import React, { useEffect } from "react";

import { AiFillLinkedin } from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import Link from "next/link";
import Image from "next/image";
//import './header.scss'
//AiFillLinkedin

//import styles from '@/styles/header.scss'

//import  '@/styles/header.scss';
//import WordMover from "../More/moveword";
import WordMover from "../WordMover/WordMover";


//import { useWordMoverContext2 } from "../More/Try2/wordContext2";
import { useWordMoverContext } from "../WordMover/wordContext2";









const Header = ({text}:any ) => {
   // const x = useMousePosition()
    

   // const xoffset = x.x-20;
   // const yoffset = x.y-20;


    //useEffect(() => {
       
        //console.log(x)
    //},[x])

    const { isPaused, toggleAnimation,setPosition } = useWordMoverContext();


    return (
        
        <header >

            
         
            {/*
            <div className="scroll-container">
                <div className="scroll-text">welcome to site</div>

                </div>
            */}
            <div className="flex">
                <WordMover word="Welcome to the site" duration={15000} />
                </div>
                
            

            <div className="mainhead-container">
                <div className="mainhead">
                    <Link href="/">
                    <p className="font-mono text-center " >Gregory Sheyn</p>
                    <p className="font-mono text-center">Software Engineer</p>
                    </Link>
                    <div className=" mt-4 justify-center m-auto ">
                        
                        <div className="flex-row flex gap-2 ">
                            <div>
                                <a href="https://www.linkedin.com/in/gregory-s-833a4719a/"  target="_blank" rel="noopener noreferrer" className="">
                                    <AiFillLinkedin size={30}  />
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/gsheyn05"  target="_blank" rel="noopener noreferrer" className="">
                                    <AiFillGithub size={30} className="m-auto"  />
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="  flex justify-center border border-white m-4 m-auto mt-4">
                       
                        <button onClick={toggleAnimation} className=" font-mono m-auto">
                               <p className="text-center"> {isPaused ? 'Resume the word flow' : 'Pause the word flow'}</p> 
                        </button>
                        
                        </div>


                </div>
            </div>

        </header>
        
    )
    
}

export default Header