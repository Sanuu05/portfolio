import React from 'react';

const BackgroundAnimation3 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        {/* Spiral pattern */}
        <path
          d="M301 301m-50 0a50 50 0 1 1 100 0a40 40 0 1 1 -80 0a30 30 0 1 1 60 0a20 20 0 1 1 -40 0a10 10 0 1 1 20 0"
          stroke="url(#paint0_radial_3)"
          strokeWidth="2"
          fill="none"
          id="spiral_0"
        />
        <path
          d="M301 301m-80 0a80 80 0 1 1 160 0a70 70 0 1 1 -140 0a60 60 0 1 1 120 0a50 50 0 1 1 -100 0"
          stroke="url(#paint1_radial_3)"
          strokeWidth="1.5"
          fill="none"
          id="spiral_1"
        />
        
        {/* Network nodes */}
        <circle cx="200" cy="200" r="3" fill="#FF6B35" opacity="0.8" />
        <circle cx="400" cy="200" r="3" fill="#FF6B35" opacity="0.8" />
        <circle cx="200" cy="400" r="3" fill="#FF6B35" opacity="0.8" />
        <circle cx="400" cy="400" r="3" fill="#FF6B35" opacity="0.8" />
        <circle cx="301" cy="150" r="3" fill="#FF6B35" opacity="0.8" />
        <circle cx="301" cy="450" r="3" fill="#FF6B35" opacity="0.8" />
        
        {/* Connecting lines */}
        <line x1="200" y1="200" x2="400" y2="200" stroke="#1DD1A1" strokeWidth="1" opacity="0.6" />
        <line x1="200" y1="400" x2="400" y2="400" stroke="#1DD1A1" strokeWidth="1" opacity="0.6" />
        <line x1="200" y1="200" x2="200" y2="400" stroke="#1DD1A1" strokeWidth="1" opacity="0.6" />
        <line x1="400" y1="200" x2="400" y2="400" stroke="#1DD1A1" strokeWidth="1" opacity="0.6" />
        <line x1="301" y1="150" x2="301" y2="450" stroke="#1DD1A1" strokeWidth="1" opacity="0.6" />
        <line x1="200" y1="200" x2="301" y2="150" stroke="#1DD1A1" strokeWidth="1" opacity="0.4" />
        <line x1="400" y1="200" x2="301" y2="150" stroke="#1DD1A1" strokeWidth="1" opacity="0.4" />
      </g>
      
      {/* Animated particles on spiral */}
      <circle
        cx="351"
        cy="301"
        r="3"
        fill="#FF6B35"
      >
        <animateMotion dur="15s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#spiral_0" />
        </animateMotion>
      </circle>
      
      <circle
        cx="381"
        cy="301"
        r="2.5"
        fill="#1DD1A1"
      >
        <animateMotion dur="20s" begin="3s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#spiral_1" />
        </animateMotion>
      </circle>
      
      {/* Orbiting elements */}
      <g>
        <circle cx="301" cy="301" r="60" fill="none" stroke="#FFC048" strokeWidth="1" opacity="0.3" />
        <circle cx="361" cy="301" r="4" fill="#FFC048">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 301 301;360 301 301"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <g>
        <circle cx="301" cy="301" r="90" fill="none" stroke="#FF6B35" strokeWidth="1" opacity="0.2" />
        <circle cx="391" cy="301" r="3" fill="#FF6B35">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="360 301 301;0 301 301"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      {/* Pulsing center */}
      <circle
        cx="301"
        cy="301"
        r="5"
        fill="#1DD1A1"
        opacity="0.8"
      >
        <animate
          attributeName="r"
          values="5;15;5"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Floating diamonds */}
      <polygon
        points="301,100 315,114 301,128 287,114"
        fill="#FFC048"
        opacity="0.7"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,30; 0,0"
          dur="6s"
          repeatCount="indefinite"
        />
      </polygon>
      
      <polygon
        points="150,301 164,315 150,329 136,315"
        fill="#FF6B35"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -15,-25; 0,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </polygon>

      <defs>
        <radialGradient
          id="paint0_radial_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(50)"
        >
          <stop offset="0.2" stopColor="#FF6B35" />
          <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(80)"
        >
          <stop offset="0.3" stopColor="#1DD1A1" />
          <stop offset="1" stopColor="#1DD1A1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation3;
