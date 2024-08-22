import React from 'react';
import Header from "../components/Header";
import { LampContainer } from "../components/ui/lamp";
import ExpandableCardDemo from "../components/blocks/expandable-card-demo-grid"

const Home: React.FC = () => {

  const heroImages = [1, 2, 3];
  
  const projects = [
    { id: 1, name: 'Keythicc', imageSrc: '/project-image-keythicc.webp', description:'Customizable keyboard commerce', icon:'/project-icon-keythicc.svg' },
    { id: 2, name: 'Triage', imageSrc: '/project-image-triage.webp', description:'Java emergency queue program', icon:'/project-icon-triage.svg'},
    // { id: 3, name: 'Nashua', imageSrc: '/project-image-nashua.webp', description:'tape branding website', icon:'/project-icon-nashua.svg'},
  ];

  const principles = [
    { id: 1, name: 'Driven', description:'A deep passion for continuous learning and embrace starting from the bottom.', icon:'/principle-icon-learn.svg' },
    { id: 2, name: 'Teamwork & Leadership', description:'Collaborative approach in managing and guiding teams effectively.', icon:'/principle-icon-leadership.svg'},
    { id: 3, name: 'Adaptive', description:'Swift learning allows me to navigate  challenges and achieve excellent results. ', icon:'/principle-icon-adaptive.svg'},
  ];

  const skills = [
    { id: 1, name: 'HTML', imageSrc:'/logo-html.svg' },
    { id: 2, name: 'Tailwind CSS', imageSrc:'/logo-tailwind.svg'},
    { id: 3, name: 'Figma', imageSrc:'/logo-figma.svg'},
    { id: 4, name: 'Java', imageSrc:'/logo-java.svg' },
    { id: 5, name: 'LateX', imageSrc:'/logo-latex.svg' },
    { id: 6, name: 'React', imageSrc:'/logo-react.svg' },
    { id: 7, name: 'AWS', imageSrc:'/logo-aws.svg' },
    { id: 8, name: 'Python', imageSrc:'/logo-python.svg' },
    { id: 9, name: 'R Language', imageSrc:'/logo-r.svg' },
    { id: 10, name: 'Github', imageSrc:'/logo-github.svg' },
  ];

  return (
    <div className="bg-[#08090A] flex flex-col relative overflow-clip">  
      {/* Header Section */}
      <Header/>

      {/* Hero Section */}
      <section id="hero" className="mt-8 mx-[100px] text-white flex justify-between">
        {heroImages.map((imageNumber) => (
          <img
            key={imageNumber}
            src={`/hero-image-${imageNumber}.webp`} 
            alt={`Hero Image ${imageNumber}`}
            className="max-w-[460px] h-auto"
          />
        ))}
      </section>

      {/* Ambient Light */}
      <div 
        className="absolute rounded-full h-[1380px] w-[560px]"
        style={{
          top: '100vh',
          transform: 'translateY(-350px) rotate(-45deg)',
          background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, 0.08) 0%, hsla(0, 0%, 55%, 0.02) 50%, hsla(0, 0%, 45%, 0) 80%)'
        }}
      ></div>
      
      {/* About Section */}
      <section id="about" className="mt-40 mx-[100px] h-screen flex flex-col justify-center relative overflow-hidden">
        <h1 className="font-bold text-7xl text-white">Awfa Farhan</h1>
        <h2 className="mt-3 text-xl text-[#CECECE]">
          Upcoming Medco Energi Business Apprentice - Digital Information and Technology
        </h2>

        <div id="text-content" className="mt-20 grid grid-cols-12 gap-12">
          <div className="col-span-8">
            <h2 className="font-semibold text-[24px] text-white">.about( )</h2>
            <p className="font-regular text-base leading-10 text-[#959595] mt-3 text-justify">
              <span className="block">
                As a Computer Science fresh graduate from Universitas Gadjah Mada, Awfa brings a quality-driven mindset and a dedication to continuous learning.
                Delving into Machine Learning, Cloud Computing, and Data Analytics, he further enriched his knowledge through a student exchange program at the University of Tokyo.
              </span>
              
              <span className="block mt-6">
                Combining academic excellence with hands-on work and projects, Awfa showcased his experience in establishing cloud-based infrastructure and acquired several certifications.
                Currently exploring how tech leverages the overall performance in the oil & gas industry.
              </span>
            </p>


            {/* buttons */}
            <div className="mt-24">
              <button className="font-semibold text-[15px] bg-white hover:bg-gray-200 text-[#1F1F1F] text-justify py-3 px-12 mr-12 rounded-lg">
                Resume
              </button>
              <button className="font-semibold text-[15px] py-3 px-12 inline-flex items-center border border-zinc-900 justify-center rounded-lg hover:bg-[#181919] space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="bg-gradient-to-r from-white to-[#747474] text-transparent bg-clip-text">Contact me</span>
                <img 
                  src='/icon-phone.svg'
                  alt='Icon phone'
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          <div id="principle" className="col-span-4">
            {/* principle */}
            {principles.map(({ id, name, description, icon }) => (
              <div key={id} className="mt-2 ml-36 text-white flex flex-col items-start">
                <div className='flex flex-items gap-4'>
                  <img 
                    src={icon} 
                    alt={`Principle Image ${name}`}
                    className="w-6 h-6"
                  />
                  <h2 className="font-semibold text-[16px] text-[#CECECE]">
                      {name}
                  </h2>                
                </div>
                <p className="mt-3 mb-20 font-regular leading-8 text-[15px] text-[#959595]">
                    {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="project" className='mx-[100px] '>
        <div id="text-content" className='mt-24 font-inter text-end'>
          <h2 className="font-semibold text-[24px] text-white">
            .projects( )
          </h2>
          <p className="font-regular text-base leading-10 text-[#959595] mt-3">
            When creativity expression turned into tangible works!         
          </p>
        </div>

        <div className="my-6 flex justify-end">
          <button className="font-semibold text-[13px] py-2 px-3 inline-flex items-center justify-center rounded-lg bg-[#181919] hover:bg-[#252727] space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-[#888D96] hover:text-white">
            <span>Learn more</span>
            <img 
              src='/icon-right.svg'
              alt='Icon right'
              className="w-6 h-6"
            />
          </button>
        </div>

        <div id="project-content" className='my-16 grid grid-cols-2 gap-x-10 gap-y-10'>
          {projects.map(({ id, name, imageSrc, description, icon }) => (
            <div key={id} className="w-[690px] text-white flex flex-col items-start hover:cursor-pointer">
              <div className="overflow-hidden">
                <img 
                  src={imageSrc} 
                  alt={`Project Image ${name}`}
                  className="max-w-[700px] h-auto transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className='mt-5 flex flex-items'>
                <img 
                  src={icon} 
                  alt={`Project Image ${name}`}
                  className="w-auto h-auto"
                />
                <div>
                  <h2 className="font-semibold text-lg text-[#CECECE]">
                    {name}
                  </h2>
                  <p className="font-regular text-[16px] text-[#959595] text-center">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      
        <section id="skills" className='mt-16 mx-[100px] relative '>
        <LampContainer>
          <div id="text-content" className='pb-44 font-inter text-center'>
            <h2 className="font-semibold text-[24px] text-white">
              .skills( )
            </h2>
            <p className="font-regular text-base leading-10 text-[#959595] mt-3">
              Navigating the landscape of proficiency and potential       
            </p>
          </div>
          
          <div className="mx-48 flex flex-wrap justify-around">
            {skills.map(({ id, name, imageSrc }) => (
              <img 
                key={id}
                src={imageSrc} 
                alt={`Project Image ${name}`}
                className="w-1/5 h-20 transform transition-transform duration-500 mb-32"
              />
            ))}
          </div>
          </LampContainer>
        </section>
      

      
      <section id="interests" className='mb-32 mx-[100px] z-10'>
        <div id="text-content" className='mb-20 font-inter text-center'>
          <h2 className="font-semibold text-[24px] text-white">
            .interests( )
          </h2>
          <p className="font-regular text-base leading-10 text-[#959595] mt-3">
            Venturing across the spectrum of digital innovation: mastering the art and science of technology  
          </p>
        </div>

        {/* Card */}
        <ExpandableCardDemo/>
      </section>

    </div>
  );
};

export default Home;
