import { projects as projectsData } from "../data"
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { useState } from 'react';
import { Category } from '../type';


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
        <div className="px-5 py-2 overflow-y-scroll"style={{height:'65vh'}}>

     
<ProjectNavbar  handleFilterCategory={handleFilterCategory} active={active}/>
<div className='relative grid grid-cols-12 gap-4 my-3'>

    {
        projects.map(project=>(
            <div  className="col-span-12 p-2 bg-gray-300 rounded-lg dark:bg-gray-400 dark:text-black sm:col-span-6 lg:col-span-4"  key={project.name}>
                <ProjectCard project={project} />
             
            </div>
        ))
    }
</div>
</div>
    )
}

export default Projects
