import {AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'
import {useTheme} from 'next-themes'
import { useState, useEffect } from 'react';
import Image from 'next/image'


const Sidebar = () => {
    const [mounted, setMounted] = useState(false)
    const {theme,setTheme} = useTheme();
    const [current, setCurrent] = useState<string>(theme=='light' || theme=='system' ? 'Dark': 'Light')
   

  
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null
   

    console.log({theme})
    // When mounted on client, now we can show the UI
    


    const changeTheme= () => {
        console.log(theme)
        setTheme(theme=='light'?'dark':'light');
        theme=='dark'?setCurrent('Dark'):setCurrent('Light');
    }

  
    console.log({theme})
  

  

    return (
        <div> 

            <Image width='128px' height='128px' src="/images/profil.jpeg" alt="user avatar" className="w-32 h-32 mx-auto rounded-full"/>
            <h3 className="my-4 text-3xl font-medium tracking-wider"><span> Wassil </span>
            Dahimene</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-500">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-500"> <GiTie className="w-6 h-6"/> Download resume</a>
            <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full"> 
                <a href="">
                    <AiOutlineGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiOutlineLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-gray-500" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="w-6 h-6"/>
                    <span> Bouchaoui / Cheraga, Algiers</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <AiOutlinePhone className="w-6 h-6"/>
                    <p className="my-2">0556739136</p>
                </div>
               

            </div>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full dark:text-black dark:from-gray-500 dark:to-gray-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black focus:outline-none" onClick={ () => window.open('mailto:ouassil.dahimene@gmail.com')}>Email me</button>
                <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full cursor-pointer dark:text-black dark:from-gray-500 dark:to-gray-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:hover:from-gray-700 dark:hover:to-gray-900 dark:hover:text-white hover:from-gray-500 hover:to-gray-200 hover:text-black focus:outline-none" onClick={changeTheme}>{current} mode</button>             
        </div>
    )
}

export default Sidebar
