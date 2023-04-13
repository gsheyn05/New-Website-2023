import React,{useState,useRef} from "react";
import Header from "@/Components/PartsofHomePage/header";
import Link from "next/link";



export const About = () => {
    const violationRef = useRef(null);
    const Sections = () => {
        const [expand, setExpand] = useState(false)
        

    
        const goToViolation = (id) => {
            if (violationRef.current){ 
            
            violationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }  
        };
    
        return (
            <div className="w-2/4 m-auto border-2 border-white mt-10">
                    <button onClick={()=>setExpand(!expand)}>
                        <p className="underline">Sections</p>
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
    
    return (
        <div className=" font-mono text-center">
            <Header />
            <h1 className="text-center underline text-xl">About</h1>
            <Sections/>
            <div className="mt-10  m-auto lg:w-1/2" ref={violationRef}>
                <h1 className="underline mb-2 text-lg">General</h1>
                <p>I am a Full Stack Software Engineer based out of NYC</p>
                <p>I started my foray into Software Engineering while pursuing a bachelor's in  Computer Science and Economics at
                McGill University (Start Date in September of 2019 and graduated in May of 2022)</p>
                <p>Within University I held multiple internships and delved into many aspects of Software Development from Natural Language Processing Models to simple general AI models such as Neural Networks </p>
                <p>Post university I took my first full-time job as a Founding Engineer at Carousel  Developing a web platform in React with TypeScript and a backend running on node.js, as well as an app platform using React Native</p>
                <p>For a more thorough description please click here to see my  <a className="text-blue-400 underline" href="/Resume.pdf"  target="_blank" rel="noopener noreferrer">Resume</a></p>
    
            </div>


            <div className="mt-10">
                <h1 className="underline mb-2 text-lg "> Current Skills</h1>
                <p>written in order of proficiency (most used at front)</p>
                
                <h2 className="underline">Front-end</h2>
                <p className="m-2">Frameworks: React.js,Next.js,React Native,Vue.js, Node.js(serverless)</p>
                <p className="m-2">Languages: TypeScript,JavaScript</p>
                <h2 className="underline m-2">Backend</h2>
                <p className="m-2">Frameworks:Node.js,Express,js ,Django</p>
                <p className="m-2">Languages:Python,JavaScript,TypeScript</p>
                <h2 className=" ">Servers: MySQL,MongoDB, AWS Cloud</h2>


                <h2 className="underline m-2">Other</h2>
                <p>Languages:Python,Java,Bash Scripting,C++,C,Ocaml</p>
                
    
            </div>

            <div id="Generalf" className="mt-10">
                <p>I am a Full Stack Software Engineer based out of NYC</p>
                <p>I started my foray into Software Engineering while pursuing a bachelor's in  Computer Science and Economics at</p>
                <p>McGill University (Start Date in September of 2019 and graduated in May of 2022)</p>
    
            </div>
        </div>
    )
}
export default About;