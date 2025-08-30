import React from 'react';

const TechAnimation2 = () => (
  <div className='ani'>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Advanced code editor gradients */}
        <linearGradient id="codeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFE66D" stopOpacity="0.8" />
        </linearGradient>
        
        <radialGradient id="terminalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FF41" stopOpacity="1" />
          <stop offset="100%" stopColor="#00FF41" stopOpacity="0" />
        </radialGradient>
        
        {/* Advanced filters */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="screenGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Typing animation gradient */}
        <linearGradient id="typingEffect" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="1" />
          <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-200 0; 200 0; -200 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      
      <g opacity="0.9">
        {/* Advanced IDE Code Editor */}
        <g filter="url(#screenGlow)">
          {/* Editor window */}
          <rect x="80" y="120" width="440" height="200" rx="8" stroke="#333" strokeWidth="2" fill="#1a1a1a" opacity="0.9" />
          <rect x="80" y="120" width="440" height="30" rx="8" fill="#2d2d2d" />
          
          {/* Window controls */}
          <circle cx="100" cy="135" r="6" fill="#ff5f57" />
          <circle cx="120" cy="135" r="6" fill="#ffbd2e" />
          <circle cx="140" cy="135" r="6" fill="#28ca42" />
          
          {/* Tab */}
          <rect x="160" y="125" width="80" height="20" fill="#3c3c3c" />
          <text x="170" y="138" fill="#fff" fontSize="10" fontFamily="monospace">App.js</text>
          
          {/* Line numbers */}
          <g fill="#666" fontSize="10" fontFamily="monospace">
            <text x="90" y="170">1</text>
            <text x="90" y="185">2</text>
            <text x="90" y="200">3</text>
            <text x="90" y="215">4</text>
            <text x="90" y="230">5</text>
            <text x="90" y="245">6</text>
            <text x="90" y="260">7</text>
            <text x="90" y="275">8</text>
          </g>
          
          {/* Syntax highlighted code */}
          <g fontSize="12" fontFamily="monospace" filter="url(#neonGlow)">
            <text x="110" y="170" fill="#ff6b6b">import</text>
            <text x="150" y="170" fill="#4ecdc4">React</text>
            <text x="185" y="170" fill="#ff6b6b">from</text>
            <text x="215" y="170" fill="#ffe66d">'react'</text>
            
            <text x="110" y="200" fill="#ff6b6b">const</text>
            <text x="145" y="200" fill="#4ecdc4">App</text>
            <text x="170" y="200" fill="#fff">=</text>
            <text x="180" y="200" fill="#ff6b6b">()</text>
            <text x="200" y="200" fill="#ff6b6b">=&gt;</text>
            <text x="220" y="200" fill="#fff">&#123;</text>
            
            <text x="120" y="215" fill="#ff6b6b">return</text>
            <text x="160" y="215" fill="#fff">(</text>
            
            <text x="130" y="230" fill="#4ecdc4">{'<div'}</text>
            <text x="170" y="230" fill="#ffe66d">className</text>
            <text x="230" y="230" fill="#fff">=</text>
            <text x="240" y="230" fill="#ffe66d">"app"</text>
            <text x="280" y="230" fill="#4ecdc4">{'>'}</text>
            
            <text x="140" y="245" fill="#4ecdc4">{'<h1>'}</text>
            <text x="175" y="245" fill="#fff">Hello World</text>
            <text x="250" y="245" fill="#4ecdc4">{'</h1>'}</text>
            
            <text x="130" y="260" fill="#4ecdc4">{'</div>'}</text>
            
            <text x="120" y="275" fill="#fff">)</text>
            <text x="130" y="275" fill="#fff">&#125;</text>
          </g>
          
          {/* Animated typing cursor */}
          <rect x="140" y="268" width="2" height="12" fill="#00ff88">
            <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
          </rect>
          
          {/* Code completion popup */}
          <g opacity="0.8">
            <rect x="200" y="280" width="120" height="60" rx="4" fill="#2d2d2d" stroke="#4ecdc4" strokeWidth="1" />
            <text x="210" y="295" fill="#4ecdc4" fontSize="10" fontFamily="monospace">useState</text>
            <text x="210" y="308" fill="#fff" fontSize="10" fontFamily="monospace">useEffect</text>
            <text x="210" y="321" fill="#fff" fontSize="10" fontFamily="monospace">useContext</text>
            <text x="210" y="334" fill="#fff" fontSize="10" fontFamily="monospace">useReducer</text>
            
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="4s" repeatCount="indefinite" />
          </g>
        </g>
        
        {/* Advanced API Dashboard */}
        <g filter="url(#neonGlow)">
          <rect x="350" y="100" width="200" height="150" rx="8" stroke="#4ecdc4" strokeWidth="2" fill="#0a0a0a" opacity="0.9" />
          <text x="360" y="120" fill="#4ecdc4" fontSize="14" fontFamily="sans-serif">API Monitor</text>
          
          {/* Real-time metrics */}
          <g fontSize="11" fontFamily="monospace">
            <text x="360" y="140" fill="#00ff88">GET /api/users</text>
            <text x="480" y="140" fill="#00ff88">200</text>
            <text x="510" y="140" fill="#00ff88">1.2ms</text>
            
            <text x="360" y="155" fill="#00ff88">POST /api/data</text>
            <text x="480" y="155" fill="#00ff88">201</text>
            <text x="510" y="155" fill="#00ff88">2.1ms</text>
            
            <text x="360" y="170" fill="#ffd700">PUT /api/update</text>
            <text x="480" y="170" fill="#ffd700">429</text>
            <text x="510" y="170" fill="#ffd700">5.3ms</text>
            
            <text x="360" y="185" fill="#ff4081">DELETE /api/item</text>
            <text x="480" y="185" fill="#ff4081">500</text>
            <text x="510" y="185" fill="#ff4081">timeout</text>
          </g>
          
          {/* Request rate visualization */}
          <g>
            <text x="360" y="205" fill="#4ecdc4" fontSize="10">Requests/sec:</text>
            <rect x="360" y="210" width="150" height="8" rx="4" stroke="#4ecdc4" fill="none" />
            <rect x="360" y="210" width="90" height="8" rx="4" fill="#00ff88" opacity="0.7">
              <animate attributeName="width" values="90;120;75;110;90" dur="3s" repeatCount="indefinite" />
            </rect>
            
            {/* Live counter */}
            <text x="520" y="218" fill="#00ff88" fontSize="10" fontFamily="monospace">
              <animate attributeName="fill" values="#00ff88;#4ecdc4;#00ff88" dur="1s" repeatCount="indefinite" />
              247
            </text>
          </g>
          
          {/* Error rate indicator */}
          <circle cx="530" cy="235" r="6" fill="#ff4081" opacity="0.8">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="540" y="240" fill="#ff4081" fontSize="9">3.2% errors</text>
        </g>
        
        {/* Database connections */}
        <g stroke="#9D4EDD" strokeWidth="2" fill="none">
          <rect x="100" y="350" width="80" height="60" rx="8" />
          <text x="125" y="375" fill="#9D4EDD" fontSize="12" fontFamily="sans-serif">MongoDB</text>
          <text x="125" y="390" fill="#9D4EDD" fontSize="12" fontFamily="sans-serif">Database</text>
          
          <rect x="250" y="350" width="80" height="60" rx="8" />
          <text x="280" y="375" fill="#9D4EDD" fontSize="12" fontFamily="sans-serif">Redis</text>
          <text x="280" y="390" fill="#9D4EDD" fontSize="12" fontFamily="sans-serif">Cache</text>
          
          {/* Connection lines */}
          <path d="M180 380 L250 380" markerEnd="url(#arrowhead)" />
          <path d="M330 380 L400 380" markerEnd="url(#arrowhead)" />
        </g>
        
        {/* Server architecture */}
        <g>
          <rect x="400" y="320" width="120" height="80" rx="10" stroke="#FF4081" strokeWidth="2" fill="none" />
          <text x="430" y="345" fill="#FF4081" fontSize="14" fontFamily="sans-serif">Node.js Server</text>
          <text x="430" y="365" fill="#FF4081" fontSize="12" fontFamily="sans-serif">Express.js</text>
          <text x="430" y="380" fill="#FF4081" fontSize="12" fontFamily="sans-serif">REST API</text>
          
          {/* Server load indicator */}
          <rect x="410" y="385" width="100" height="8" rx="4" stroke="#FF4081" fill="none" />
          <rect x="410" y="385" width="75" height="8" rx="4" fill="#FF4081" opacity="0.6">
            <animate attributeName="width" values="75;90;75" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Data packets */}
        <g>
          <rect x="50" y="300" width="30" height="20" rx="5" fill="#00BFFF" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 470,0; 0,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </rect>
          
          <polygon points="60,450 80,450 70,470" fill="#FFD700" opacity="0.8">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-150; 0,0"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
        
        {/* Git branches visualization */}
        <g stroke="#00FF88" strokeWidth="2" fill="none">
          <path d="M80 500 Q150 480 220 500 Q290 520 360 500" />
          <path d="M150 480 Q180 460 220 480" />
          <circle cx="80" cy="500" r="5" fill="#00FF88" />
          <circle cx="220" cy="500" r="5" fill="#00FF88" />
          <circle cx="360" cy="500" r="5" fill="#00FF88" />
          <circle cx="220" cy="480" r="4" fill="#FFD700" />
        </g>
      </g>
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#9D4EDD" />
        </marker>
      </defs>
    </svg>
  </div>
);

export default TechAnimation2;
