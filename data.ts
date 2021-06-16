import {RiComputerLine,RiCodeBoxFill} from 'react-icons/ri'
import { IService, ISkill } from './type';
import {FaPython,FaReact} from 'react-icons/fa'
import {SiDjango,SiAdobepremiere,SiTailwindcss,SiDatacamp} from 'react-icons/si'
import {BsBrush} from 'react-icons/bs'






export const services:IService[] =[
    {
        title:'Backend developpement',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
        Icon: RiCodeBoxFill,
    },
    {
        title:'Artificial intelligence',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
        Icon: SiDatacamp,
    },
    {
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
        Icon:SiTailwindcss,
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