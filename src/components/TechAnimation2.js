import React from 'react';

/**
 * AboutIllustration2 — Animated multi-device mockup.
 * Shows a laptop + phone side by side, each with a live animated UI
 * representing web and mobile app development.
 */
const TechAnimation2 = () => (
  <div className="ab-illu-wrapper">
    <svg viewBox="0 0 460 340" className="ab-illu-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ab2-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050d1a"/>
          <stop offset="100%" stopColor="#0a1628"/>
        </linearGradient>
        <linearGradient id="ab2-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F36637"/>
          <stop offset="100%" stopColor="#ff8a50"/>
        </linearGradient>
        <linearGradient id="ab2-teal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EFBD8"/>
          <stop offset="100%" stopColor="#06d6b8"/>
        </linearGradient>
        <linearGradient id="ab2-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e2a45"/>
          <stop offset="100%" stopColor="#141c2f"/>
        </linearGradient>
        <filter id="ab2-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#000" floodOpacity="0.5"/>
        </filter>
        <filter id="ab2-glow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Ambient glows */}
      <ellipse cx="155" cy="210" rx="140" ry="80" fill="rgba(14,251,216,0.06)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="340" cy="200" rx="90" ry="100" fill="rgba(243,102,55,0.07)">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="5s" repeatCount="indefinite" begin="1s"/>
      </ellipse>

      {/* ══ LAPTOP ══ */}
      <g transform="translate(30, 40)" filter="url(#ab2-shadow)">
        {/* Screen bezel */}
        <rect width="248" height="158" rx="10" fill="url(#ab2-body)" stroke="rgba(14,251,216,0.2)" strokeWidth="1.5"/>
        {/* Screen */}
        <rect x="8" y="8" width="232" height="142" rx="6" fill="url(#ab2-screen)"/>

        {/* Browser bar */}
        <rect x="8" y="8" width="232" height="20" fill="#0d1828"/>
        <circle cx="18" cy="18" r="4" fill="#ff5f57" opacity="0.8"/>
        <circle cx="28" cy="18" r="4" fill="#febc2e" opacity="0.8"/>
        <circle cx="38" cy="18" r="4" fill="#28c840" opacity="0.8"/>
        <rect x="52" y="13" width="120" height="10" rx="5" fill="#1a2a45"/>
        <rect x="58" y="15" width="8" height="6" rx="2" fill="rgba(14,251,216,0.4)"/>
        <rect x="70" y="16" width="60" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>

        {/* Hero section of the website */}
        <rect x="14" y="32" width="220" height="52" rx="4" fill="rgba(243,102,55,0.06)" stroke="rgba(243,102,55,0.15)" strokeWidth="0.8"/>
        {/* Nav */}
        <rect x="18" y="36" width="212" height="12" fill="rgba(0,0,0,0.2)"/>
        <rect x="22" y="39" width="30" height="5" rx="2" fill="rgba(243,102,55,0.7)"/>
        <rect x="160" y="39" width="18" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
        <rect x="182" y="39" width="18" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
        <rect x="204" y="39" width="18" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
        {/* Hero text */}
        <rect x="22" y="56" width="80" height="8" rx="3" fill="rgba(255,255,255,0.55)"/>
        <rect x="22" y="68" width="55" height="5" rx="2" fill="rgba(14,251,216,0.5)"/>

        {/* Product grid */}
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x={14 + i*74} y={92} width="68" height="44" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
            <rect x={18 + i*74} y={96} width="60" height="28" rx="3" fill={i===0?"rgba(243,102,55,0.08)":i===1?"rgba(14,251,216,0.06)":"rgba(168,85,247,0.06)"}/>
            <rect x={18 + i*74} y={128} width="36" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
          </g>
        ))}

        {/* Animated highlight scan line */}
        <rect x="8" y="28" width="232" height="2" fill="url(#ab2-teal)" opacity="0.25">
          <animate attributeName="y" values="28;142;28" dur="3s" repeatCount="indefinite" ease="linear"/>
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
        </rect>

        {/* Laptop base */}
        <rect y="158" width="248" height="8" fill="#141c2f"/>
        <rect x="88" y="164" width="72" height="5" rx="2" fill="#0e1728"/>
      </g>

      {/* Laptop desk reflection */}
      <rect x="20" y="207" width="268" height="8" rx="2" fill="rgba(14,251,216,0.04)"/>

      {/* ══ PHONE ══ */}
      <g transform="translate(316, 54)" filter="url(#ab2-shadow)">
        <animate attributeName="transform" values="translate(316,54);translate(316,46);translate(316,54)" dur="3.5s" repeatCount="indefinite"/>
        {/* Phone shell */}
        <rect width="104" height="190" rx="18" fill="url(#ab2-body)" stroke="rgba(243,102,55,0.25)" strokeWidth="1.5"/>
        {/* Screen area */}
        <rect x="8" y="16" width="88" height="158" rx="10" fill="url(#ab2-screen)"/>
        {/* Notch */}
        <rect x="36" y="16" width="32" height="8" rx="4" fill="#141c2f"/>

        {/* App: top nav */}
        <rect x="8" y="24" width="88" height="22" fill="#0d1828"/>
        <rect x="14" y="30" width="36" height="5" rx="2" fill="rgba(243,102,55,0.7)"/>
        <rect x="78" y="29" width="12" height="7" rx="2" fill="rgba(255,255,255,0.1)"/>

        {/* Featured card */}
        <rect x="12" y="50" width="80" height="50" rx="8" fill="rgba(243,102,55,0.1)" stroke="rgba(243,102,55,0.25)" strokeWidth="0.8"/>
        <rect x="16" y="54" width="72" height="30" rx="5" fill="rgba(243,102,55,0.08)"/>
        <rect x="16" y="88" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="16" y="95" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>

        {/* List items */}
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x="12" y={108+i*22} width="80" height="18" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6"/>
            <rect x="16" y={112+i*22} width="16" height="10" rx="3" fill={i===0?"rgba(14,251,216,0.15)":i===1?"rgba(243,102,55,0.12)":"rgba(168,85,247,0.12)"}/>
            <rect x="36" y={113+i*22} width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
            <rect x="36" y={119+i*22} width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.1)"/>
          </g>
        ))}

        {/* Bottom nav */}
        <rect x="8" y="158" width="88" height="16" fill="#0d1828"/>
        {[0,1,2,3].map(i=>(
          <circle key={i} cx={20+i*22} cy="166" r="4" fill={i===0?"rgba(243,102,55,0.8)":"rgba(255,255,255,0.12)"}/>
        ))}

        {/* Home bar */}
        <rect x="32" y="178" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>

        {/* Side button */}
        <rect x="104" y="60" width="4" height="30" rx="2" fill="#1a2a45"/>
      </g>

      {/* Connection arc between devices */}
      <path d="M278 120 Q300 100 316 130" stroke="url(#ab2-teal)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite"/>
      </path>

      {/* Floating data packet */}
      <circle r="4" fill="#0EFBD8" opacity="0.9" filter="url(#ab2-glow)">
        <animateMotion dur="2.2s" repeatCount="indefinite">
          <mpath href="#ab2-conn"/>
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <path id="ab2-conn" d="M278 120 Q300 100 316 130" style={{display:'none'}}/>

      {/* Label badges */}
      <rect x="52" y="12" width="60" height="18" rx="9" fill="rgba(14,251,216,0.1)" stroke="rgba(14,251,216,0.3)" strokeWidth="1"/>
      <text x="82" y="24" textAnchor="middle" fontSize="8.5" fill="#0EFBD8" fontFamily="monospace">Web App</text>

      <rect x="326" y="12" width="72" height="18" rx="9" fill="rgba(243,102,55,0.1)" stroke="rgba(243,102,55,0.3)" strokeWidth="1"/>
      <text x="362" y="24" textAnchor="middle" fontSize="8.5" fill="#F36637" fontFamily="monospace">Mobile App</text>

      {/* Stars */}
      {[{x:10,y:30},{x:450,y:50},{x:8,y:290},{x:455,y:310}].map((s,i)=>(
        <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="rgba(255,255,255,0.5)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3+i}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  </div>
);

export default TechAnimation2;
