// import React from 'react';

export default function Menu() {
  return (
    <header
      className="sticky top-0 w-full p-2 backdrop-blur-md z-50 border-b border-[#939393]/20"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(8, 9, 10, 0.6), rgba(8, 9, 10, 0.3))',
        transition: 'background-color 0.3s ease', // Optional: Smooth transition if needed
      }}
    >
      <div className="flex mx-[100px] justify-between text-white">
        <div
          className="p-2 m-1 font-bold text-xl"
          style={{
            fontFamily: 'Century Schoolbook, serif',
            border: '0.4px solid white',
          }}
        >
          AF
        </div>
        <p
          className="m-1 text-sm max-w-xs text-end leading-6"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
          }}
        >
          Hi fellas, welcome to Awfa's personal website! (´• ω •`)ﾉ 
        </p>
      </div>
    </header>
  );
}
