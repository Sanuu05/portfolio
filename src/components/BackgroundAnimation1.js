import React from 'react';

const BackgroundAnimation1 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        {/* Hexagonal pattern */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M301 50L450 125V275L301 350L152 275V125L301 50Z"
          stroke="url(#paint0_radial_1)"
          strokeWidth="2"
          id="hex_0"
        />
        <path
          d="M301 100L400 150V250L301 300L202 250V150L301 100Z"
          stroke="url(#paint1_radial_1)"
          strokeWidth="1.5"
          id="hex_1"
        />
        <path
          d="M301 150L350 175V225L301 250L252 225V175L301 150Z"
          stroke="url(#paint2_radial_1)"
          strokeWidth="1"
          id="hex_2"
        />
      </g>
      
      {/* Animated particles */}
      <circle
        cx="301"
        cy="125"
        r="3"
        fill="#00D4FF"
      >
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#hex_0" />
        </animateMotion>
      </circle>
      
      <circle
        cx="301"
        cy="150"
        r="2"
        fill="#FF6B6B"
      >
        <animateMotion dur="6s" begin="1s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#hex_1" />
        </animateMotion>
      </circle>
      
      <circle
        cx="301"
        cy="175"
        r="1.5"
        fill="#4ECDC4"
      >
        <animateMotion dur="4s" begin="2s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#hex_2" />
        </animateMotion>
      </circle>
      
      {/* Floating triangles */}
      <polygon
        points="301,200 315,225 287,225"
        fill="#FFE66D"
        opacity="0.7"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 301 212.5;360 301 212.5"
          dur="10s"
          repeatCount="indefinite"
        />
      </polygon>
      
      <polygon
        points="350,180 360,195 340,195"
        fill="#FF6B6B"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 350 190;0 350 190"
          dur="8s"
          repeatCount="indefinite"
        />
      </polygon>

      <defs>
        <radialGradient
          id="paint0_radial_1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 200) rotate(90) scale(150)"
        >
          <stop offset="0.2" stopColor="#00D4FF" />
          <stop offset="1" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 200) rotate(90) scale(100)"
        >
          <stop offset="0.3" stopColor="#4ECDC4" />
          <stop offset="1" stopColor="#4ECDC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 200) rotate(90) scale(50)"
        >
          <stop offset="0.4" stopColor="#FFE66D" />
          <stop offset="1" stopColor="#FFE66D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation1;
