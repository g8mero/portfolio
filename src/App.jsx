import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="bg-[url('/heroBg.svg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white p-8">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-16 max-w-6xl w-full">
        
        <div className="flex justify-center items-center">
          <img 
            src="/polaroid.jpeg" 
            alt="Polaroid preview"
            className="w-48 h-auto md:w-64 lg:w-80 shadow-2xl rounded-sm transform rotate-5" 
          />
        </div>

        <div className="-space-y-5 text-center md:text-left flex flex-col justify-center min-w-[280px] sm:min-w-[400px] md:min-w-[500px] md:space-y-0">
          <h1 className="font-cormorant text-6xl md:text-8xl tracking-tight leading-none">
            Hey! I'm a
          </h1>
          <TypeAnimation
            sequence={[
              'developer.', 1000,
              'speaker.', 1000,
              'leader.', 1000,
              'creative.', 1000,
              'student.', 1000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={30}
            repeat={Infinity}
            className="font-cormorant text-6xl md:text-8xl italic"
          />
          <div className = "flex flex-col items-center justify-center -space-y-14 md:flex-row md:items-startr md:justify-start md:space-y-0">
            <div>
              <button 
                onClick={() => alert('Coming soon!')}
                className="w-30 flex justify-center md:justify-start -mt-2"
              >
                <img 
                  src="/codeButton.png" 
                  alt="code" 
                  className="w-30 h-30 object-contain flex justify-start hover:cursor-pointer"
                />
              </button>
            </div>
            <div>
              <button 
                onClick={() => alert('Coming soon!')}
                className="w-30 flex justify-center md:justify-start -mt-2"
              >
                <img 
                  src="/communicateButton.png" 
                  alt="communication" 
                  className="w-30 h-30 object-contain flex justify-start hover:cursor-pointer"
                />
              </button>
            </div>
            <div>
              <button 
                onClick={() => alert('Coming soon!')}
                className="w-30 flex justify-center md:justify-start -mt-2"
              >
                <img 
                  src="/conserveButton.png" 
                  alt="conservation" 
                  className="w-30 h-30 object-contain flex justify-start hover:cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
