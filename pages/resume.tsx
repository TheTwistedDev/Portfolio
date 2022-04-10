import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animations"

const resume = () => {
  return (
    <motion.div className="px-6 py-2" 
        variants={routeAnimation} 
        initial="initial" 
        animate="animate"
        exit="exit">
         {/** Education and Experience */}
        <div className="grid gap-6 md:grid-cols-2" >
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold">Self Education </h5>
                <div>
                    <h5 className="my-2 text-2xl font-bold">Full Stack Development</h5>
                    <p className="font-bold"> Online resources (2019 - present) </p>
                    <p className="my-3">
                        In my down time I am always looking to learn new technologies 
                        so that I can serve business and become a better Engineer.
                    </p>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold"> Experience </h5>
                <div>
                    <h5 className="my-2 text-2xl font-bold">Full Stack Developer</h5>
                    <p className="font-bold"> Building Applications(2019 - present) </p>
                    <p className="my-3">
                        I have built several applictions to solidify my learning and to serve
                        as milestone projects to practice what I have learned.
                    </p>
                </div>
            </motion.div>
        </div>

        {/** Languages and Tools */}
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 text-2xl font-bold"> Languages & Frameworks</h5>
                <div className="my-3">
                    {
                        languages.map(Language => <Bar data={Language} key={Language.name}/>)
                    }
                </div>
            </div>

            <div>
                <h5 className="my-3 text-2xl font-bold"> Tools & Softwares </h5>
                <div className="my-2">
                    {
                        tools.map(Tool => <Bar data={Tool} key={Tool.name}/>)
                    }
                </div>
            </div>

        </div>

    </motion.div>


  )
}

export default resume


