import React from 'react';

const Home: React.FC = () => {
  const heroImages = [1, 2, 3];

  return (
    <div className="bg-[#0A0A0A] min-h-screen flex flex-col"> 
      <header id="heading" className="flex mt-8 mx-[100px] max-w-md text-white">
        <div
          className="p-2 font-bold text-4xl"
          style={{
            fontFamily: 'Century Schoolbook, serif',
            border: '0.4px solid white',
          }}
        >
          AF
        </div>
        <p className="ml-20 text-sm leading-7"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
          }}
        >
          Hi fellas, welcome to my personal website! (´• ω •`)ﾉ 
        </p>
      </header>

      <section id="hero" className="mt-12 mx-[100px] text-white flex justify-between">
        {heroImages.map((imageNumber) => (
          <img
            key={imageNumber}
            src={`/hero-image-${imageNumber}.webp`} 
            alt={`Hero Image ${imageNumber}`}
            className="max-w-[460px] h-auto" 
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
