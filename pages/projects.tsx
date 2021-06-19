import { projects as projectsData } from "../data"
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { useState } from 'react';
import { Category } from '../type';
import {motion} from 'framer-motion';
import { fadeInUp, stagger, route_animation } from '../animation';



const Projects = () => {


const [projects, setProjects] = useState(projectsData)
const [active, setActive] = useState('all')

const handleFilterCategory=(category:Category | 'all')=>{

    if(category=='all'){ setProjects(projectsData); setActive(category); return;
    }

    const newArray= projectsData.filter(project=>project.category.includes(category));
    setProjects(newArray);
    setActive(category)

}

    return (
        <motion.div exit='exit' className="px-5 py-2 overflow-y-scroll"style={{height:'65vh'}} variants={route_animation}  initial='initial' animate='animate'>

     
<ProjectNavbar  handleFilterCategory={handleFilterCategory} active={active}/>
<motion.div variants={stagger} animate="animate" initial="initial" className='relative grid grid-cols-12 gap-4 my-3'>

    {
        projects.map(project=>(
            <motion.div variants={fadeInUp}  className="col-span-12 p-2 bg-gray-300 rounded-lg dark:bg-gray-400 dark:text-black sm:col-span-6 lg:col-span-4"  key={project.name}>
                <ProjectCard project={project} />
             
            </motion.div>
        ))
    }
</motion.div>
</motion.div>
    )
}

export default Projects
