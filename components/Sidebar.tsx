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
    <div className="">
        {/* Profile Content */}
        <div className="flex flex-wrap justify-center m-4">
            <Image 
                src="/img/profilepic.jpg"
                alt="user avatar"
                className="rounded-full"
                width="100"
                height="100"
            />
            <div className="flex flex-col justify-center mx-4 text-3xl font-medium tracking-wide font-patrick">
                <span className="text-blue-500">Abdullah</span> 
                <h3 className="">Al-Suwaidi</h3>
            </div>

            {/* Job Info */}
        <div className="flex items-center space-x-4">
            <p className="px-4 py-2 my-4 text-lg tracking-wide bg-gray-200 rounded-full dark:bg-dark-200">Full Stack Developer</p>
            <a className="flex items-center justify-center px-4 py-2 my-4 bg-gray-200 rounded-full dark:bg-dark-200" 
            href="/assets/abdullah-al-suwaidi-resume.pdf" 
            download="abdullah-al-suwaidi-resume.pdf">
                <MdDownload className="w-6 h-6 text-blue-500"/>
                <p className="ml-2 text-lg tracking-wide">
                    Download Resume
                </p>
            </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-2 lg:ml-auto">

            {/* Email & Toggle Theme buttons */}
            <div className="flex space-x-2">
                <button className="p-2 tracking-wide text-white rounded-full bg-gradient-to-r from-violet-500 to-blue-500 focus:outline-none"
                            onClick={() => window.open('mailto: contact@abdullah-al-suwaidi.com')}>Email Me</button>
                <button className="p-2 tracking-wide text-white rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                onClick={changeTheme}> Toggle Theme </button>
            </div>
                <a href="https://github.com/TheTwistedDev" target="_blank"
                    rel="noreferrer">
                    <AiFillGithub className="w-12 h-12 text-blue-500 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/" target="_blank"
                    rel="noreferrer">
                    <AiFillLinkedin className="w-12 h-12 text-blue-500 cursor-pointer"/>
                </a>
            </div>
            
        </div>

        {/* address */}
        <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" 
             style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <p className="flex justify-center text-xl font-bold tracking-wide underline decoration">Contact</p>
            <div className="flex items-center justify-center space-x-2">
                <MdLocationPin className="w-6 h-6 text-blue-500"/>
                <span className="mt-2 text-lg tracking-wide"> 
                    San Martin, CA
                </span>
            </div>
            <p className="flex items-center justify-center my-2 text-lg tracking-wide"> <MdEmail className="w-5 h-5 mr-2 text-blue-500"/> contact@abdullah-al-suwaidi.com</p> 
            <p className="flex items-center justify-center my-2 text-lg tracking-wide"> <CgPhone className="w-5 h-5 mr-2 text-blue-500"/> 408-665-6986</p>
        </div>
    </div>
  )
}

export default Sidebar