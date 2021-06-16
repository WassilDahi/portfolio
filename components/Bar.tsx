import { FunctionComponent } from 'react';
import { ISkill } from '../type';



const Bar:FunctionComponent<{

    data:ISkill


}> = ({data:{Icon,level,name}}) => {
    return (
        <div className='my-2 bg-gray-300 rounded-full '>

            <div className='flex items-center px-4 py-1 rounded-full dark:text-black bg-gradient-to-r from-green-300 to-green-700'  
            style={{ width: level }}
            >
                        <Icon className='mr-3'/>
            {name}
            </div>
        </div>
    )
}

export default Bar
