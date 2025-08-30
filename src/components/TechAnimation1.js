import React from 'react';

const TechAnimation1 = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
    <svg width="600" height="400" viewBox="0 0 600 400" className="tech-animation">
      <defs>
        {/* Front-end UI/UX gradients */}
        <linearGradient id="uiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
        </linearGradient>
        
        <linearGradient id="componentFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.4" />
        </linearGradient>
        
        <linearGradient id="responsiveDesign" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Professional UI effects */}
        <filter id="uiGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="softGlow"/>
          <feMerge> 
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
        
        <filter id="designShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1e293b" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      <g opacity="0.95">
        {/* Front-end UI Components */}
        <g filter="url(#uiGlow)">
          {/* Main UI Container */}
          <rect x="200" y="120" width="200" height="160" rx="12" fill="none" stroke="url(#uiGradient)" strokeWidth="3" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="210" y="130" width="180" height="140" rx="8" fill="url(#uiGradient)" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="270" y="150" fill="#3b82f6" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">UI FRAMEWORK</text>
          
          {/* React Components */}
          <rect x="80" y="60" width="100" height="70" rx="8" fill="none" stroke="url(#componentFlow)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="110" y="85" fill="#10b981" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">REACT</text>
          <text x="95" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">COMPONENTS</text>
          
          <rect x="420" y="60" width="100" height="70" rx="8" fill="none" stroke="url(#responsiveDesign)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
          </rect>
          <text x="450" y="85" fill="#8b5cf6" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">CSS</text>
          <text x="435" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">ANIMATIONS</text>
          
          <rect x="80" y="270" width="100" height="70" rx="8" fill="none" stroke="url(#uiGradient)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
          </rect>
          <text x="110" y="295" fill="#3b82f6" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">STATE</text>
          <text x="95" y="310" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">MANAGEMENT</text>
          
          <rect x="420" y="270" width="100" height="70" rx="8" fill="none" stroke="url(#componentFlow)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </rect>
          <text x="440" y="295" fill="#10b981" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">RESPONSIVE</text>
          <text x="450" y="310" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">DESIGN</text>
        </g>
        
        {/* Component Data Flow */}
        <g filter="url(#uiGlow)">
          {/* Component connections */}
          <path d="M180 95 L200 150" stroke="url(#componentFlow)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M400 150 L420 95" stroke="url(#responsiveDesign)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="1s" repeatCount="indefinite" />
          </path>
          <path d="M180 305 L200 280" stroke="url(#uiGradient)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="2s" repeatCount="indefinite" />
          </path>
          <path d="M400 280 L420 305" stroke="url(#componentFlow)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Browser Viewport */}
        <g filter="url(#uiGlow)">
          <rect x="50" y="350" width="120" height="30" rx="6" fill="none" stroke="url(#uiGradient)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="80" y="370" fill="#3b82f6" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="500">DESKTOP VIEW</text>
          
          <rect x="430" y="350" width="120" height="30" rx="6" fill="none" stroke="url(#responsiveDesign)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" begin="2s" repeatCount="indefinite" />
          </rect>
          <text x="465" y="370" fill="#8b5cf6" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="500">MOBILE VIEW</text>
        </g>
        
        {/* UI Interactions */}
        <g filter="url(#uiGlow)">
          {/* Animated UI element */}
          <rect x="220" y="170" width="160" height="8" rx="4" fill="url(#componentFlow)" opacity="0.6">
            <animate attributeName="width" values="160;180;160" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="225" y="190" fill="#10b981" fontSize="10" fontFamily="Arial, sans-serif">Progress Bar</text>
          
          <rect x="220" y="200" width="160" height="20" rx="4" fill="none" stroke="url(#uiGradient)" strokeWidth="1" opacity="0.8">
            <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="225" y="235" fill="#3b82f6" fontSize="10" fontFamily="Arial, sans-serif">Interactive Button</text>
          
          <rect x="220" y="245" width="160" height="15" rx="3" fill="url(#responsiveDesign)" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="225" y="275" fill="#8b5cf6" fontSize="10" fontFamily="Arial, sans-serif">Form Input</text>
          
          {/* Performance metrics */}
          <rect x="220" y="30" width="160" height="60" rx="6" fill="none" stroke="url(#componentFlow)" strokeWidth="2" filter="url(#designShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
          </rect>
          <text x="240" y="50" fill="#10b981" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">PERFORMANCE</text>
          <text x="225" y="65" fill="#6b7280" fontSize="10" fontFamily="Arial, sans-serif">Load Time: 0.8s</text>
          <text x="225" y="78" fill="#6b7280" fontSize="10" fontFamily="Arial, sans-serif">Bundle Size: 245KB</text>
          
          {/* Status indicator */}
          <circle cx="365" cy="45" r="4" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  </div>
);

export default TechAnimation1;
