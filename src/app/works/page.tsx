
'use client';
import { useEffect } from 'react';
import Script from 'next/script';


export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/works.css" />


  <div className="intro-overlay" id="intro-overlay"></div>
  <div className="page-title" id="page-title">Work</div>

  <h1 className="sr-only" >Projects — Roshan Sha, Creative Developer. Discover my projects in web development, animation, and interactive design.</h1>

  <a className="back-btn" id="back-btn" href="index.html" aria-label="Back to home">
    <span className="chr-hover" data-chr="Back"></span>
  </a>

  <div className="scroll-hint" id="scroll-hint">Scroll to explore</div>

  <div className="scroll-chevron" id="scroll-chevron">
    <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
  </div>

  <canvas className="ruler" id="ruler-left"></canvas>
  <canvas className="ruler" id="ruler-right"></canvas>
  <div className="counter-wrap" id="counter-wrap">
    <div className="counter-window">
      <div className="counter-strip" id="counter-strip"></div>
    </div>
  </div>

  <div className="cube-viewport" id="cube-viewport">
    <div className="cube-scene">
      <div className="cube" id="cube">
        <div className="cube-face" data-face="0"></div>
        <div className="cube-face" data-face="1"></div>
        <div className="cube-face" data-face="2"></div>
        <div className="cube-face" data-face="3"></div>
      </div>
    </div>
  </div>

  
  
  

      
      <Script src="/js/bundle-works.js" strategy="afterInteractive" />
    </>
  );
}
