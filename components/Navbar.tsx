import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"

const NavItem:FunctionComponent<{
    selectedPage: string,
    setSelectedPage: Function,
    name:string,
    route:string
    }> = ({selectedPage, name, route, setSelectedPage}) => {
        return (
                selectedPage !== name ? (
                    <Link href={route}>
                        <a>
                            <span onClick={() => setSelectedPage(name)} className="font-bold tracking-wide hover:text-blue-500">{name}</span>
                        </a>
                    </Link>
                ):null
        )
    }

function Navbar() {

const [selectedPage, setSelectedPage] = useState('')

    const { pathname } = useRouter()

    useEffect(() =>{
        if (pathname === "/") setSelectedPage('About')
        if (pathname === "/projects") setSelectedPage('Projects')
        if (pathname === "/resume") setSelectedPage('Resume')
    }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
        <span className="text-xl font-bold text-blue-500 border-b-4 border-blue-500 md:text-2xl">{selectedPage}</span>
        <div className="flex space-x-5 text-lg font-medium">
            <NavItem selectedPage={selectedPage} setSelectedPage={setSelectedPage} name="About" route='/' />
            <NavItem selectedPage={selectedPage} setSelectedPage={setSelectedPage} name="Projects" route='/projects' />
            <NavItem selectedPage={selectedPage} setSelectedPage={setSelectedPage} name="Resume" route='/resume' />
        </div>
    </div>
  )
}

export default Navbar