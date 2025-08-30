import React from 'react';

const TechAnimation1 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Advanced gradients */}
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="1" />
          <stop offset="70%" stopColor="#00FF88" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF4081" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF4081" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4081" stopOpacity="0" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-100 0; 100 0; -100 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
        
        {/* Glow filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g opacity="0.9">
        {/* Advanced circuit board with neural network */}
        <g stroke="#00FF88" strokeWidth="2" fill="none" filter="url(#glow)">
          {/* Main neural pathways */}
          <path d="M100 200 L200 200 L200 300 L350 300 L350 200 L500 200" id="circuit_1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M150 150 L150 250 L300 250 L300 350 L450 350" id="circuit_2" strokeDasharray="3,7">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M100 400 L250 400 L250 300 L400 300 L400 450 L500 450" id="circuit_3" strokeDasharray="8,2">
            <animate attributeName="stroke-dashoffset" values="0;-10" dur="0.8s" repeatCount="indefinite" />
          </path>
          
          {/* Neural network connections */}
          <g stroke="#00BFFF" strokeWidth="1" opacity="0.6">
            <path d="M200 200 Q250 150 300 200 Q350 250 400 200">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M300 250 Q350 200 400 250 Q450 300 500 250">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="1s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Advanced circuit nodes with pulsing */}
          <circle cx="200" cy="200" r="12" fill="url(#nodeGlow)" filter="url(#strongGlow)">
            <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="300" r="12" fill="url(#nodeGlow)" filter="url(#strongGlow)">
            <animate attributeName="r" values="12;18;12" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="250" r="12" fill="url(#nodeGlow)" filter="url(#strongGlow)">
            <animate attributeName="r" values="12;18;12" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="300" r="12" fill="url(#nodeGlow)" filter="url(#strongGlow)">
            <animate attributeName="r" values="12;18;12" dur="2s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Advanced microprocessors */}
          <g filter="url(#glow)">
            <rect x="175" y="175" width="50" height="50" rx="6" stroke="#00BFFF" strokeWidth="3" fill="#001122" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
            </rect>
            <rect x="185" y="185" width="30" height="30" rx="3" stroke="#00FF88" strokeWidth="1" fill="none" />
            <text x="195" y="205" fill="#00BFFF" fontSize="8" fontFamily="monospace">CPU</text>
            
            <rect x="275" y="225" width="50" height="50" rx="6" stroke="#FF4081" strokeWidth="3" fill="#220011" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" begin="1s" repeatCount="indefinite" />
            </rect>
            <rect x="285" y="235" width="30" height="30" rx="3" stroke="#FFD700" strokeWidth="1" fill="none" />
            <text x="295" y="255" fill="#FF4081" fontSize="8" fontFamily="monospace">GPU</text>
            
            <rect x="375" y="275" width="50" height="50" rx="6" stroke="#FFD700" strokeWidth="3" fill="#221100" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3.5s" begin="2s" repeatCount="indefinite" />
            </rect>
            <rect x="385" y="285" width="30" height="30" rx="3" stroke="#00FF88" strokeWidth="1" fill="none" />
            <text x="395" y="305" fill="#FFD700" fontSize="8" fontFamily="monospace">RAM</text>
          </g>
        </g>
        
        {/* Advanced data packets with trails */}
        <g>
          <g filter="url(#glow)">
            <rect x="90" y="195" width="25" height="12" rx="6" fill="url(#dataFlow)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 410,0; 0,0"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            {/* Data trail */}
            <rect x="70" y="197" width="15" height="8" rx="4" fill="#FF4081" opacity="0.3">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 410,0; 0,0"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          
          <g filter="url(#glow)">
            <ellipse cx="150" cy="250" rx="12" ry="8" fill="#FFD700">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 310,105; 0,0"
                dur="4s"
                begin="1s"
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Quantum particle effect */}
            <circle cx="150" cy="250" r="3" fill="#FFD700" opacity="0.6">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 310,105; 0,0"
                dur="4s"
                begin="1s"
                repeatCount="indefinite"
              />
              <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
        
        {/* Matrix-style binary rain */}
        <g fill="#00FF88" fontSize="10" fontFamily="monospace" opacity="0.7" filter="url(#glow)">
          <text x="120" y="100">10110101</text>
          <text x="250" y="120">11010011</text>
          <text x="380" y="80">01101110</text>
          <text x="450" y="140">10011001</text>
          <text x="80" y="60">11100110</text>
          <text x="320" y="90">00110101</text>
          
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,-100; 0,650"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.7;0" dur="12s" repeatCount="indefinite" />
        </g>
        
        {/* Central AI core */}
        <g filter="url(#strongGlow)">
          <circle cx="301" cy="301" r="20" fill="none" stroke="#00BFFF" strokeWidth="3">
            <animate attributeName="r" values="20;35;20" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="301" cy="301" r="15" fill="none" stroke="#FF4081" strokeWidth="2">
            <animate attributeName="r" values="15;25;15" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          <polygon points="301,285 318,301 301,317 284,301" fill="none" stroke="#FFD700" strokeWidth="2">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 301 301;360 301 301"
              dur="8s"
              repeatCount="indefinite"
            />
          </polygon>
          
          <polygon points="301,290 312,301 301,312 290,301" fill="#00FF88" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 301 301;0 301 301"
              dur="6s"
              repeatCount="indefinite"
            />
          </polygon>
          
          <text x="285" y="306" fill="#FFFFFF" fontSize="10" fontFamily="monospace">AI</text>
        </g>
        
        {/* Quantum entanglement visualization */}
        <g stroke="#9C27B0" strokeWidth="1" fill="none" opacity="0.6">
          <path d="M150 350 Q200 320 250 350 Q300 380 350 350">
            <animate attributeName="d" values="M150 350 Q200 320 250 350 Q300 380 350 350;M150 350 Q200 380 250 350 Q300 320 350 350;M150 350 Q200 320 250 350 Q300 380 350 350" dur="5s" repeatCount="indefinite" />
          </path>
          <circle cx="150" cy="350" r="4" fill="#9C27B0">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="350" r="4" fill="#9C27B0">
            <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  </div>
);

export default TechAnimation1;
