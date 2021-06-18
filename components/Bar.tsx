import { FunctionComponent } from 'react';
import { ISkill } from '../type';
import {motion} from 'framer-motion'



const Bar:FunctionComponent<{

    data:ISkill


}> = ({data:{Icon,level,name}}) => {

    const bar_width = `${level}%`;
    const variants={
        initial:{
            width:0,
        },
        animate:{
            width:level,
            transition:{
                duration:0.4,
                type:"spring",
                damping:10,
                stiffness:100,
            }
        }
    }


    return (
        <div className='my-2 bg-gray-300 rounded-full whitespace-nowrap'>
            
            <motion.div className='flex items-center px-4 py-1 rounded-full dark:text-black bg-gradient-to-r from-green-300 to-green-700'  
             variants={variants} initial="initial" animate="animate"
            >
                <div className='flex items-center'>
                <Icon className='mr-3'/>  
            {name}

                </ div>

            </motion.div>
        </div>
    )
}

export default Bar
