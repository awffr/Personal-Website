import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  { name: 'Keythicc', imageSrc: '/project-image-keythicc.webp', description: 'Customizable keyboard commerce', icon: '/project-icon-keythicc.svg', color: '#4F17F7', details: 'Keythicc is a customizable keyboard e-commerce platform that allows users to build their own keyboards with various designs and features.' },
  { name: 'Triage', imageSrc: '/project-image-triage.webp', description: 'Java emergency queue program', icon: '/project-icon-triage.svg', color: '#3AF09E', details: 'Triage is a Java-based application for managing emergency room queues efficiently.' },
  { name: 'Nashua', imageSrc: '/project-image-nashua.webp', description: 'Tape branding website', icon: '/project-icon-nashua.svg', color: '#FCB910', details: 'Nashua is a branding website for a tape manufacturing company.' },
];

const ProjectDetail: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projects.find(p => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-[#08090A] min-h-screen flex flex-col items-center text-white">
      <div className="w-full max-w-2xl p-4">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <img 
          src={project.imageSrc}
          alt={`Project Image ${project.name}`}
          className="w-full h-auto my-4"
        />
        <p className="mb-4">{project.details}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
