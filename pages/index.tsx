import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { services } from '../data';




const index = (props) => {

  console.log('CLIENT',services)
  return (
    <div>
      <h1> portfolio wassil </h1>
    </div>
  )
}

export default index


export const  getServerSideProps = async (context:GetServerSidePropsContext) => {

const res = await fetch('http://localhost:3000/api/services')
console.log('SERVER',res)
const data =  await res.json() 



return {
  props:{

    services: data.services,
  }
}

}