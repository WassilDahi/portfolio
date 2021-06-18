import { FunctionComponent, useState } from 'react';
import { IProject } from '../type';
import { AiOutlineGithub } from 'react-icons/ai';
import {MdClose} from 'react-icons/md';
import Image from 'next/image';


const ProjectCard:FunctionComponent<{

    project:IProject

}> = ({

    project:{
        name,image_path,category,deployed_url,description,github_url,key_techs
    }




}) => {



    const [showDetails, setShowDetails] = useState(false)
    
    return (
        <div>
               <Image src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetails(true)} width='400' layout='responsive' height='200'/>
               <p className='my-2 text-center'>{name}</p>

                {
                    showDetails && 
                
               <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-900'>

                   <div>
                   <Image src={image_path} alt={name} width='400' layout='responsive' height='200'/>
                   <div  className="flex justify-center my-4 space-x-3">
                       <a href={github_url} className="flex items-center px-4 py-4 space-x-3 text-lg text-white bg-gray-700 rounded-md dark:text-white dark:bg-gray-700"><AiOutlineGithub/>
                       <span>Github</span></a>
                       
                       <a href={deployed_url} className="flex items-center px-4 py-4 space-x-3 text-lg text-white bg-gray-700 rounded-md dark:text-white dark:bg-gray-700" > <AiOutlineGithub/>
                       <span>Project</span> </a>
                      
                   </div>
                   
                   
                   
                   </div>

                    <div>
                        <h2 className='mb-2 text-xl font-medium md:text-2xl'>
                            {name}
                        </h2>
                        <h3  className='mb-2 font-medium'>{description}</h3>
                        <div className="flex flex-wrap space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map((tech) => <span key={tech} className="px-2 py-1 my-1 text-white bg-gray-700 rounded-sm dark:bg-gray-700">
                                    {tech}
                                </span>)
                                }
                            
                        </div>


                    </div>

                    <button  className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-500' onClick={()=>setShowDetails(false)}>
                        <MdClose  size={30}/>
                    </button>

               </div>
               }
        </div>
    )
}

export default ProjectCard
