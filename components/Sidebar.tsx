import {AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'


const Sidebar = () => {
    return (
        <div> 
            <img src="https://media-exp3.licdn.com/dms/image/C4D03AQEkGb3TBxqSzA/profile-displayphoto-shrink_800_800/0/1571415781760?e=1628726400&v=beta&t=FtsuhKL7YbRve-x7Ei8ob3DBsL_lgUM_Dllrx902v_k" alt="user avatar" className="w-32 h-32 mx-auto rounded-full"/>
            <h3 className="my-4 text-3xl font-medium tracking-wider"><span> Wassil </span>
            Dahimene</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"> <GiTie className="w-6 h-6"/> Download resume</a>
            <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full"> 
                <a href="">
                    <AiOutlineGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="">
                    <AiOutlineLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="w-6 h-6"/>
                    <span> Bouchaoui / Cheraga, Algiers</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <AiOutlinePhone className="w-6 h-6"/>
                    <p className="my-2">0556739136</p>
                </div>
               

            </div>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-700 via-gray-900 to-black focus:outline-none" onClick={ () => window.open('mailto:ouassil.dahimene@gmail.com')}>Email me</button>
                <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-700 via-gray-900 to-black ">Dark mode</button>             
        </div>
    )
}

export default Sidebar
