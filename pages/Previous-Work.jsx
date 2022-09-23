import SideBar from '../components/SideBar'
import TopNavigation from "../components/TopNav.jsx"
import { SiReact , SiRedux , SiNextdotjs , SiTailwindcss , SiGithub } from "react-icons/si"
import { AiFillEye } from 'react-icons/ai'
import BottomBar from '../components/BottomBar'
import Head from 'next/head'

const Projects = () => {

    return (

    <div className="grid grid-cols-2 bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear">
        <div className="pt-20 inline-grid grid-cols-2 p-10">
          <div className="inline-flex flex-col px-10">
            <div>
              <h1 className="text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Sorting Visualizer
              </h1>
            <div className="flex flex-row flex-wrap justify-center text-blue-400 dark:text-green-500">
              < SiReact className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              </div>
              <div className="text-lg text-gray-900 dark:text-gray-300 text-center transition-all duration-300 ease-linear 
              dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl h-48">
                My first ReactJS project. Visualizes Merge, Heap, Quick and Bubble sort on an array of length 100. 
                This project mostly developed my basic JS skills along with getting comfortable with animations in react and updating the virtualDOM.
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-row flex-wrap"> 
            <div className=''>
              <a href="https://sortvis-ebon.vercel.app/"><button className=''>
              <img src='sor1.png' className='block
               z-0 h-60 w-full rounded-3xl hover:rounded-xl
                transition-all duration-300 ease-linear hover:scale-110 border-4 hover:border-red-500 dark:hover:border-green-600'>
                </img></button></a>
                </div>
            </div>
            <div className='h-10 w-full'></div>
                <a href="https://sortvis-ebon.vercel.app/"><button className='sidebar-icon w-1/2 inline-flex'><AiFillEye size="28"/>&nbsp;Website Link</button></a>
                <a href="https://github.com/DMCorner/sortvis"><button className='sidebar-icon w-1/2 inline-flex'><SiGithub size="28"/>&nbsp;Github Code</button></a>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-2 p-10">
          <div className="inline-flex flex-col px-10">
            <div>
              <h1 className="text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white dark:text-gray-200 text-center transition-all duration-300 ease-linear">
                Business Website
              </h1>
            <div className="flex flex-row flex-wrap justify-center text-blue-400 dark:text-green-500">
              < SiReact className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              </div>
              <div className="text-lg text-gray-900 dark:text-gray-300 text-center transition-all duration-300 ease-linear 
              dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl h-48">
                A prototype website for a small business. The main features are an image slider and an email submission other than that
                 this project allowed me to develop my basic HTML and CSS skills.
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-row flex-wrap"> 
            <div className=''>
              <a href="https://www.air-vent-tech-ltd.co.uk/"><button className=''>
              <img src='avt1.png' className=' h-60 w-full rounded-3xl hover:rounded-xl hover:scale-110
                transition-all duration-300 ease-linear border-4 hover:border-red-500 dark:hover:border-green-600'>
                </img>
                </button></a>
                </div>
            </div>
            <div className='h-10'></div>
                <a href="https://www.air-vent-tech-ltd.co.uk/"><button className='sidebar-icon w-1/2 inline-flex'><AiFillEye size="28"/>&nbsp;Website Link</button></a>
                <a href="https://github.com/DMCorner/Businesswebsite"><button className='sidebar-icon w-1/2 inline-flex'><SiGithub size="28"/>&nbsp;Github Code</button></a>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-2 p-10">
          <div className="inline-flex flex-col px-10">
            <div>
              <h1 className="text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white dark:text-gray-200 text-center transition-all duration-300 ease-linear">
                Portfolio Website
              </h1>
            <div className="flex flex-row flex-wrap justify-center text-blue-400 dark:text-green-500">
              {/* < SiReact className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/> */}
              {/* < SiRedux className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/> */}
              < SiNextdotjs className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              < SiTailwindcss className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              </div>
              <div className="text-lg text-gray-900 dark:text-gray-300 text-center transition-all duration-300 ease-linear
              dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl h-48">
              This project was my first venture into modern webdev. Though a challenge at first I was happy to learn the strengths and capabilities of
               current frameworks allowing my skill set to become closer to a professional webdev role.
                
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row flex-wrap"> 
            <div className=''>
               <a href="https://dmc-portfolio-eta.vercel.app"><button className=''>
              <img src='por1.png' className=' h-60 w-full rounded-3xl hover:rounded-xl
                transition-all duration-300 ease-linear hover:scale-110 border-4 hover:border-red-500 dark:hover:border-green-600'>
                </img>
                </button></a>
                </div>
            </div>
            <div className='h-10 w-full'></div>
                <a href="https://dmc-portfolio-eta.vercel.app"><button className='sidebar-icon w-1/2 inline-flex'><AiFillEye size="28"/>&nbsp;Website Link</button></a>
                <a href="https://github.com/DMCorner/DMC-Portfolio-Public"><button className='sidebar-icon w-1/2 inline-flex'><SiGithub size="28"/>&nbsp;Github Code</button></a>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-2 p-10">
          <div className="inline-flex flex-col px-10">
            <div>
              <h1 className="text-xl font-semibold bg-gray-700 dark:bg-gray-800 
              rounded-3xl text-white dark:text-gray-200 text-center transition-all duration-300 ease-linear
              ">
                Cinema Website
              </h1>
            <div className="flex flex-row flex-wrap justify-center text-blue-400 dark:text-green-500">
              {/* < SiReact className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/> */}
              < SiRedux className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              < SiNextdotjs className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              < SiTailwindcss className="h-6 w-6 mx-4 my-4 transition-all duration-300 ease-linear"/>
              </div>
              <div className="text-lg text-gray-900 dark:text-gray-300 text-center transition-all duration-300 ease-linear 
              dark:bg-slate-600 bg-gray-400 p-3 rounded-3xl h-48">
              A movie and series browsing website built with NextJS, TailwindCSS, Redux, React-Slick Carousel and OMDb API.
              The website uses OMDb to pull movie and series data from IMDb into a Redux store which is then displayed on the page.
                
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-row flex-wrap"> 
            <div className=''>
              <a href="https://cinema-third-main.vercel.app/"><button className=''>
              <img src='cin1.png' className='h-60 w-full rounded-3xl hover:rounded-xl
                transition-all duration-300 ease-linear hover:scale-110 border-4 hover:border-red-500 dark:hover:border-green-600'>
                </img>
                </button></a>
                </div>
            </div>
            <div className='h-10 w-full'></div>
                <a href="https://cinema-third-main.vercel.app/"><button className='sidebar-icon w-1/2 inline-flex'><AiFillEye size="28"/>&nbsp;Website Link</button></a>
                <a href="https://github.com/DMCorner/cinema-third-main"><button className='sidebar-icon w-1/2 inline-flex'><SiGithub size="28"/>&nbsp;Github Code</button></a>
          </div>
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
      <Projects />
      <BottomBar/>
    </div>
  );
}
