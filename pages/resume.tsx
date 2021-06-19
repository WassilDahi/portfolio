import { languages, tools } from '../data';
import Bar from '../components/Bar';
import {motion} from 'framer-motion'

import { fadeInUp, route_animation } from '../animation';

const resume = () => {

 


  return (
    <motion.div variants={route_animation}  initial='initial' animate='animate' className="px-6 py-2 divide-y">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="inital" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer engineering</h5>
            <p className="font-semibold">USTHB (2015-2018)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, culpa cupiditate itaque accusantium corrupti nihil
              facilis laboriosam, cum esse quibusdam vel, id labore iusto non
              corporis praesentium possimus reiciendis harum?
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="inital" animate="animate" exit='exit'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Intern</h5>
            <p className="font-semibold">ELCS RESAERCH (2018)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, culpa cupiditate itaque accusantium corrupti nihil
              facilis laboriosam, cum esse quibusdam vel, id labore iusto non
              corporis praesentium possimus reiciendis harum?
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="">
          <h5 className="my-3 text-2xl font-bold">
            Languages & Frameworks
          </h5>
          <div className="my-2">
              {
                  languages.map(Language=>(<Bar data={Language} key={Language.name}/>))
              }
          </div>
        </div>
        <div className="">
          <h5 className="my-3 text-2xl font-bold">
            Tools
          </h5>
          <div className="my-2">
              {
                  tools.map(Tool=>(<Bar data={Tool} key={Tool.name}/>))
              }
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
