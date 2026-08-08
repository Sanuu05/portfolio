import React from 'react';

/**
 * AboutIllustration1 — Animated developer stats dashboard card.
 * Shows live-updating commit graph, lines of code counter,
 * and project stats — like a personal GitHub dashboard.
 */
const TechAnimation1 = () => (
  <div className="ab-illu-wrapper">
    <svg viewBox="0 0 460 340" className="ab-illu-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ab1-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a2540"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="ab1-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F36637"/>
          <stop offset="100%" stopColor="#ff8a50"/>
        </linearGradient>
        <linearGradient id="ab1-teal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EFBD8"/>
          <stop offset="100%" stopColor="#06d6b8"/>
        </linearGradient>
        <filter id="ab1-glow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ab1-shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="230" cy="170" rx="200" ry="120" fill="rgba(243,102,55,0.07)">
        <animate attributeName="rx" values="200;220;200" dur="5s" repeatCount="indefinite"/>
      </ellipse>

      {/* ── Main dashboard card ── */}
      <rect x="30" y="20" width="400" height="300" rx="16" fill="url(#ab1-card)" filter="url(#ab1-shadow)"
            stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* Card header */}
      <rect x="30" y="20" width="400" height="44" rx="16" fill="#131d35"/>
      <rect x="30" y="44" width="400" height="4" fill="#131d35"/>
      <circle cx="54" cy="42" r="6" fill="#ff5f57"/>
      <circle cx="72" cy="42" r="6" fill="#febc2e"/>
      <circle cx="90" cy="42" r="6" fill="#28c840"/>
      <text x="230" y="47" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.3)" fontFamily="monospace">developer-stats.sh</text>

      {/* ── Stat cards row ── */}
      {/* Card 1: Years */}
      <rect x="48" y="82" width="96" height="68" rx="10" fill="rgba(243,102,55,0.08)" stroke="rgba(243,102,55,0.25)" strokeWidth="1"/>
      <text x="96" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#F36637" fontFamily="monospace">3+</text>
      <text x="96" y="124" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">Years Exp.</text>
      <rect x="55" y="136" width="82" height="3" rx="1.5" fill="rgba(243,102,55,0.15)"/>
      <rect x="55" y="136" width="55" height="3" rx="1.5" fill="url(#ab1-orange)">
        <animate attributeName="width" values="0;55;55" dur="2s" fill="freeze"/>
      </rect>

      {/* Card 2: Projects */}
      <rect x="158" y="82" width="96" height="68" rx="10" fill="rgba(14,251,216,0.06)" stroke="rgba(14,251,216,0.2)" strokeWidth="1"/>
      <text x="206" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#0EFBD8" fontFamily="monospace">10+</text>
      <text x="206" y="124" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">Projects</text>
      <rect x="165" y="136" width="82" height="3" rx="1.5" fill="rgba(14,251,216,0.12)"/>
      <rect x="165" y="136" width="68" height="3" rx="1.5" fill="url(#ab1-teal)">
        <animate attributeName="width" values="0;68;68" dur="2.3s" fill="freeze"/>
      </rect>

      {/* Card 3: Tech */}
      <rect x="268" y="82" width="96" height="68" rx="10" fill="rgba(168,85,247,0.07)" stroke="rgba(168,85,247,0.22)" strokeWidth="1"/>
      <text x="316" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#a855f7" fontFamily="monospace">20+</text>
      <text x="316" y="124" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">Technologies</text>
      <rect x="275" y="136" width="82" height="3" rx="1.5" fill="rgba(168,85,247,0.12)"/>
      <rect x="275" y="136" width="72" height="3" rx="1.5" fill="#a855f7">
        <animate attributeName="width" values="0;72;72" dur="2.6s" fill="freeze"/>
      </rect>

      {/* ── Contribution graph ── */}
      <text x="48" y="176" fontSize="10" fill="rgba(255,255,255,0.3)" fontFamily="monospace">contribution activity</text>
      {/* Graph bars */}
      {[
        {x:48,  h:28, c:'rgba(243,102,55,0.7)'},
        {x:66,  h:18, c:'rgba(243,102,55,0.4)'},
        {x:84,  h:38, c:'rgba(243,102,55,0.8)'},
        {x:102, h:24, c:'rgba(243,102,55,0.5)'},
        {x:120, h:44, c:'rgba(243,102,55,0.9)'},
        {x:138, h:16, c:'rgba(14,251,216,0.5)'},
        {x:156, h:36, c:'rgba(14,251,216,0.7)'},
        {x:174, h:48, c:'rgba(14,251,216,0.9)'},
        {x:192, h:22, c:'rgba(14,251,216,0.5)'},
        {x:210, h:40, c:'rgba(168,85,247,0.7)'},
        {x:228, h:30, c:'rgba(168,85,247,0.5)'},
        {x:246, h:52, c:'rgba(168,85,247,0.9)'},
        {x:264, h:20, c:'rgba(243,102,55,0.4)'},
        {x:282, h:44, c:'rgba(243,102,55,0.8)'},
        {x:300, h:32, c:'rgba(14,251,216,0.6)'},
        {x:318, h:56, c:'rgba(243,102,55,1.0)'},
        {x:336, h:24, c:'rgba(14,251,216,0.5)'},
        {x:354, h:46, c:'rgba(168,85,247,0.8)'},
      ].map((b, i) => (
        <rect key={i} x={b.x} y={230 - b.h} width="14" height={b.h} rx="3" fill={b.c}>
          <animate attributeName="height" values={`0;${b.h}`} dur={`${0.4 + i * 0.07}s`} fill="freeze" begin={`${i * 0.04}s`}/>
          <animate attributeName="y" values={`230;${230 - b.h}`} dur={`${0.4 + i * 0.07}s`} fill="freeze" begin={`${i * 0.04}s`}/>
        </rect>
      ))}

      {/* Graph baseline */}
      <line x1="48" y1="230" x2="370" y2="230" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

      {/* ── Terminal log line at bottom ── */}
      <rect x="48" y="244" width="364" height="58" rx="8" fill="#0d1524"/>
      <text x="60" y="262" fontSize="9.5" fill="rgba(14,251,216,0.8)" fontFamily="monospace">
        $ git log --oneline
      </text>
      <text x="60" y="277" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="monospace">
        a3f21c8 feat: add React Native push notifications
      </text>
      <text x="60" y="291" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="monospace">
        9bd4e1a fix: MongoDB aggregation pipeline optimized
      </text>
      {/* Blinking cursor */}
      <rect x="60" y="295" width="6" height="1" fill="rgba(14,251,216,0.9)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>

      {/* Floating dots */}
      {[{x:420,y:60},{x:440,y:280},{x:10,y:200},{x:14,y:80}].map((d,i)=>(
        <circle key={i} cx={d.x} cy={d.y} r="2.5" fill="rgba(243,102,55,0.5)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3+i}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  </div>
);

export default TechAnimation1;
