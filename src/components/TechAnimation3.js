import React from 'react';

const TechAnimation3 = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
    <svg width="600" height="400" viewBox="0 0 600 400" className="tech-animation">
      <defs>
        {/* DevOps CI/CD gradients */}
        <linearGradient id="cicdPipeline" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.4" />
        </linearGradient>
        
        <linearGradient id="cloudInfra" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
        </linearGradient>
        
        <linearGradient id="monitoring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
        </linearGradient>
        
        {/* DevOps effects */}
        <filter id="devopsGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="softGlow"/>
          <feMerge> 
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
        
        <filter id="infraShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#1e293b" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      <g opacity="0.95">
        {/* DevOps CI/CD Pipeline */}
        <g filter="url(#devopsGlow)">
          {/* CI/CD Pipeline stages */}
          <rect x="50" y="150" width="80" height="60" rx="8" fill="none" stroke="url(#cicdPipeline)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="70" y="175" fill="#dc2626" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">BUILD</text>
          <text x="75" y="190" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">STAGE</text>
          
          <rect x="160" y="150" width="80" height="60" rx="8" fill="none" stroke="url(#cicdPipeline)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
          </rect>
          <text x="180" y="175" fill="#f59e0b" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">TEST</text>
          <text x="180" y="190" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">STAGE</text>
          
          <rect x="270" y="150" width="80" height="60" rx="8" fill="none" stroke="url(#cicdPipeline)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
          </rect>
          <text x="285" y="175" fill="#eab308" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">DEPLOY</text>
          <text x="290" y="190" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">STAGE</text>
          
          {/* Cloud Infrastructure */}
          <rect x="420" y="80" width="120" height="80" rx="8" fill="none" stroke="url(#cloudInfra)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="455" y="110" fill="#1e40af" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">CLOUD</text>
          <text x="440" y="125" fill="#6b7280" fontSize="12" fontFamily="Arial, sans-serif">INFRASTRUCTURE</text>
          <text x="430" y="145" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Kubernetes • Docker</text>
          
          {/* Monitoring & Observability */}
          <rect x="420" y="240" width="120" height="80" rx="8" fill="none" stroke="url(#monitoring)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" begin="1s" repeatCount="indefinite" />
          </rect>
          <text x="450" y="270" fill="#059669" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">MONITORING</text>
          <text x="440" y="285" fill="#6b7280" fontSize="12" fontFamily="Arial, sans-serif">& OBSERVABILITY</text>
          <text x="430" y="305" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Prometheus • Grafana</text>
          
          {/* Pipeline Flow */}
          <path d="M130 180 L160 180" stroke="url(#cicdPipeline)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M240 180 L270 180" stroke="url(#cicdPipeline)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="1s" repeatCount="indefinite" />
          </path>
          <path d="M350 180 L420 120" stroke="url(#cloudInfra)" strokeWidth="2" strokeDasharray="4,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;-8" dur="3s" begin="2s" repeatCount="indefinite" />
          </path>
          
          {/* Git Repository */}
          <rect x="50" y="60" width="100" height="60" rx="8" fill="none" stroke="url(#monitoring)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" begin="0.5s" repeatCount="indefinite" />
          </rect>
          <text x="80" y="85" fill="#059669" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">GIT</text>
          <text x="70" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">REPOSITORY</text>
          
          {/* Performance Metrics */}
          <rect x="200" y="30" width="160" height="80" rx="6" fill="none" stroke="url(#cicdPipeline)" strokeWidth="2" filter="url(#infraShadow)">
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
          </rect>
          <text x="225" y="50" fill="#dc2626" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">DEVOPS METRICS</text>
          <text x="210" y="70" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Deploy Frequency: 12/day</text>
          <text x="210" y="85" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Lead Time: 2.3 hours</text>
          <text x="210" y="100" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">MTTR: 15 minutes</text>
          
          {/* Status indicators */}
          <circle cx="345" cy="55" r="4" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="525" cy="125" r="4" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="525" cy="285" r="4" fill="#059669" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  </div>
);

export default TechAnimation3;
