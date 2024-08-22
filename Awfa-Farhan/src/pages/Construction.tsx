import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

export function Construction() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/home');
  };

  return (
    <div className="bg-[#08090A] min-h-screen flex flex-col relative overflow-clip">
      <Header/>
      {/* Ambient Light */}
      <div 
        className="absolute rounded-full h-[1880px] w-[560px] z-0"
        style={{
          top: '-450px',
          left: '300px',
          transform: 'rotate(-70deg)',
          background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, 0.08) 0%, hsla(0, 0%, 55%, 0.02) 50%, hsla(0, 0%, 45%, 0) 80%)'
        }}
      ></div>

      <div className="h-full flex flex-col flex-grow justify-center items-center">
        <img
          src='/site-under-construction.svg' 
          alt='Under Construction'
          className="w-1/6 h-1/6"
        />
        <h2 className="mt-16 font-semibold text-lg text-white">
          Site Under Construction
        </h2>
        <p className="mt-6 font-regular text-sm leading-7 text-[#959595] text-center">
          Please sit tight while I’m crafting something amazing behind the scenes. <br />
          “Good Things Take Time” — new look is coming soon!
        </p>
        <button
          onClick={handleReturnClick}
          className="mt-24 font-semibold text-sm py-2 px-4 gap-4 inline-flex items-center justify-center rounded-lg bg-[#181919] hover:bg-[#252727] space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-[#888D96] hover:text-white z-10"
        >
          <span>Return</span>
          <img 
            src='/icon-return.svg'
            alt='Icon return'
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Construction;
