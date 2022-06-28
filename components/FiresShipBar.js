
import { AiFillEdit, AiFillHome, AiFillMail, AiFillProfile} from 'react-icons/ai';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const HomeBarIcon = ({ icon, text}) => {
    return (
        <div>
            <Link href="/" passHref> 
            <button className="fireshipbar-icon group" >
                {icon}
            <span class="fireshipbar-tooltip group-hover:scale-100">
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
            <button className="fireshipbar-icon group" >
                {icon}
            <span class="fireshipbar-tooltip group-hover:scale-100">
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
            <button className="fireshipbar-icon group" >
                {icon}
            <span class="fireshipbar-tooltip group-hover:scale-100">
                {text}
            </span>
            </button>
        </Link>
        </div>
            )
        }

const ContactMeBarIcon = ({ icon, text }) => {
    const router = useRouter()
    return (
        <div>
            <Link href="/Contact-Me" passHref> 
            <button className="fireshipbar-icon group" fill={router.pathname === '/Contact-Me' ? 'red' : 'blue'}>
                {icon}
            <path class="fireshipbar-tooltip group-hover:scale-100" >
                {text}
            </path>
            </button>
        </Link>
        </div>
            )
        }



const FireShipBar = () => {
    return (
        <div className="fixed top-16 left-0 h-screen w-16 m-0 flex flex-col bg-blue-500 dark:bg-gray-900 text-white  dark:text-blue-900 transition-all duration-300 ease-linear">
            <HomeBarIcon icon={<AiFillHome size="28"/>} text={"Home"}/>
            <PreviousWorkBarIcon icon={<AiFillEdit size="32"/>} text={"Previous Work"}/>
            <CVBarIcon icon={<AiFillProfile size="20"/>} text={"CV"} />
            <ContactMeBarIcon icon={<AiFillMail size="20"/> } text={"Contact Me"}/>
            </div>
    )
}


export default FireShipBar;

