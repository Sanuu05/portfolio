import React from 'react';

const BackgroundAnimation2 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        {/* Wave patterns */}
        <path
          d="M50 301Q151 200 301 301T551 301"
          stroke="url(#paint0_linear_2)"
          strokeWidth="2"
          fill="none"
          id="wave_0"
        />
        <path
          d="M50 251Q151 150 301 251T551 251"
          stroke="url(#paint1_linear_2)"
          strokeWidth="1.5"
          fill="none"
          id="wave_1"
        />
        <path
          d="M50 351Q151 250 301 351T551 351"
          stroke="url(#paint2_linear_2)"
          strokeWidth="1.5"
          fill="none"
          id="wave_2"
        />
      </g>
      
      {/* Animated dots along waves */}
      <circle
        cx="50"
        cy="301"
        r="4"
        fill="#9D4EDD"
      >
        <animateMotion dur="12s" repeatCount="indefinite">
          <mpath xlinkHref="#wave_0" />
        </animateMotion>
      </circle>
      
      <circle
        cx="50"
        cy="251"
        r="3"
        fill="#F72585"
      >
        <animateMotion dur="10s" begin="2s" repeatCount="indefinite">
          <mpath xlinkHref="#wave_1" />
        </animateMotion>
      </circle>
      
      <circle
        cx="50"
        cy="351"
        r="2.5"
        fill="#4CC9F0"
      >
        <animateMotion dur="8s" begin="1s" repeatCount="indefinite">
          <mpath xlinkHref="#wave_2" />
        </animateMotion>
      </circle>
      
      {/* Pulsing circles */}
      <circle
        cx="301"
        cy="301"
        r="20"
        fill="none"
        stroke="#9D4EDD"
        strokeWidth="2"
        opacity="0.6"
      >
        <animate
          attributeName="r"
          values="20;40;20"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6;0.2;0.6"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle
        cx="301"
        cy="301"
        r="30"
        fill="none"
        stroke="#F72585"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <animate
          attributeName="r"
          values="30;50;30"
          dur="6s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.1;0.4"
          dur="6s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Floating squares */}
      <rect
        x="150"
        y="150"
        width="8"
        height="8"
        fill="#4CC9F0"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 50,-30; 0,0"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 154 154;360 154 154"
          dur="12s"
          repeatCount="indefinite"
          additive="sum"
        />
      </rect>
      
      <rect
        x="400"
        y="400"
        width="6"
        height="6"
        fill="#9D4EDD"
        opacity="0.7"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -40,20; 0,0"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 403 403;0 403 403"
          dur="8s"
          repeatCount="indefinite"
          additive="sum"
        />
      </rect>

      <defs>
        <linearGradient
          id="paint0_linear_2"
          x1="50"
          y1="301"
          x2="551"
          y2="301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D4EDD" />
          <stop offset="0.5" stopColor="#F72585" />
          <stop offset="1" stopColor="#4CC9F0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2"
          x1="50"
          y1="251"
          x2="551"
          y2="251"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F72585" />
          <stop offset="1" stopColor="#F72585" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2"
          x1="50"
          y1="351"
          x2="551"
          y2="351"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4CC9F0" />
          <stop offset="1" stopColor="#4CC9F0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation2;
