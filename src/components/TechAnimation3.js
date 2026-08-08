import React from 'react';

/**
 * AboutIllustration3 — Animated tech stack skill rings.
 * Four circular progress arcs for Frontend, Backend, Mobile, DevOps
 * with animated fill and glowing accents.
 */
const TechAnimation3 = () => (
  <div className="ab-illu-wrapper">
    <svg viewBox="0 0 460 340" className="ab-illu-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ab3-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F36637"/>
          <stop offset="100%" stopColor="#ff8a50"/>
        </linearGradient>
        <linearGradient id="ab3-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EFBD8"/>
          <stop offset="100%" stopColor="#06d6b8"/>
        </linearGradient>
        <linearGradient id="ab3-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
        <linearGradient id="ab3-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <filter id="ab3-glow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ab3-shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.4"/>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="230" cy="170" rx="200" ry="130" fill="rgba(14,251,216,0.04)">
        <animate attributeName="rx" values="200;220;200" dur="6s" repeatCount="indefinite"/>
      </ellipse>

      {/* ── Title ── */}
      <text x="230" y="28" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.25)" fontFamily="monospace" letterSpacing="3">TECH EXPERTISE</text>
      <line x1="80" y1="34" x2="172" y2="34" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="288" y1="34" x2="380" y2="34" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

      {/* ══════════════════════
          4 skill rings — 2×2 grid
          circumference of r=58 ≈ 364.4
          ══════════════════════ */}

      {/* ── Ring 1: Frontend (top-left, cx=118, cy=120) ── */}
      <g transform="translate(118,120)">
        {/* Track */}
        <circle r="58" stroke="rgba(243,102,55,0.08)" strokeWidth="10" fill="none"/>
        {/* Progress: 90% = 0.9 × 364 ≈ 328 dash */}
        <circle r="58" stroke="url(#ab3-orange)" strokeWidth="10" fill="none"
                strokeLinecap="round"
                strokeDasharray="328 36"
                strokeDashoffset="91"
                filter="url(#ab3-glow)">
          <animate attributeName="stroke-dasharray" values="0 364;328 36;328 36" dur="1.8s" fill="freeze"/>
        </circle>
        {/* Inner card */}
        <circle r="44" fill="#131d35" filter="url(#ab3-shadow)"/>
        <circle r="42" fill="#0f1929" stroke="rgba(243,102,55,0.1)" strokeWidth="1"/>
        <text y="-8" textAnchor="middle" fontSize="20" fontWeight="700" fill="#F36637" fontFamily="monospace">90%</text>
        <text y="10" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Frontend</text>
        <text y="22" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">React • Next.js</text>
        {/* Glow dot at arc end */}
        <circle cx="46" cy="-35" r="5" fill="#F36637" filter="url(#ab3-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* ── Ring 2: Backend (top-right, cx=342, cy=120) ── */}
      <g transform="translate(342,120)">
        <circle r="58" stroke="rgba(14,251,216,0.08)" strokeWidth="10" fill="none"/>
        {/* 85% = 309 */}
        <circle r="58" stroke="url(#ab3-teal)" strokeWidth="10" fill="none"
                strokeLinecap="round"
                strokeDasharray="309 55"
                strokeDashoffset="91"
                filter="url(#ab3-glow)">
          <animate attributeName="stroke-dasharray" values="0 364;309 55;309 55" dur="1.8s" fill="freeze" begin="0.3s"/>
        </circle>
        <circle r="44" fill="#131d35" filter="url(#ab3-shadow)"/>
        <circle r="42" fill="#0f1929" stroke="rgba(14,251,216,0.1)" strokeWidth="1"/>
        <text y="-8" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0EFBD8" fontFamily="monospace">85%</text>
        <text y="10" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Backend</text>
        <text y="22" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">Node • API</text>
        <circle cx="46" cy="-35" r="5" fill="#0EFBD8" filter="url(#ab3-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
      </g>

      {/* ── Ring 3: Mobile (bottom-left, cx=118, cy=250) ── */}
      <g transform="translate(118,250)">
        <circle r="58" stroke="rgba(168,85,247,0.08)" strokeWidth="10" fill="none"/>
        {/* 88% = 320 */}
        <circle r="58" stroke="url(#ab3-purple)" strokeWidth="10" fill="none"
                strokeLinecap="round"
                strokeDasharray="320 44"
                strokeDashoffset="91"
                filter="url(#ab3-glow)">
          <animate attributeName="stroke-dasharray" values="0 364;320 44;320 44" dur="1.8s" fill="freeze" begin="0.6s"/>
        </circle>
        <circle r="44" fill="#131d35" filter="url(#ab3-shadow)"/>
        <circle r="42" fill="#0f1929" stroke="rgba(168,85,247,0.1)" strokeWidth="1"/>
        <text y="-8" textAnchor="middle" fontSize="20" fontWeight="700" fill="#a855f7" fontFamily="monospace">88%</text>
        <text y="10" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Mobile</text>
        <text y="22" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">React Native</text>
        <circle cx="46" cy="-35" r="5" fill="#a855f7" filter="url(#ab3-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* ── Ring 4: DevOps (bottom-right, cx=342, cy=250) ── */}
      <g transform="translate(342,250)">
        <circle r="58" stroke="rgba(59,130,246,0.08)" strokeWidth="10" fill="none"/>
        {/* 78% = 284 */}
        <circle r="58" stroke="url(#ab3-blue)" strokeWidth="10" fill="none"
                strokeLinecap="round"
                strokeDasharray="284 80"
                strokeDashoffset="91"
                filter="url(#ab3-glow)">
          <animate attributeName="stroke-dasharray" values="0 364;284 80;284 80" dur="1.8s" fill="freeze" begin="0.9s"/>
        </circle>
        <circle r="44" fill="#131d35" filter="url(#ab3-shadow)"/>
        <circle r="42" fill="#0f1929" stroke="rgba(59,130,246,0.1)" strokeWidth="1"/>
        <text y="-8" textAnchor="middle" fontSize="20" fontWeight="700" fill="#3b82f6" fontFamily="monospace">78%</text>
        <text y="10" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">DevOps</text>
        <text y="22" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">AWS • Docker</text>
        <circle cx="46" cy="-35" r="5" fill="#3b82f6" filter="url(#ab3-glow)" opacity="0.9">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
      </g>

      {/* Center connector cross */}
      <line x1="176" y1="120" x2="284" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="230" y1="62" x2="230" y2="192" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4"/>
      <circle cx="230" cy="185" r="4" fill="rgba(255,255,255,0.08)"/>

      {/* Floating stars */}
      {[{x:12,y:80},{x:448,y:60},{x:10,y:290},{x:450,y:300},{x:230,y:330}].map((s,i)=>(
        <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="rgba(255,255,255,0.4)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3+i*0.7}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  </div>
);

export default TechAnimation3;
