import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai'
import { MdDownload, MdLocationPin, MdEmail} from 'react-icons/md'
import { CgPhone } from 'react-icons/cg'
import { useTheme } from 'next-themes'
import Image from "next/image"

function Sidebar() {

    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark":"light")
    }

  return (
    <div className="my-16">
        <Image 
            src="/img/profilepic.jpg"
            alt="user avatar"
            className="w-32 h-32 mx-auto rounded-full"
            width="100"
            height="100"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wide font-patrick">
            <span className="text-blue-500">Abdullah</span> Al-Suwaidi
        </h3>
        <p className="px-2 py-2 my-4 text-lg tracking-wide bg-gray-200 rounded-full dark:bg-dark-200">Full Stack Developer</p>
        <a className="flex items-center justify-center px-2 py-2 my-4 bg-gray-200 rounded-full dark:bg-dark-200" 
           href="/assets/abdullah-al-suwaidi-resume.pdf" 
           download="abdullah-al-suwaidi-resume.pdf">
            <MdDownload className="w-6 h-6 text-blue-500"/>
            <p className="ml-2 text-lg tracking-wide">
                Download Resume
            </p>
        </a>
        {/* Social Icons */}
        <div className="flex justify-around m-auto my-8 text-blue-500 md:w-full">
            <a href="https://github.com/TheTwistedDev" target="_blank"
                rel="noreferrer">
                <AiFillGithub className="w-12 h-12 cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/" target="_blank"
                rel="noreferrer">
                <AiFillLinkedin className="w-12 h-12 cursor-pointer"/>
            </a>
        </div>

        {/* address */}
        <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
             style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <p className="text-xl font-bold tracking-wide underline decoration">Contact</p>
            <div className="flex items-center justify-center space-x-2">
                <MdLocationPin className="w-6 h-6 text-blue-500"/>
                <span className="mt-2 text-lg tracking-wide"> 
                    San Martin, CA
                </span>
            </div>
            <p className="flex items-center justify-center my-2 text-lg tracking-wide"> <MdEmail className="w-5 h-5 mr-2 text-blue-500"/> contact@abdullah-al-suwaidi.com</p> 
            <p className="flex items-center justify-center my-2 text-lg tracking-wide"> <CgPhone className="w-5 h-5 mr-2 text-blue-500"/> 408-665-6986</p>
        </div>
        {/* Email Button */}
        <button className="w-8/12 px-5 py-2 my-2 tracking-wide text-white rounded-full bg-gradient-to-r from-violet-500 to-blue-500 focus:outline-none"
        onClick={() => window.open('mailto: contact@abdullah-al-suwaidi.com')}>Email Me</button>
        <button className="w-8/12 px-5 py-2 my-2 tracking-wide text-white rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
        onClick={changeTheme}> Toggle Theme </button>
    </div>
  )
}

export default Sidebar