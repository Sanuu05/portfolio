import React from 'react';

const TechAnimation2 = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
    <svg width="600" height="400" viewBox="0 0 600 400" className="tech-animation">
      <defs>
        {/* Backend server architecture gradients */}
        <linearGradient id="serverCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
        </linearGradient>
        
        <linearGradient id="apiFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.5" />
        </linearGradient>
        
        <radialGradient id="systemCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
        </radialGradient>
        
        {/* Subtle professional effects */}
        <filter id="enterpriseGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="softGlow"/>
          <feMerge> 
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
        
        <filter id="businessShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#1e293b" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      <g opacity="0.95">
        {/* Backend Server Architecture */}
        <g filter="url(#enterpriseGlow)">
          {/* Main server core */}
          <rect x="250" y="150" width="100" height="100" rx="8" fill="none" stroke="url(#serverCore)" strokeWidth="3" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="260" y="160" width="80" height="80" rx="6" fill="url(#serverCore)" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="275" y="175" fill="#1e40af" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">SERVER CORE</text>
          <text x="290" y="210" fill="#6b7280" fontSize="12" fontFamily="Arial, sans-serif">CORE</text>
          
          {/* API Gateway */}
          <rect x="100" y="80" width="90" height="60" rx="6" fill="none" stroke="url(#apiFlow)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="110" y="85" fill="#10b981" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">API</text>
          <text x="100" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">GATEWAY</text>
          
          {/* Database */}
          <rect x="410" y="80" width="90" height="60" rx="6" fill="none" stroke="url(#serverCore)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
          </rect>
          <text x="445" y="85" fill="#dc2626" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">DATABASE</text>
          <text x="450" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">CLUSTER</text>
          
          {/* Authentication Service */}
          <rect x="100" y="260" width="90" height="60" rx="6" fill="none" stroke="url(#apiFlow)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
          </rect>
          <text x="110" y="295" fill="#8b5cf6" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">AUTH</text>
          <text x="100" y="310" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">SERVICE</text>
          
          {/* Cache Layer */}
          <rect x="410" y="260" width="90" height="60" rx="6" fill="none" stroke="url(#serverCore)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </rect>
          <text x="450" y="295" fill="#f59e0b" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">CACHE</text>
          <text x="450" y="310" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">LAYER</text>
        </g>
        
        {/* API Data Flow */}
        <g filter="url(#enterpriseGlow)">
          {/* API connections */}
          <path d="M190 110 L250 150" stroke="url(#apiFlow)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M350 150 L410 110" stroke="url(#serverCore)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="1s" repeatCount="indefinite" />
          </path>
          <path d="M190 290 L250 250" stroke="url(#apiFlow)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="2s" repeatCount="indefinite" />
          </path>
          <path d="M350 250 L410 290" stroke="url(#serverCore)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Load Balancer */}
        <g filter="url(#enterpriseGlow)">
          <rect x="50" y="350" width="120" height="40" rx="6" fill="none" stroke="url(#apiFlow)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="75" y="370" fill="#10b981" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="500">LOAD BALANCER</text>
          
          <rect x="430" y="350" width="120" height="40" rx="6" fill="none" stroke="url(#serverCore)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" begin="2s" repeatCount="indefinite" />
          </rect>
          <text x="460" y="370" fill="#dc2626" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="500">MONITORING</text>
        </g>
        
        {/* Server Metrics */}
        <g filter="url(#enterpriseGlow)">
          <rect x="220" y="30" width="160" height="80" rx="6" fill="none" stroke="url(#serverCore)" strokeWidth="2" filter="url(#businessShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
          </rect>
          <text x="225" y="50" fill="#1e40af" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">SERVER METRICS</text>
          
          <text x="230" y="70" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">CPU: 45%</text>
          <text x="230" y="85" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Memory: 2.1GB</text>
          <text x="230" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Requests/sec: 1,247</text>
          
          {/* Status indicator */}
          <circle cx="365" cy="55" r="4" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  </div>
);

export default TechAnimation2;
