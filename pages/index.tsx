import Head from 'next/head'
import Image from 'next/image'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from "framer-motion"
import { fadeInUp,routeAnimation,stagger } from "../animations"

export default function Home() {
  return (
    <motion.div className="flex flex-col flex-grow h-[91%] px-6 pt-1" 
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit">
      <h5 className="my-3 font-medium tracking-wide">
        I am a self taught developer and have been practicing Web Developement for 3+ years now.
        I am excited to finally be starting my journey as a professional developer and Im looking 
        for opportunities to use what I have learned to help companies to improve or start development of their online applications.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-300" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-4 text-xl font-bold tracking-wide"> What I Offer </h6>
        <motion.div className="grid gap-6 tracking-wide lg:grid-cols-2" variants={stagger} animate="animate" initial="initial">
          {
            services.map(service => (
              <motion.div key={Math.random()}
                variants={fadeInUp}
                className="bg-gray-200 rounded-lg shadow-custom-light dark:shadow-custom-dark lg:col-span-1 dark:bg-dark-200">
                <ServiceCard service={service} key={service.title}/>
              </motion.div>        
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}
