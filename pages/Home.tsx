import SideBar from '../components/SideBar';
import TopNavigation from "../components/TopNav.jsx";
import { SiHtml5 , SiJavascript , SiReact , SiCss3 , SiRedux , SiNextdotjs , SiTailwindcss , SiGithub } from "react-icons/si";
import BottomBar from '../components/BottomBar';
import Head from 'next/head';
import { AiFillGithub, AiFillLinkedin, AiFillMail , AiFillPhone, AiFillEdit} from "react-icons/ai"
import Link from 'next/link';


const HomePage = ({}) => {
    return (
      
        
      <div className=" bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear z-0">
        <div className=" pl-20 pt-14 grid grid-rows-2 grid-cols-5 grid-flow-col">
          <div></div>
          <div></div>
          <div className=' h-72 px-5'>
              <div className='h-20'></div>
              {/* <div className="wiggle"> */}
              <h1 className=" text-3xl p-5 font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear"> 
                Welcome!
              </h1>
              {/* </div> */}
              <div className='h-5'></div>
                <div className="text-lg text-gray-900 dark:text-gray-300  text-left transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl">
                Hello, I'm Daniel Corner. I am a math graduate turned software developer. This is my portfolio website.
                Ideally this website will display my skills, previous achievements to a degree that employers deem desirable. 
                </div>
          </div>
          <div>
              <div className=' px-5'>
              
              <h1 className=" text-3xl p-5 font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Contact Me
              </h1>
              
              
              <div className='grid grid-cols-2 grid-rows-4 space-y-5'>

                
                <div className="h-12 w-16 text-lg text-gray-900 dark:text-gray-300 transition-all duration-300 ease-linear dark:bg-slate-600 bg-gray-400  p-3 rounded-l-3xl
                translate-y-5">
                 <AiFillMail size="30" className='translate-x-3 -translate-y-1'/>
                </div>
                <div className= "sidebar-icon rounded-l-none hover:rounded-l-none  w-[255px] -translate-x-24 transition-all  duration-300 ease-linear p-4 ">
                   <a href="mailto:danielmichaelcorner@gmail.com" className='w-full inline-flex justify-center'>
                  Danielmichaelcorner@gmail.com
                  </a></div>
                
                <div className="h-12 w-16 text-lg text-gray-900 dark:text-gray-300 transition-all duration-300 ease-linear dark:bg-slate-600 bg-gray-400  p-3 rounded-l-3xl">
                  <AiFillPhone size="30" className='translate-x-3 -translate-y-0.5'/>
                </div>
                <div className="sidebar-icon rounded-l-none hover:rounded-l-none  w-[255px] -translate-x-24 transition-all  duration-300 ease-linear p-4 ">
                   <a href="tel:+07476889388" className='w-full inline-flex justify-center'>
                   07476-889388</a>
                </div>
                
                <div className="h-12 w-16 text-lg text-gray-900 dark:text-gray-300 transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-l-3xl">
                  <AiFillLinkedin size="30" className='translate-x-3 -translate-y-0.5'/>
                </div>

                <div className="sidebar-icon rounded-l-none hover:rounded-l-none  w-[255px] -translate-x-24  text-left transition-all duration-300 ease-linear ">
                  <a href="https://www.linkedin.com/in/daniel-corner-409128148/ " target="_blank" className='w-full inline-flex justify-center'>
                  Daniel Corner
                  </a>
                </div>
                
                <div className="h-12 w-16 text-lg text-gray-900 dark:text-gray-300 transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-l-3xl">
                  <AiFillGithub size="30" className='translate-x-3 -translate-y-0.5'/>
                </div>

                <div className="sidebar-icon rounded-l-none hover:rounded-l-none  w-[255px] -translate-x-24  text-left transition-all duration-300 ease-linear p-4">
                  <a href="https://github.com/DMCorner" target="_blank" className='w-full inline-flex justify-center'>
                  DMCorner
                  </a>
                </div>
              </div>


                </div>
          </div>
          <div className=' h-64 px-5'>
              <div className='h-20'></div>
               <h1 className="p-5 text-3xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
               My Tech Stack So Far
               </h1>
               <div className='h-5'></div>
               <div className="text-lg text-gray-900 dark:text-gray-300 text-left transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl">
                Starting with HTML, CSS and JavaScript I learned the foundations of webdev. So far I also have experience with React, Next and Tailwind.
                I look forward to learning and mastering as many languages and frameworks as I can.
                </div>

                

                <div className='h-5'></div>
                


          </div>
          <div>
            <div className=' h-64 px-5'>
                <div className='h-12 '>
                  <h1 className=" text-3xl p-5 font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear ">
                Previous Work
              </h1>   
                </div>
                <div className='h-10'></div>
                <Link href="/Previous-Work" passHref> 
                  <button className="sidebar-icon w-1/2 inline-flex left-1/4 space-y-5" >
                    <AiFillEdit size="32"/> Click Me 
                    
                  </button>
                  </Link>

              <div className='h-5'></div>
                <div className='px-5 grid grid-rows-3 grid-cols-3  place-content-center text-blue-400 dark:text-green-500'>
              < SiHtml5 className="h-24 w-24 px-2 transition-all duration-300 ease-linear "/>
             < SiCss3 className="h-24 w-24 px-2 transition-all duration-300 ease-linear"/>
             < SiJavascript className="h-24 w-24 px-2 transition-all duration-300 ease-linear"/>
             < SiReact className="h-24 w-24 px-2 transition-all duration-300 ease-linear"/>
             {/* < SiRedux className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/> */}
              < SiNextdotjs className="h-24 w-24 px-2 transition-all duration-300 ease-linear"/>
             < SiTailwindcss className="h-24 w-24 px-2 transition-all duration-300 ease-linear"/>
               </div>
                </div>
              
            </div>
            <div className=' px-5'>
              <div className=''>
                {/* <div className="wiggle"> */}
              <img src='ItsDan.png' className=' block z-0  translate-y-20 rounded-full hover:rounded-full
                transition-all duration-300 ease-linear border-4 hover:border-red-500 dark:hover:border-green-600'>
              </img>
              {/* </div> */}
              </div>
            </div>
              <div className='px-5'>
              <h1 className="p-5 text-3xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                About Me
              </h1>
              <div className='h-5 '></div>
                <div className="text-lg text-gray-900 dark:text-gray-300 text-left transition-all duration-300 ease-linear
                dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl">
                Studying Mathematics has given me a keen mind for logical problem solving which is not only transferable but simulatneousely key
                in software development.  
                During my time at the University of Hertfordshire I took several modules involving programming and found myself not only passionate
                about these topics but also excelling at them. Thus after graduating I it took upon myself to learn to code.
                </div>
                <div className='h-5 '></div>
              </div>

            </div>       
        </div>
      
            )
        }

export default function Home() {

  return (
    <div>
     <Head>
        
        <link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <TopNavigation />
      <SideBar />
      <HomePage/>
      <BottomBar />
    </div>
     )
        }



        // <div className=" bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear z-0">
        // <div className=" pl-20 pt-20 grid grid-rows-2 grid-cols-3 grid-flow-col">
          
          
        //     <div className=""> 
        //       <div className='pl-[33%] w-2/3 grid grid-rows-3 grid-cols-3  place-content-center text-blue-400 dark:text-green-500'>
        //       < SiHtml5 className="h-16 w-16 px-2 transition-all duration-300 ease-linear "/>
        //       < SiCss3 className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
        //       < SiJavascript className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
        //       < SiReact className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
        //       {/* < SiRedux className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/> */}
        //       < SiNextdotjs className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
        //       < SiTailwindcss className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
        //       </div>
        //     </div>
        //     <div>
        //       <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
        //         My Tech Stack So Far
        //       </h1>
        //       <div className='h-10'></div>
        //         <div className="text-lg text-gray-900 dark:text-gray-300 w-3/4 text-left transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl">
        //         Starting with HTML, CSS and JavaScript I learned the foundations of webdev. So far I also have experience with React, Next and Tailwind.
        //         I look forward to learning more languages and frameworks that will make fine additions to my collection.
        //         </div>
        //     </div>
        //     <div>
              
        //       <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
        //         Hello There!
        //       </h1>
        //       <div className='h-10'></div>
        //         <div className="text-lg text-gray-900 dark:text-gray-300 w-3/4 text-left transition-all duration-300 ease-linear  dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl">
        //         I'm Daniel. I am a math graduate turned software developer. This is my portfolio website.
        //         Ideally this website will display my skills, previous achievements and convince you to offer me a job. 
        //         </div>
        //     </div>
        //     <div>
        //       <div className='h-14'></div>
        //       <div className='w-3/4'>
        //       <img src='ItsDan.png' className='z-0 translate-x-4 translate-y-4  hover:transform hover:translate-x-4 hover:translate-y-4 rounded-full hover:rounded-full
        //         transition-all duration-300 ease-linear border-4 hover:border-red-500 dark:hover:border-green-600'>
        //         </img>
        //         </div>
        //     </div>
        //       <div></div>

        //       <div>
        //       <h1 className= "w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
        //         About Me
        //       </h1>
        //       <div className='h-10 '></div>
        //         <div className="text-lg text-gray-900 dark:text-gray-300 w-3/4 text-left transition-all duration-300 ease-linear
        //         dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl ">
        //         Studying Mathematics has given me a keen mind for logical problem solving which is not only transferable into but simulatneousely key
        //          in software development.  
        //         During my time at the University of Hertfordshire I took several modules involving programming and found myself not only passionate
        //         about these topics but also excelling at them. Thus after graduating I took upon myself to learn to code.
        //         </div>
        //       </div>
        //     </div>       
        // </div>