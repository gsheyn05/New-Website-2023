
import React, { useEffect } from "react";

import { AiFillLinkedin } from 'react-icons/ai'
import Link from "next/link";
import Image from "next/image";
//import './header.scss'
//AiFillLinkedin

//import styles from '@/styles/header.scss'

//import  '@/styles/header.scss';










const Header = ({text}:any ) => {
   // const x = useMousePosition()
    

   // const xoffset = x.x-20;
   // const yoffset = x.y-20;


    //useEffect(() => {
       
        //console.log(x)
    //},[x])


    return (
        <header >

            
         
            <div className="scroll-container">
                <div className="scroll-text font-mono">{text}</div>
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

                </div>
            </div>

        </header>
    )
    
}

export default Header