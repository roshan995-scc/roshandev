
'use client';
import { useEffect } from 'react';
import Script from 'next/script';


export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/info.css" />


  <div className="info-canvas" id="info-canvas"></div>
  <div className="info-vignette"></div>

  <div className="intro-overlay" id="intro-overlay"></div>

  <div className="page-title" id="page-title">Info</div>

  <a className="back-btn" id="back-btn" href="index.html" aria-label="Back to home">
    <span className="chr-hover" data-chr="Back"></span>
  </a>

  <main className="info-main" id="info-main">

    <section className="info-left">
      <div className="info-photo-wrap">
        <img className="info-photo" src="/assets/images/profile/me.jpg" alt="Roshan Sha" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>
      <div className="info-meta">
        <span className="info-meta-label" >Based in</span>
        <span className="info-meta-value" >Jalpaiguri, West Bengal, India</span>
      </div>
      <div className="info-meta">
        <span className="info-meta-label" >Status</span>
        <span className="info-meta-value" >Student (20 years old)</span>
      </div>
    </section>

    <section className="info-right">
      <div className="info-headline">
        <span className="info-eyebrow" >About</span>
        <h1 className="info-name">Roshan Sha.</h1>
        <p className="info-role" >Creative developer &amp; 1st Year B.Tech in CSE at a Tier-3 Engineering College in India.</p>
      </div>

      <p className="info-desc" >
        I design tailor-made web experiences, where technical precision meets
        emotion. Passionate about animation, interaction and <span className="other-accent">detail</span>,
        I always seek the symbiosis between art and information.
      </p>

      <div className="info-skills">
        <div className="skill-col">
          <div className="skill-col-title" >Frontend</div>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React · Next.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="skill-col">
          <div className="skill-col-title" >Animation &amp; 3D</div>
          <ul>
            <li>GSAP</li>
            <li>Lenis</li>
            <li>Three.js</li>
            <li>WebGL / GLSL</li>
            <li>Blender</li>
          </ul>
        </div>
        <div className="skill-col">
          <div className="skill-col-title" >Backend</div>
          <ul>
            <li>Node.js · Express</li>
            <li>Python</li>
            <li>Java · PHP</li>
            <li>MySQL · PostgreSQL</li>
            <li>MongoDB · Supabase</li>
          </ul>
        </div>
        <div className="skill-col">
          <div className="skill-col-title" >Security & Tools</div>
          <ul>
            <li>Linux · Bash</li>
            <li>OWASP · Nmap</li>
            <li>Metasploit</li>
            <li>Docker · Git</li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <div className="info-bottom" id="info-bottom">
    <a className="info-mail chr-hover" data-chr="roshansha2021@gmail.com" href="mailto:roshansha2021@gmail.com"></a>
    <span className="info-version"><svg style={{"width":"1.25em","height":"1.25em","verticalAlign":"-0.25em"}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg>V3.0</span>
  </div>

  
  
  
  
  

      
      <Script src="/js/bundle-info.js?v=2" strategy="afterInteractive" />
    </>
  );
}
