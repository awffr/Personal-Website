import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';

const projects = [
  { id: 1 , name: 'Keythicc', imageSrc: '/project-image-keythicc.webp', description: 'Customizable keyboard commerce', icon: '/project-icon-keythicc.svg', color: '#4F17F7', details: 'Keythicc is a customizable keyboard e-commerce platform that allows users to build their own keyboards with various designs and features.' },
  { id: 2, name: 'Triage', imageSrc: '/project-image-triage.webp', description: 'Java emergency queue program', icon: '/project-icon-triage.svg', color: '#3AF09E', details: 'Triage is a Java-based application for managing emergency room queues efficiently.' },
  { id: 3, name: 'Nashua', imageSrc: '/project-image-nashua.webp', description: 'Tape branding website', icon: '/project-icon-nashua.svg', color: '#FCB910', details: 'Nashua is a branding website for a tape manufacturing company.' },
];

const ProjectDetail: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projects.find(p => p.name === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-[#08090A] min-h-screen flex flex-col relative overflow-clip">
      <Header/>

      <section id='headline' className="my-6 mx-[110px] flex justify-between">
        <div id='identifier' className="my-5 flex">
          <img 
            src='/project-icon-keythicc.svg' 
            alt={`Project Image Keythicc`}
            className="w-auto h-auto"
          />
          <div className="ml-4">
            <h2 className="font-semibold text-base text-[#CECECE]">
              Keythicc
            </h2>
            <p className="font-regular text-base text-[#959595]">
              Custom Keyboard commerce
            </p>
          </div>
        </div>
        <div id='position' className='my-5 '>
          <div className="ml-4 flex flex-col gap-2">
            <h2 className="text-sm text-[#959595]">
              Frontend Developer
            </h2>
            <p className="text-sm text-[#959595]">
              Feb – Jul 2022
            </p>
          </div>
        </div>
      </section>

      <section id='hero' className="relative mx-[110px] h-[600px] p-8 flex flex-col bg-[#4F17F7] rounded-xl">
        <div className="flex justify-center items-center absolute inset-0">
          <img 
            src='/keythicc-hero.svg' 
            alt={`Keythicc Hero Image`}
            className="w-3/5 h-auto transform translate-y-28"
          />
        </div>
      </section>

      <section id='description' className="my-40 mx-40 flex justify-between">
        <div className="my-5 flex">
          <div className="max-w-4xl">
            <h2 className="font-thin text-xl leading-loose tracking-wide text-[#CECECE]">
            <span className='font-bold'>KeyThicc</span> is a mini class project e-Commerce centered around keyboards and its corresponding peripherals. The <span className='font-bold text-[#4F17F7]'>#1</span> go to market for not only custom keyboard enthusiasts, but all sorts of people who are interested and require our products whether it be for daily office use, or even professional gaming line of works!
            </h2>
            <div className="mt-6 flex flex-items justify-between">
              <div>
                <p className="mt-4 py-3 font-bold text-base text-[#CECECE]">
                  Contribution
                </p>
                <p className="text-base text-[#959595]">
                  UI/UX Design, Prototypes, Frontend Development
                </p>
              </div>
              
              <div>
                <p className="mt-4 py-3 font-bold text-base text-[#CECECE]">
                  Website
                </p>
                <Link to='https://keythicc.vercel.app' className="text-[16px] text-[#4F17F7]">
                  https://keythicc.vercel.app
                </Link>
              </div>
            </div>
            <p className='mt-14 font-thin tracking-wider leading-8 text-base text-[#959595]'>
              At KeyThicc, we understand that every keyboard user is unique — whether you’re looking for a sleek, minimalist design for your office desk or a high-performance mechanical keyboard for your gaming setup, we offer a diverse selection of products to meet your specific needs. Our commitment to quality and customization ensures that you get exactly what you want, without compromising on performance or style!
            </p>
          </div>
        </div>
        <div id='tech-stack' className='my-5'>
          <h2 className="font-bold text-base text-[#CECECE]">
            Tech Stacks
           </h2>
           <div>
            <div className="my-14 flex flex-items gap-10">
                <img 
                  src='/logo-tailwind.svg' 
                  alt={`Logo tailwind`}
                  className="w-20 h-20"
                />
                <img 
                  src='/logo-shipper.svg' 
                  alt={`Logo shipper`}
                  className="w-20 h-20"
                />
              </div>
              <div className="my-14 flex flex-items gap-10">
                <img 
                  src='/logo-mongodb.svg' 
                  alt={`Logo mongodb`}
                  className="w-20 h-20"
                />
                <img 
                  src='/logo-midtrans.svg' 
                  alt={`Logo midtrans`}
                  className="w-20 h-20"
                />
              </div>
              <div className="my-14 flex flex-items gap-10">
                <img 
                  src='/logo-react.svg' 
                  alt={`Logo react`}
                  className="w-20 h-20"
                />
              </div>
           </div>
        </div>
      </section>

      <section className="relative mx-[110px]">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-items items-center bg-[#0D0D0D] border border-zinc-800 rounded-xl py-8 mr-8">
            <h1 className='font-regular text-xl leading-10 text-[#CECECE] p-5'> KeyThicc offers you a fully customizeable mechanical keyboards, so build it your own! </h1>
            <img 
                  src='/keythicc-bento-image-1.svg' 
                  alt={`Keythicc bento image`}
                  className="w-auto h-auto"
                />
          </div>
          <div className="col-span-1 flex flex-col items-between bg-[#0D0D0D] border border-zinc-800 rounded-xl py-8">
            <h1 className='font-regular text-lg leading-10 text-[#CECECE] p-5'>Our current innovation is the ‘keyboard builder’ where customers can simulate building their own keyboards using components they handpick within our catalog. </h1>
            <p className='font-black text-7xl leading-10 text-[#4F17F7] p-5'>20 +</p>
            <p className='font-bold text-lg leading-10 text-[#4F17F7] p-5'>Combinations</p>
          </div>
          <div className="col-span-3 flex flex-col text-center items-center bg-[#4F17F7] border border-zinc-800 rounded-xl py-8 my-8">
            <p className='font-semibold text-base text-[#CECECE] p-5'>HIGHLIGHTS</p>
            <h1 className='font-regular text-3xl leading-10 text-[#ffffff] mx-40 mb-10 p-5'> At KeyThicc, we believe in the importance of a personalized user experience, and our products are designed with the highest standards of craftsmanship and innovation. </h1>
            <img 
              src='/keythicc-highlight-image-1.svg' 
              alt={`Keythicc highlight image 1`}
              className="w-3/4 h-3/4"
            />

            <h1 className='font-regular text-xl leading-10 text-[#ffffff] mx-96 mb-10 mt-52 p-5'> Shipping cost estimator is up and running, making our business ready to start as soon as possible. </h1>
            <img 
              src='/keythicc-highlight-image-2.svg' 
              alt={`Keythicc highlight image 2`}
              className="w-3/4 h-3/4"
            />

            <h1 className='font-regular text-xl leading-10 text-[#ffffff] mx-96 mb-10 mt-52 p-5'> In accordance with a shipping calculator, we also set up our payment gateway making transactions less hassle and gaining the consumers trust. </h1>
            <img 
              src='/keythicc-highlight-image-3.svg' 
              alt={`Keythicc highlight image 3`}
              className="w-3/4 h-3/4"
            />
          </div>
        </div>
      </section>


      
      
    </div>
  );
};

export default ProjectDetail;
