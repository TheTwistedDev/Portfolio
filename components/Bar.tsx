import { FunctionComponent } from "react"
import { motion } from "framer-motion"
import { ISkill } from "../types"


const Bar:FunctionComponent<{
    data: ISkill
}> = ( {data: { Icon, level, name }} ) => {
  const bar_width = `${level}`

  const variants = {
    initial :{
      width:0
    },
    animate: {
      width:bar_width,
      transition:{
        type: "spring",
        duration: 0.4,
        damping: 10,
        stiffness: 100,
      },
    },
  }
  return (
    <div className="my-4 text-white bg-gray-300 rounded-full dark:bg-dark-300">
        <motion.div className="flex items-center px-4 py-1 tracking-wide rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                 style={{width:bar_width}}
                 variants={variants}
                 initial="initial"
                 animate="animate"
        >
            <Icon className="mr-3" />
            {name}
        </motion.div>
    </div>
  )
  }

export default Bar