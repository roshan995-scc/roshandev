
'use client';
import { useEffect } from 'react';
import Script from 'next/script';


export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/styles/contact.css" />


  <div className="info-canvas" id="contact-canvas"></div>
  <div className="info-vignette"></div>

  <div className="intro-overlay" id="intro-overlay"></div>

  <div className="page-title" id="page-title">Contact</div>

  <a className="back-btn" id="back-btn" href="index.html" aria-label="Back to home">
    <span className="chr-hover" data-chr="Back"></span>
  </a>

  <main className="info-main contact-main" id="contact-main">

    <section className="info-left contact-left">
      <div className="contact-panel">
        <h2 className="contact-panel-title" >Let's talk about your project.</h2>
        <p className="contact-panel-copy" >
          I respond quickly to opportunities, freelance missions,
          and collaborations focusing on interactive web experiences.
        </p>
      </div>
      <div className="info-meta">
        <span className="info-meta-label" >Based in</span>
        <span className="info-meta-value" >Jalpaiguri, West Bengal, India</span>
      </div>
      <div className="info-meta">
        <span className="info-meta-label" >Status</span>
        <span className="info-meta-value" >Student / Freelance</span>
      </div>
      <div className="info-meta">
        <span className="info-meta-label" >Average response time</span>
        <span className="info-meta-value" >48 hours</span>
      </div>
    </section>

    <section className="info-right contact-right">
      <div className="info-headline">
        <span className="info-eyebrow" >Contact</span>
        <h1 className="info-name">Let&rsquo;s build together.</h1>
        <p className="info-role" >Creative developer, focused on animation, interaction, and tailor-made web experiences.</p>
      </div>

      <p className="info-desc" >
        If you have a project in mind or an ambitious idea, I'd be happy to chat, discuss it, and explore a potential collaboration.
      </p>

      <div className="contact-links">
        <div className="skill-col">
          <div className="skill-col-title" >Shortcuts</div>
          <ul>
            <li><a className="contact-link" href="mailto:roshansha2021@gmail.com" >Direct email</a></li>
            <li><a className="contact-link" href="https://www.linkedin.com/in/roshansha150/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="contact-link" href="https://github.com/roshan995-scc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div className="skill-col">
          <div className="skill-col-title" >Brief format</div>
          <ul>
            <li >Product goal</li>
            <li >Target deadline</li>
            <li >Tech stack</li>
            <li >Expected deliverables</li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <div className="info-bottom" id="contact-bottom">
    <a className="info-mail chr-hover" data-chr="roshansha2021@gmail.com" href="mailto:roshansha2021@gmail.com"></a>
    <span className="info-version">AVAILABLE 2026</span>
  </div>

  
  
  
  
  

      
      <Script src="/js/bundle-contact.js" strategy="afterInteractive" />
    </>
  );
}
