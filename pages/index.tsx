import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import {motion} from 'framer-motion'
import { fadeInUp, stagger, route_animation } from '../animation';





const index = () => {


  return (

    <motion.div  variants={route_animation} className='flex flex-col flex-grow px-6 pt-1' initial='initial' exit='exit' animate='animate'>
      

      <h5 className='my-3 font-medium'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis.</h5>
      
      <div className='flex-grow p-4 mt-5 bg-gray-100 dark:bg-gray-700' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold text-green-500 dark:text-green-500'>What I offer</h6>
      <motion.div    variants={stagger} initial="initial" animate="animate" className='grid gap-6 lg:grid-cols-2'>

      {services.map(service=>(
        <motion.div  variants={fadeInUp}  key={service.id}  className='bg-gray-300 rounded-lg dark:bg-gray-500 lg:col-span-1'>
        <ServiceCard   service={service}/>
       
        
        </motion.div>
        ) )}
        </motion.div>
        </div>

    </motion.div>
  )
}

export default index
