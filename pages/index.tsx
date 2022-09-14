import SideBar from '../components/SideBar';
import TopNavigation from "../components/TopNav.jsx";
import { SiHtml5 , SiJavascript , SiReact , SiCss3 , SiRedux , SiNextdotjs , SiTailwindcss , SiGithub } from "react-icons/si";
import BottomBar from '../components/BottomBar';
import Link from 'next/link';
import { AiFillEdit, AiFillHome, AiFillMail, AiFillProfile} from 'react-icons/ai';
import Head from 'next/head';

const HomePage = () => {
    return (
      <div className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear">
        <img src="Circuit.jpg" alt="Image Not Found" className='w-full h-screen z-10 absolute'></img>
        <div className='absolute text-center z-50 bottom-[50%] w-1/2 left-1/4 border-cyan-600 border-2 bg-gradient-to-b  from-black to-transparent
         rounded-3xl'>
          <div className=' text-center text-7xl text-cyan-400 font-semibold font-sans '>{'<DANIEL CORNER>'}
          </div>
          <div className=' text-center text-3xl text-gray-300 font-semibold   from-black to-transparent
         rounded-3xl'>Project Portfolio</div>
          <div></div>
          <div className=''>
            <Link href="/Home" passHref> 
            <button className="sidebar-icon group w-1/3 font-bold bg-black border-cyan-600 border-2 hover:bg-cyan-600 hover:text-black font-sans 
            dark:text-gray-300 dark:bg-black dark:hover:bg-cyan-600 text-gray-300" >
                {"WELCOME"}
            {/* <span className="sidebar-tooltip group-hover:scale-100">
                {"Home"}
            </span> */}
            </button>
        </Link>
        
        </div>
        
        </div>
        
      </div>
            )
        }


export default function Home() {

  return (
    <div>
       <Head>
        <title>Daniel Corner</title>
        <link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <HomePage/>
    </div>
  );
}
