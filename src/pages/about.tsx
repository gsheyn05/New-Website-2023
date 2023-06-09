import React,{useState,useRef,useEffect} from "react";
import Header from "@/Components/PartsofHomePage/header";
import Link from "next/link";
import { useWordMoverContext } from "@/Components/WordMover/wordContext2";
import { useMousePosition } from "@/Functions/functions";
/*
const Sections : React.FC=({}) => {
    const [expand, setExpand] = useState(false)
    


    const goToViolation = (id) => {
        if (violationRef.current){ 
        
        violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }  
    };

    return (
        <div className="w-2/4 m-auto border-2 border-white mt-10">
                <button onClick={()=>setExpand(true)}>
                <p className="underline"  >Sections</p>
                
            </button>
           
            {expand && ( //Def could loop this but eh
                <>
                    <div className=" mt-2">
                        <div className="border-0 border-white border-t border-b">
                        <a href="/Resume.pdf"  target="_blank" rel="noopener noreferrer">
                            <p>
                                Resume
                            </p>
                        </a>
                    </div>
                    <div className="border-0 border-white border-t border-b">
                        <button onClick={goToViolation}>
                        <p>General</p>
                        </button>
                    </div>
                </div>
                <div>
                    <p>Current Skills</p>
                </div>
                </>
                
            )}
        </div>
    )
    
    
}
*/
export const About = () => {
    const genRef = useRef<null | HTMLDivElement>(null); //eh remember there being a better way but fine
    const skillsRef = useRef<null | HTMLDivElement>(null); 

    const { word, setWord } = useWordMoverContext();
    const [expand, setExpand] = useState(false)
    
    const [mobile, setMobile] = useState(true)
    const x = useMousePosition() as null|any
    

    const xoffset = x.x - 20;
    const yoffset = x.y - 20;

    useEffect(() => { //Need to fix this while scrolling
        if (typeof window !== 'undefined') {
          
          //Cause of Next SSR you gotta do this baloney
         const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          console.log(isMobileDevice())
          if (isMobileDevice()) {
            setMobile(false)
    
          }
        }
       
     })

  
    const goToref = (id: number) => {
        if (id == 1) {
            if (genRef.current) {
        
                genRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
        if (id == 2) {
            if (skillsRef.current){
                skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

            }
        }
    };
    
    
    
    return (
        <div className=" font-mono text-center">
            <Header />
           
      
            <h1 className="text-center underline text-xl">About</h1>
          
           
            <div className="w-2/4 m-auto border-2 border-white mt-10">
                    <button onClick={()=>setExpand(!expand)}>
                    <p className="underline"  >Sections</p>
                    
                </button>
               
                {expand && ( //Def could loop this but eh
                    <>
                        <div className=" mt-2">
                            <div className="border-0 border-white border-t border-b">
                            <a href="/Resume.pdf"  target="_blank" rel="noopener noreferrer">
                                <p>
                                    Resume
                                </p>
                            </a>
                        </div>
                        <div className="border-0 border-white border-t border-b">
                            <button onClick={()=>goToref(1)}>
                            <p>General</p>
                            </button>
                        </div>
                    </div>
                        <div>
                            <button  onClick={()=>goToref(2)}>
                            <p>Current Skills</p>
                            </button>
                    </div>
                    </>
                    
                )}
            </div>
        
            
            <div className="mt-10  m-auto lg:w-1/2" ref={genRef}>
                <h1 className="underline mb-2 text-lg">General</h1>
                <p>I am a Full Stack Software Engineer based out of NYC</p>
                <p className="m-2">I started my foray into Software Engineering while pursuing a bachelors in  Computer Science and Economics at
                McGill University (Start Date in September of 2019 and graduated in May of 2022)</p>
                <p className="m-2">Within University I held multiple internships and delved into many aspects of Software Development and CS from Natural Language Processing Models , simple general AI models such as Neural Networks to Turing Machines.  </p>
                <p className="m-2">Post university I took my first full-time job as a Founding Engineer at Carousel  Developing a web platform in React with TypeScript and a backend running on node.js, as well as an app platform using React Native</p>
                <p>For a more thorough description please click here to see my  <a className="text-blue-400 underline" href="/Resume.pdf"  target="_blank" rel="noopener noreferrer">Resume</a></p>
    
            </div>


            <div className="mt-10" ref={skillsRef}>
                <h1 className="underline mb-2 text-lg "> Current Skills</h1>
                <p>written in order of proficiency (most used at front)</p>
                
                <h2 className="underline m-2">Front-end</h2>
                <p className="m-2">Frameworks: React.js,Next.js,React Native,Vue.js, Node.js(serverless)</p>
                <p className="m-2">Languages: TypeScript,JavaScript</p>
                <h2 className="underline m-2">Backend</h2>
                <p className="m-2">Frameworks:Node.js,Express,js ,Django</p>
                <p className="m-2">Languages:Python,JavaScript,TypeScript</p>
                <h2 className=" ">Servers: MySQL,MongoDB, AWS Cloud</h2>


                <h2 className="underline m-2">Other</h2>
                <p>Languages:Python,Java,Bash Scripting,C++,C,Ocaml</p>
                
    
            </div>

            <div id="Generalf" className="mt-10 mb-10">
                <p>Since you made it here set the word if you want :</p>
                <input value={word} onChange={(e)=>setWord(e.target.value) } className="mt-2 border-rounded bg-black text-white border border-white p-2"></input>
                </div>
        </div>
    )
}
export default About;