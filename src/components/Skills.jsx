import React, { useRef, useState } from 'react'
import '../App.css'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.',
      icon: faCss3
    },
    {
      name: 'Javascript',
      des: 'Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.',
      icon: faJs},
    {
      name: 'ReactJs',
      des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ',
      icon: faReact
    },
    {
      name: 'VueJs',
      des: 'Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt enim ex id et sit sint magna. Deserunt minim ullamco aute veniam. Do irure nulla ut quis.',
      icon: faVuejs
    },
    {
      name: 'Laravel',
      des: 'Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.',
      icon: faLaravel
    }
  
  ]);
  return (
     <><Title title="This is my skills" desc="Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor"/>
    <section className="skills">
    {
          listSkills.map((value, key) => (
            <div className={'skill-card '} key={key} >
              <FontAwesomeIcon className='icon' icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
   </section>
   </>
  )
}

export default Skills
