
import { AiFillEdit, AiFillHome, AiFillMail, AiFillProfile} from 'react-icons/ai';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const Notice = () => {
    return (
        <div>
            
            <div className="sidebar-icon group text-center rounded-lg text-sm hover:cursor-default cursor-default underline" >
                NavBar
            </div>
        
        </div>
            )
        }

const HomeBarIcon = ({ icon, text}) => {
    return (
        <div>
            <Link href="/Home" passHref> 
            <button className="sidebar-icon group" >
                {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
            </button>
        </Link>
        </div>
            )
        }


const PreviousWorkBarIcon = ({ icon, text}) => {
    return (
        <div>
            <Link href="/Previous-Work" passHref> 
                <button className="sidebar-icon group" >
                    {icon}
                    <span class="sidebar-tooltip group-hover:scale-100">
                        {text}
                    </span>
                </button>
            </Link>
        </div>
            )
        }

        
const CVBarIcon = ({ icon, text}) => {
    return (
        <div>
            <Link href="/CV" passHref> 
            <button className="sidebar-icon group" >
                {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
            </button>
        </Link>
        </div>
            )
        }

// const ContactMeBarIcon = ({ icon, text }) => {
//     const router = useRouter()
//     return (
//         <div>
//             <Link href="/Contact-Me" passHref> 
//             <button className="sidebar-icon group" fill={router.pathname === '/Contact-Me' ? 'red' : 'blue'}>
//                 {icon}
//             <path class="sidebar-tooltip group-hover:scale-100" >
//                 {text}
//             </path>
//             </button>
//         </Link>
//         </div>
//             )
//         }



const SideBar = () => {
    return (
        <div className="fixed top-16 left-0 h-screen w-16 m-0 flex flex-col bg-gray-500 dark:bg-gray-900 text-white  dark:text-blue-900 transition-all duration-300 ease-linear">
            <Notice/>
            <HomeBarIcon icon={<AiFillHome size="28"/>} text={"Home"}/>
            <PreviousWorkBarIcon icon={<AiFillEdit size="32"/>} text={"Previous Work"}/>
            <CVBarIcon icon={<AiFillProfile size="20"/>} text={"CV"} />
            {/* <ContactMeBarIcon icon={<AiFillMail size="20"/> } text={"Contact Me"}/> */}
            </div>
    )
}


export default SideBar;

