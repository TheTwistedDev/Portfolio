import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai'
import { MdDownload, MdLocationPin } from 'react-icons/md'

function Sidebar() {
  return (
    <div className="">
        <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/103245040_367548450872669_4344908761441636494_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_ohc=EmWrpbWkHrAAX-UcsuL&_nc_ht=scontent-lax3-1.xx&oh=00_AT_3f0yMglqXRwWcH_PvoGpMA5V2WL-OoFMYrEnONNpZGw&oe=627425D0" 
        alt="user avatar" 
        className="w-32 h-32 mx-auto rounded-full"/>
        <h3 className="my-4 text-3xl font-medium tracking-wide font-patrick">
            <span className="text-blue-500">Abdullah</span> Al-Suwaidi
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
        <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center" 
           href="" 
           download="name">
            <MdDownload className="w-6 h-6"/>
            <p className="ml-2">
                Download Resume
            </p>
        </a>
        {/* Social Icons */}
        <div className="flex justify-around my-5 text-blue-500 md:w-full m-auto">
            <a href="https://github.com/TheTwistedDev">
                <AiFillGithub className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/">
                <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
            </a>
        </div>

        {/* address */}
        <div className="py-4 my-5 bg-gray-200" 
             style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <p className="font-semibold text-xl decoration underline">Contact</p>
            <div className="flex items-center justify-center space-x-2">
                <MdLocationPin className="w-6 h-6 text-blue-500"/>
                <span> 
                    San Martin, CA
                </span>
            </div>
            <p className="my-2">contact@abdullah-al-suwaidi.com</p>
            <p className="my-2">408-665-6986</p>
        </div>
        {/* Email Button */}
        <button className="bg-gradient-to-r from-violet-500 to-blue-500 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none"
        onClick={() => window.open('mailto: contact@abdullah-al-suwaidi.com')}>Email Me</button>
        <button className="bg-gradient-to-r from-violet-500 to-blue-500 w-8/12 rounded-full py-2 px-5 my-2 text-white">Toggle Theme</button>
    </div>
  )
}

export default Sidebar