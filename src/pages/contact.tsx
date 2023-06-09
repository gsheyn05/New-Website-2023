import React, { useState,useEffect } from "react";
import { useMousePosition } from "@/Functions/functions";

import Header from "@/Components/PartsofHomePage/header";
const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const [mobile, setMobile] = useState(true)
    const x = useMousePosition() as null|any
    

    const xoffset = x.x - 20;
    const yoffset = x.y - 20;


    useEffect(() => {
        if (typeof window !== 'undefined') {
          
          //Cause of Next SSR you gotta do this baloney
         const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          console.log(isMobileDevice())
          if (isMobileDevice()) {
            setMobile(false)
    
          }
        }
       
     })
    const validate = () => {
        if (fullname.length == 0 || fullname.length > 100) {
            alert("Please enter a full name")
            return false
            
        }
        if (email.length == 0 || email.length>100) {
            alert("Please enter a email")
            return false
            
        }
        if (subject.length == 0 ||subject.length>100) {
            alert("Please enter a subject")
            return false
        }
        if (message.length == 0) {
            alert("Please enter a message")
            return false
        }
        return true
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const isGood = validate()
        if (isGood) {
            const res = await fetch("/api/sendGrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
        
            });
        }
        else {
            e.preventDefault(); //K prevent reload

            
        }
    }
    return (
        <div className=" font-mono text-center">
            <Header />

            {mobile&& (
        < div style={{
        position: "absolute",
        left: `${xoffset}px`,
        top: `${yoffset}px`,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 40,
        pointerEvents: "none"
      }}>
    </div>
      )
      }
            <div >
                <h1 className="text-xl underline">Contact Me</h1>
                <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8  "
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
                        Full name<span className={ fullname.length==0 || fullname.length>100?'text-red-500':'hidden'}>*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white lg:w-1/2 lg:m-auto"
          />
         

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50 mb-2"
          >
                        E-mail<span className={email.length == 0|| email.length>100?'text-red-500':'hidden'}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white lg:w-1/2 lg:m-auto"
          />
          

          <label
            htmlFor="subject"
            className="text-white font-light mt-4 dark:text-gray-50  mb-2 "
          >
            Subject<span className={subject.length==0 ||subject.length>100?"text-red-500":"hidden"}>*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent  border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white lg:w-1/2 lg:m-auto"
          />
         
          <label
            htmlFor="message"
            className="text-white font-light mt-4 dark:text-gray-50 mb-2"
          >
            Message<span className={message.length==0 ?'text-red-500':'hidden'}>*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white border-white lg:w-1/2 lg:m-auto"
          ></textarea>
          
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center m-auto"
            >
              Submit
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>

            </div>

        </div>
    )
 }
export default Contact;