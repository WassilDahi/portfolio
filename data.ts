import {RiComputerLine,RiCodeBoxFill} from 'react-icons/ri'
import { IService, ISkill, IProject } from './type';
import {FaPython,FaReact} from 'react-icons/fa'
import {SiDjango,SiAdobepremiere,SiTailwindcss,SiDatacamp} from 'react-icons/si'
import {BsBrush} from 'react-icons/bs'






export const services:IService[] =[

    {   id:1,
        title:'Backend developpement',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
        Icon: RiCodeBoxFill,
    },
    {  id:2,
        title:'Artificial intelligence',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
        Icon: SiDatacamp,
    },
    {   id:3,
        title:'Front end developpement',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
        Icon: BsBrush,
    },
]


export const languages:ISkill[] =[
    {   
        name:'Python',
        level:'80%',
        Icon: FaPython,
    },
    {
        name:'Django',
        level:'60%',
        Icon: SiDjango,
    },
    {
        name:'React JS',
        level:'40%',
        Icon: FaReact,
    },
    {   name:'Tailwind css',
        level:'30%',
        Icon: SiTailwindcss,
    },
]



export const tools:ISkill[] =[
    {
        name:'Adobe Premiere pro',
        level:'80%',
        Icon: SiAdobepremiere,
    },
    {
        name:'Django',
        level:'60%',
        Icon: SiDjango,
    },
    {
        name:'React JS',
        level:'40%',
        Icon: FaReact,
    },
]


export const projects:IProject[]=[

    {
        name:'Algo sorting',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['react'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'sorting',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['react'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'Alging',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['react'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'Algting',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['react'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'ting',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['react'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'Alting',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['mongo','django'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    },
    {
        name:'ing',
    description:"this is a project of algorthims sorting",
    image_path:'/images/sort.jpg',
    github_url:'',
    category:['django'],
    deployed_url:'',
    key_techs:['react','chartjs','tailwind css']

    }





]