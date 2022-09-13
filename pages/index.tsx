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
        <img src="matrix-binary.jfif" alt="Image Not Found" className='w-full h-screen z-10 absolute'></img>
        <div className='absolute z-50 left-[10%] bottom-[5%]'>
          <div className='inline-block text-center text-5xl text-cyan-400 font-bold font-mono'>{'<DANIEL CORNER>'}
          </div>
          <div className=' text-center text-3xl text-cyan-600'>Project Portfolio</div>
          <div></div>
          <div className=''>
            <Link href="/Home" passHref> 
            <button className="sidebar-icon group w-20" >
                {"Enter"}
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
