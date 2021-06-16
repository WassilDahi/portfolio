import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';




const index = (props) => {


  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis.</h5>
      
      <div className='flex-grow p-4 mt-5 bg-gray-100' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold text-green-500'>What I offer</h6>
      <div className='grid gap-6 lg:grid-cols-2'>
        {services.map(services=>(
        <div className='bg-gray-300 rounded-lg lg:col-span-1'>
        <ServiceCard service={services}/>
        
        </div>
        ) )}
        </div>
        </div>

    </div>
  )
}

export default index


export const  getServerSideProps = async (context:GetServerSidePropsContext) => {

const res = await fetch('http://localhost:3000/api/services')

const data =  await res.json() 



return {
  props:{

    services: data.services,
  }
}

}