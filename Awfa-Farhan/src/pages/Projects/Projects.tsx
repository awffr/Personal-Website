import Header from '../../components/Header';
import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {

  const projects = [
    { id: 1, name: 'Keythicc', display: '/project-dipslay-keythicc.webp', imageSrc: '/project-image-keythicc.webp', description:'Customizable keyboard commerce', icon:'/project-icon-keythicc.svg', color: '#4F17F7' },
    { id: 2, name: 'Triage', display: '/project-image-triage.webp', imageSrc: '/project-image-triage.webp', description:'Java emergency queue program', icon:'/project-icon-triage.svg', color: '#3AF09E'},
    { id: 3, name: 'Nashua', display: '/project-image-nashua.webp', imageSrc: '/project-image-nashua.webp', description:'Tape branding website', icon:'/project-icon-nashua.svg', color: '#FCB910'},
  ];
  
  return (
    <div className="bg-[#08090A] min-h-screen flex flex-col relative overflow-clip">
      <Header/>

      <section id="project" className='mx-[100px] '>
        <div id="project-content" className="my-16 flex flex-col items-center gap-y-10">
          {projects.map(({ id, name, display, description, icon, color }) => (
            <Link to={`/projects/${name}`} key={id} className="w-[90%] p-2 bg-[#0D0D0D] text-white hover:cursor-pointer border border-zinc-800 rounded-xl relative overflow-hidden transition-colors duration-500">
              <div className="my-5 flex px-12">
                <img 
                  src={icon} 
                  alt={`Project Image ${name}`}
                  className="w-auto h-auto"
                />
                <div className="ml-4">
                  <h2 className="font-semibold text-lg text-[#CECECE]">
                    {name}
                  </h2>
                  <p className="font-regular text-[16px] text-[#959595]">
                    {description}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden mb-8">
                <img 
                  src={display} 
                  alt={`Project Display ${name}`}
                  className="mx-auto w-[90%] h-auto transform transition-transform duration-500 hover:opacity-60"
                />
              </div>
              {/* Subtle gradient background effect based on color prop */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-600"
                style={{ background: `linear-gradient(to top, ${color}20 10%, transparent)` }}
              ></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
