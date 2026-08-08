import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* ── Code content — styled like a real Next.js API route ── */
const LINES = [
  { t: "// Vantara Zoo Management API",        k: 'cmt'   },
  { t: "import { NextApiRequest } from 'next';", k: 'mixed' },
  { t: "",                                       k: ''      },
  { t: "interface Animal {",                     k: 'kw'    },
  { t: "  id: string;",                          k: 'prop'  },
  { t: "  name: string;",                        k: 'prop'  },
  { t: "  species: string;",                     k: 'prop'  },
  { t: "  status: 'healthy' | 'critical';",      k: 'prop'  },
  { t: "}",                                       k: 'kw'    },
  { t: "",                                        k: ''      },
  { t: "export async function getAnimals(",       k: 'fn'    },
  { t: "  req: NextApiRequest",                   k: 'prop'  },
  { t: "): Promise<Animal[]> {",                  k: 'fn'    },
  { t: "  const db = await connectDB();",         k: 'mixed' },
  { t: "  return db.collection('animals')",       k: 'mixed' },
  { t: "    .find({ rescue: true })",             k: 'str'   },
  { t: "    .sort({ updatedAt: -1 })",            k: 'str'   },
  { t: "    .toArray();",                          k: 'mixed' },
  { t: "}",                                        k: 'kw'    },
  { t: "",                                          k: ''      },
  { t: "// 3,000+ animals tracked live 🐘",       k: 'cmt'   },
];

/* Colour map */
const C = {
  cmt:   '#6a9955',
  kw:    '#c586c0',
  fn:    '#dcdcaa',
  prop:  '#9cdcfe',
  str:   '#ce9178',
  mixed: '#d4d4d4',
  '':    '#d4d4d4',
};

/* File-tree entries */
const FILES = [
  { icon: '📁', name: 'src',        depth: 0, open: true  },
  { icon: '📁', name: 'api',        depth: 1, open: true  },
  { icon: '📄', name: 'animals.ts', depth: 2, active: true },
  { icon: '📄', name: 'health.ts',  depth: 2              },
  { icon: '📄', name: 'rescue.ts',  depth: 2              },
  { icon: '📁', name: 'components', depth: 1              },
  { icon: '📄', name: 'AnimalCard', depth: 2              },
  { icon: '📁', name: 'hooks',      depth: 1              },
  { icon: '📄', name: 'useAnimal',  depth: 2              },
];

const HeroAnimation = () => {
  const linesRef   = useRef([]);
  const cursorRef  = useRef(null);
  const hlRef      = useRef(null);      // active-line highlight bar
  const termRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

      /* Fade terminal in */
      tl.fromTo(termRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0,  scale: 1, duration: 0.7, ease: 'power3.out' }
      );

      /* Reveal lines one by one */
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        const chars = LINES[i]?.t?.length || 0;
        /* Slide + fade line in */
        tl.fromTo(el,
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.1, ease: 'none' },
          '>+0.02'
        );
        /* Move highlight + cursor to this line */
        tl.to([hlRef.current, cursorRef.current],
          { top: el.offsetTop, duration: 0.08, ease: 'none' }, '<'
        );
        /* Typing pause proportional to line length */
        if (chars > 0) tl.to({}, { duration: chars * 0.025 });
      });

      tl.to({}, { duration: 2 });   /* read pause */

      /* Fade out */
      tl.to(termRef.current, { opacity: 0, duration: 0.5 });
      tl.set(linesRef.current, { opacity: 0 });
    }, termRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="ht-outer">
      {/* ── ambient halos ── */}
      <div className="ht-halo ht-halo-1"/>
      <div className="ht-halo ht-halo-2"/>

      <div className="ht-window" ref={termRef}>

        {/* ══ Title bar ══ */}
        <div className="ht-titlebar">
          <span className="ht-dot ht-red"/>
          <span className="ht-dot ht-yel"/>
          <span className="ht-dot ht-grn"/>
          <span className="ht-tabs">
            <span className="ht-tab ht-tab-active">animals.ts</span>
            <span className="ht-tab">health.ts</span>
            <span className="ht-tab">App.tsx</span>
          </span>
        </div>

        {/* ══ Body: sidebar + editor ══ */}
        <div className="ht-body">

          {/* ── File Explorer sidebar ── */}
          <div className="ht-sidebar">
            <div className="ht-sidebar-title">EXPLORER</div>
            {FILES.map((f, i) => (
              <div
                key={i}
                className={`ht-file${f.active ? ' ht-file-active' : ''}`}
                style={{ paddingLeft: 8 + f.depth * 12 }}
              >
                <span className="ht-file-icon">{f.icon}</span>
                <span className="ht-file-name">{f.name}</span>
              </div>
            ))}
          </div>

          {/* ── Editor pane ── */}
          <div className="ht-editor">
            {/* Line numbers + code */}
            <div className="ht-gutter">
              {LINES.map((_, i) => (
                <div key={i} className="ht-ln">{i + 1}</div>
              ))}
            </div>

            <div className="ht-code-area">
              {/* Active-line highlight */}
              <div className="ht-line-hl" ref={hlRef}/>

              {/* Code lines */}
              {LINES.map((line, i) => (
                <div
                  key={i}
                  className="ht-line"
                  ref={el => { linesRef.current[i] = el; }}
                  style={{ color: C[line.k] }}
                >
                  {line.t || '\u00a0'}
                </div>
              ))}

              {/* Blinking cursor */}
              <span className="ht-cursor" ref={cursorRef}/>
            </div>

            {/* Minimap (decorative) */}
            <div className="ht-minimap">
              {LINES.map((line, i) => (
                <div key={i} className="ht-mm-line"
                  style={{ width: `${Math.min(100, line.t.length * 3.5)}%`,
                           background: line.k ? C[line.k] : 'transparent',
                           opacity: 0.25 + (i % 3) * 0.08 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ══ Status bar ══ */}
        <div className="ht-statusbar">
          <span className="ht-status-left">
            <span className="ht-git">⎇&nbsp; main</span>
            <span className="ht-errs">✓ 0 errors&nbsp; ⚡ 0 warnings</span>
          </span>
          <span className="ht-status-right">
            <span>TypeScript React</span>
            <span>UTF‑8</span>
            <span>Ln {LINES.length}, Col 1</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
