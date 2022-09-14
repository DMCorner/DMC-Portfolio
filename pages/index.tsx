import SideBar from '../components/SideBar';
import TopNavigation from "../components/TopNav.jsx";
import { SiHtml5 , SiJavascript , SiReact , SiCss3 , SiRedux , SiNextdotjs , SiTailwindcss , SiGithub } from "react-icons/si";
import BottomBar from '../components/BottomBar';
import { NextSeo } from 'next-seo'
import Link from 'next/link';
import { AiFillEdit, AiFillHome, AiFillMail, AiFillProfile} from 'react-icons/ai';

const HomePage = () => {
    return (
      <div className="bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-linear">
        <img src="Circuit.jpg" alt="Image Not Found" className='w-full h-screen z-10 absolute'></img>
        <div className='absolute text-center z-50 bottom-[50%] w-1/2 left-1/4 border-cyan-600 border-4 bg-gradient-to-b  from-black to-transparent
         rounded-3xl'>
          <div className=' text-center text-7xl text-cyan-400 font-bold font-sans '>{'<DANIEL CORNER>'}
          </div>
          <div className=' text-center text-3xl text-white   from-black to-transparent
         rounded-3xl'>Project Portfolio</div>
          <div></div>
          <div className=''>
            <Link href="/Home" passHref> 
            <button className="sidebar-icon group w-1/3 font-bold bg-black border-cyan-600 border-4 hover:bg-cyan-600 hover:text-black font-sans" >
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
      <NextSeo
      title="Daniel Corner Home Page"
      description="Here is my Home Page"
    />
      
      <HomePage/>
    </div>
  );
}
