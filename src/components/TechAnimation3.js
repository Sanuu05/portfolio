import React from 'react';

const TechAnimation3 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        {/* Cloud infrastructure */}
        <g>
          <ellipse cx="200" cy="150" rx="60" ry="30" stroke="#4FC3F7" strokeWidth="2" fill="none" />
          <ellipse cx="180" cy="140" rx="25" ry="15" stroke="#4FC3F7" strokeWidth="2" fill="none" />
          <ellipse cx="220" cy="140" rx="25" ry="15" stroke="#4FC3F7" strokeWidth="2" fill="none" />
          <text x="175" y="155" fill="#4FC3F7" fontSize="12" fontFamily="sans-serif">AWS Cloud</text>
          
          {/* Data flow to cloud */}
          <path d="M200 180 Q250 200 300 220" stroke="#4FC3F7" strokeWidth="2" fill="none" markerEnd="url(#cloudArrow)" />
        </g>
        
        {/* Docker containers */}
        <g>
          <rect x="350" y="200" width="80" height="50" rx="5" stroke="#0DB7ED" strokeWidth="2" fill="none" />
          <rect x="360" y="210" width="60" height="30" rx="3" stroke="#0DB7ED" strokeWidth="1" fill="#0DB7ED" opacity="0.2" />
          <text x="375" y="225" fill="#0DB7ED" fontSize="10" fontFamily="monospace">Docker</text>
          <text x="375" y="238" fill="#0DB7ED" fontSize="10" fontFamily="monospace">Container</text>
          
          {/* Container scaling animation */}
          <rect x="450" y="210" width="60" height="30" rx="3" stroke="#0DB7ED" strokeWidth="1" fill="#0DB7ED" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* React component tree */}
        <g stroke="#61DAFB" strokeWidth="2" fill="none">
          <circle cx="150" cy="300" r="20" />
          <text x="140" y="305" fill="#61DAFB" fontSize="12" fontFamily="sans-serif">App</text>
          
          <line x1="150" y1="320" x2="120" y2="350" />
          <line x1="150" y1="320" x2="180" y2="350" />
          
          <circle cx="120" cy="360" r="15" />
          <text x="110" y="365" fill="#61DAFB" fontSize="10" fontFamily="sans-serif">Header</text>
          
          <circle cx="180" cy="360" r="15" />
          <text x="170" y="365" fill="#61DAFB" fontSize="10" fontFamily="sans-serif">Main</text>
          
          {/* Component state updates */}
          <circle cx="150" cy="300" r="25" fill="none" stroke="#61DAFB" opacity="0.5">
            <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* API requests visualization */}
        <g>
          <rect x="300" y="350" width="200" height="100" rx="10" stroke="#FF9800" strokeWidth="2" fill="none" />
          <text x="320" y="375" fill="#FF9800" fontSize="14" fontFamily="sans-serif">REST API Gateway</text>
          
          {/* HTTP methods */}
          <rect x="320" y="385" width="40" height="20" rx="3" fill="#4CAF50" />
          <text x="330" y="398" fill="white" fontSize="10" fontFamily="monospace">GET</text>
          
          <rect x="370" y="385" width="40" height="20" rx="3" fill="#2196F3" />
          <text x="378" y="398" fill="white" fontSize="10" fontFamily="monospace">POST</text>
          
          <rect x="420" y="385" width="40" height="20" rx="3" fill="#FF5722" />
          <text x="430" y="398" fill="white" fontSize="10" fontFamily="monospace">PUT</text>
          
          {/* Request flow */}
          <circle cx="480" cy="395" r="3" fill="#00FF88">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -140,0; 0,0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Performance metrics */}
        <g>
          <rect x="80" y="450" width="150" height="80" rx="8" stroke="#E91E63" strokeWidth="2" fill="none" />
          <text x="100" y="470" fill="#E91E63" fontSize="12" fontFamily="sans-serif">Performance Monitor</text>
          
          {/* CPU usage bar */}
          <text x="90" y="490" fill="#E91E63" fontSize="10" fontFamily="sans-serif">CPU:</text>
          <rect x="120" y="482" width="80" height="8" rx="4" stroke="#E91E63" fill="none" />
          <rect x="120" y="482" width="50" height="8" rx="4" fill="#E91E63" opacity="0.7">
            <animate attributeName="width" values="50;70;45;60;50" dur="4s" repeatCount="indefinite" />
          </rect>
          
          {/* Memory usage */}
          <text x="90" y="510" fill="#E91E63" fontSize="10" fontFamily="sans-serif">RAM:</text>
          <rect x="120" y="502" width="80" height="8" rx="4" stroke="#E91E63" fill="none" />
          <rect x="120" y="502" width="35" height="8" rx="4" fill="#4CAF50" opacity="0.7" />
        </g>
        
        {/* WebSocket connection */}
        <g stroke="#9C27B0" strokeWidth="2" fill="none">
          <path d="M400 120 Q450 100 500 120 Q450 140 400 120" />
          <circle cx="400" cy="120" r="5" fill="#9C27B0" />
          <circle cx="500" cy="120" r="5" fill="#9C27B0" />
          <text x="430" y="110" fill="#9C27B0" fontSize="10" fontFamily="sans-serif">WebSocket</text>
          
          {/* Real-time data pulse */}
          <circle cx="450" cy="120" r="8" fill="none" stroke="#9C27B0" opacity="0.6">
            <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Mobile responsive indicators */}
        <g>
          <rect x="450" y="350" width="30" height="50" rx="5" stroke="#795548" strokeWidth="2" fill="none" />
          <rect x="455" y="355" width="20" height="30" rx="2" stroke="#795548" strokeWidth="1" fill="#795548" opacity="0.2" />
          <circle cx="465" cy="390" r="3" stroke="#795548" strokeWidth="1" fill="none" />
          
          <rect x="490" y="340" width="50" height="35" rx="3" stroke="#795548" strokeWidth="2" fill="none" />
          <rect x="495" y="345" width="40" height="20" rx="2" stroke="#795548" strokeWidth="1" fill="#795548" opacity="0.2" />
          
          <text x="460" y="420" fill="#795548" fontSize="10" fontFamily="sans-serif">Responsive</text>
        </g>
      </g>
      
      <defs>
        <marker id="cloudArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#4FC3F7" />
        </marker>
      </defs>
    </svg>
  </div>
);

export default TechAnimation3;
