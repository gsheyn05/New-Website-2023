
import React, { useEffect } from "react";

import { AiFillLinkedin } from 'react-icons/ai'
import Link from "next/link";
import Image from "next/image";
//import './header.scss'
//AiFillLinkedin

//import styles from '@/styles/header.scss'

//import  '@/styles/header.scss';
//import WordMover from "../More/moveword";
import WordMover from "../More/WordMover";


//import { useWordMoverContext2 } from "../More/Try2/wordContext2";
import { useWordMoverContext } from "../More/wordContext2";









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

            
         
            
            <div className="scroll-container">
                <div className="scroll-text">welcome to site</div>

            </div>
            <div className="flex mb-8">
                <WordMover word="god" duration={20000} />
                </div>
                
            

            <div className="mainhead-container">
                <div className="mainhead">
                    <Link href="/">
                    <p className="font-mono text-center " >Gregory Sheyn</p>
                    <p className="font-mono text-center">Software Engineer</p>
                    </Link>
                    <div className="flex  place-content-center">
                        
                        <div>
                            <a href="">
                                <AiFillLinkedin size={30} />
                            </a>
                            
                        </div>
                      
                    </div>
                    <div className="content-center items-center">
                        <button onClick={toggleAnimation} className="">
                                {isPaused ? 'Resume' : 'Pause'}
                            </button>
                        </div>


                </div>
            </div>

        </header>
        
    )
    
}

export default Header