
'use client';
import { useEffect } from 'react';
import Script from 'next/script';


export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="/styles/index.css" />

  
  <div className="intro-bg" id="intro-bg"></div>

  
  <div className="name-layer" id="name-layer">
    <div className="preloader-content" id="preloader-content">
      <div id="preloader-logo">R</div>
      <span id="preloader-luke">oshan</span>
      <span id="preloader-baffait"> Sha</span>
      <span id="preloader-dot">.</span>
    </div>
  </div>

  
  <div className="transition-panel" id="transition-panel">
    <div className="t-panel-dark" id="t-panel-dark"></div>
    <div className="t-panel-red" id="t-panel-red"></div>
  </div>

  
  <div className="scroll-wrap" id="scroll-wrap">

    
    <section className="hero" id="hero">
      <h1 className="sr-only" >Roshan Sha — Creative Developer, Computer Science and Engineering student, specializing in web development, animation, and interactive design.</h1>
      <div className="hero-canvas" id="hero-canvas"></div>

      <div className="hero-content">
        <div className="hero-tagline" id="hero-tagline" >
          A discrete creative, <span className="other-accent">I bring ideas to life</span>,<br />
          through movement, detail, and smoothness.
        </div>

        <div className="hero-line" id="hero-line"></div>
        <div className="hero-bar" id="hero-bar">
          <div className="hero-bar-left">
            <span className="chr-hover" data-chr="🡺V3.0"></span>
          </div>
          <nav className="hero-bar-center" aria-label="Social networks">
            <a className="chr-hover" data-chr="LinkedIn" href="https://www.linkedin.com/in/roshansha150/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
            <span className="sep" aria-hidden="true">/</span>
            <a className="chr-hover" data-chr="GitHub" href="https://github.com/roshan995-scc" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          </nav>
          <nav className="hero-bar-right" aria-label="Navigation principale">
            <a className="chr-hover" data-chr="Work" href="works/" data-page-link="work" aria-label="Work"></a>
            <a className="chr-hover" data-chr="Info" href="info/" data-page-link="info" aria-label="Info"></a>
            <a className="chr-hover" data-chr="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
          </nav>
        </div>
      </div>
    </section>
  </div>

  
  <div className="reveal-image-wrap" id="reveal-image-wrap">
    <canvas className="reveal-image reveal-seq" id="reveal-canvas"></canvas>
    <div className="reveal-frame reveal-seq">
      <span className="reveal-corner tl"></span>
      <span className="reveal-corner tr"></span>
      <span className="reveal-corner bl"></span>
      <span className="reveal-corner br"></span>
    </div>
    <div className="reveal-overlay" id="reveal-overlay"></div>
    <p className="reveal-phrase" id="reveal-phrase">Basically, I make websites.</p>
  </div>

  
  <section className="section-after" id="section-after">
    <div className="about" id="about">
      <div className="about-text" id="about-text" >
        As a <span className="other-accent">creative developer</span>, I design tailor-made web experiences,
        blending technical precision with <span className="other-accent">emotion</span>.
      </div>
      <div className="about-sub" id="about-sub" >
        My name is Roshan. I am a passionate creative developer and Computer Science and Engineering student.
        I craft memorable digital experiences, always looking for a symbiosis between art and information.
      </div>
      <div className="about-btn">
        <a className="chr-hover" data-chr="Info" href="info/" data-page-link="info" aria-label="Learn more about me"></a>
      </div>
      <div className="about-version"><svg style={{"width":"1.25em","height":"1.25em","verticalAlign":"-0.25em"}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg>V3.0</div>
      <div className="about-photo-wrap" id="about-photo-wrap">
        <img className="about-photo" src="/assets/images/profile/me.jpg" alt="Roshan Sha" decoding="async" width="2500"
          height="3001" />
      </div>
    </div>

    <div className="projects" id="projects">
      <svg className="fluid-line-svg" id="fluid-line-svg" viewBox="0 0 1400 1400" preserveAspectRatio="xMidYMid slice">
        <path className="fluid-line" id="fluid-line" d="
          M -80,0
          C 300,-20  600,150  540,400
          C 490,650   0,655    300,1050
          C 600,1385 650,1250 850,1200
          C 1050,1150 1350,1250 1540,1300
        " />
      </svg>
      <div className="projects-inner">
        <div className="projects-list" id="projects-list">
          <div className="proj-item" data-id="cyberdiag" data-img="/assets/images/projects/Covers/cyberDiag_web.avif"
            data-date="01 2025">CyberDiag website</div>
          <div className="proj-item" data-id="anima" data-img="/assets/images/projects/Covers/Anima.avif"
            data-date="06 2025">Anima</div>
          <div className="proj-item" data-id="cyberdiag-app" data-img="/assets/images/projects/Covers/CyberDiag.avif"
            data-date="09 2025">CyberDiag app</div>
          <div className="proj-item" data-id="zenith" data-img="/assets/images/projects/Covers/Zenith.avif"
            data-date="11 2025">Zenith</div>
          <div className="proj-item" data-id="skymcdb" data-img="/assets/images/projects/Covers/SkymcDB.avif"
            data-date="02 2026">SkymcDB</div>
          <div className="proj-item" data-id="chromablock" data-img="/assets/images/projects/Covers/ChromaBlock.avif"
            data-date="03 2026">ChromaBlock</div>
          <div className="proj-item" data-id="symphony" data-img="/assets/images/projects/Covers/Symphony.avif"
            data-date="03 2026">Symphony</div>
          <div className="proj-item" data-id="echo" data-img="/assets/images/projects/Covers/Echo.avif" data-date="03 2026">
            Echo</div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="circle-gallery" id="circle-gallery">
    <div className="circle-gallery-pin" id="circle-gallery-pin">
      <img className="cg-img" src="/assets/images/projects/Covers/cyberDiag_web.avif" alt="CyberDiag — website" width="3000" height="2250" />
      <img className="cg-img" src="/assets/images/projects/Covers/Anima.avif" alt="Anima — animal rights website" width="3000" height="2250" />
      <img className="cg-img" src="/assets/images/projects/Covers/CyberDiag.avif" alt="CyberDiag — desktop cybersecurity app" width="1333" height="1000" />
      <img className="cg-img" src="/assets/images/projects/Covers/Zenith.avif" alt="Zenith — web browser" width="2667" height="2000" />
      <img className="cg-img" src="/assets/images/projects/Covers/SkymcDB.avif" alt="SkymcDB — tool for Minecraft builders" width="2667" height="2000" />
      <img className="cg-img" src="/assets/images/projects/Covers/ChromaBlock.avif" alt="ChromaBlock — web version of SkymcDB" width="2667" height="2000" />
      <img className="cg-img" src="/assets/images/projects/Covers/Symphony.avif" alt="Symphony — music web application" width="2667" height="2000" />
      <img className="cg-img" src="/assets/images/projects/Covers/Echo.avif" alt="Echo — local conversational AI interface" width="2667" height="2000" />
      <p className="cg-phrase" id="cg-phrase" >Each project is an opportunity to <span className="other-accent">learn</span>,
        <span className="other-accent">experiment</span>, and push my boundaries.</p>
    </div>
  </section>

  
  <section className="skills" id="skills">
    <div className="skills-inner">
      <div className="skills-left">
        <div className="skills-subtitle" >Skills</div>
        <div className="skills-text" >
          Computer Science and Engineering student, passionate about web development and design.
        </div>
        <div className="skills-separator"></div>
        <div><a className="skills-contact chr-hover" data-chr="Contact me🞣" href="contact/"
            data-page-link="contact" aria-label="Me contacter"></a></div>
        <div className="skills-arrow" id="skills-arrow"><svg style={{"width":"1.25em","height":"1.25em","verticalAlign":"-0.25em"}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg></div>
      </div>
      <div className="skills-right" id="skills-right">
        <div className="skill-group open" data-group="frontend">
          <div className="skill-header"><span className="skill-header-title" >Frontend</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Electron</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="animation">
          <div className="skill-header"><span className="skill-header-title" >Animation & 3D</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>GSAP</li>
              <li>Lenis</li>
              <li>Barba.js</li>
              <li>Three.js</li>
              <li>WebGL</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="backend">
          <div className="skill-header"><span className="skill-header-title" >Backend</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="database">
          <div className="skill-header"><span className="skill-header-title" >Databases</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="devops">
          <div className="skill-header"><span className="skill-header-title" >DevOps & Tools</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Docker</li>
              <li>Vercel</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Cloudflare</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="sysadmin">
          <div className="skill-header"><span className="skill-header-title" >System & Security</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Linux</li>
              <li>Bash</li>
              <li>Shell</li>
              <li>Owasp</li>
              <li>Metasploit</li>
              <li>Nmap</li>
              <li>OpenVAS</li>
              <li>Ossec</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="design">
          <div className="skill-header"><span className="skill-header-title" >Design</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Photoshop</li>
              <li>Canva</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <div className="contact-bg" id="contact-bg"></div>
  <div className="contact-blob-wrap" id="contact-blob-wrap">
    <div className="contact-blob" id="contact-blob"></div>
  </div>
  <section className="contact" id="contact">
    <div className="contact-pin" id="contact-pin">
      <div className="contact-title" id="contact-title">Contact</div>

      <div className="contact-dispo" id="contact-dispo">
        <p >Looking for an <span className="other-accent">opportunity</span> starting from September. Motivated to join
          an innovative team and contribute to ambitious projects.</p>
      </div>

      <div className="contact-frame" id="contact-frame">
        <img className="contact-frame-img" id="contact-frame-img" src="/assets/images/art/Untitled2.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-dispo" id="contact-dispo-2">
        <p >I am available for<span className="other-accent"> freelance missions</span> worldwide,
          on<span className="other-accent"> your ambitious projects</span> and international collaborations.</p>
      </div>

      <div className="contact-frame" id="contact-frame-2">
        <img className="contact-frame-img" id="contact-frame-img-2" src="/assets/images/art/Untitled1.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-bottom" id="contact-bottom">
        <nav className="contact-socials" id="contact-socials" aria-label="Social networks">
          <a className="chr-hover" data-chr-contact="GitHub" href="https://github.com/roshan995-scc" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-contact="LinkedIn" href="https://www.linkedin.com/in/roshansha150/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
        </nav>
        <a className="contact-mail" id="contact-mail" href="mailto:roshansha2021@gmail.com">roshansha2021@gmail.com</a>
      </div>
    </div>
  </section>

  
  <div className="footer-transition" id="footer-transition"></div>
  <footer className="footer" id="footer">
    <div className="footer-content" id="footer-content">
      <div className="footer-top">
        <div className="footer-top-col">
          <a className="chr-hover footer-mail" data-chr-footer="roshansha2021@gmail.com"
            href="mailto:roshansha2021@gmail.com" aria-label="Send an email"></a>
          <span className="chr-hover footer-date" data-chr-footer="© 2026"></span>
        </div>
        <nav className="footer-top-col" aria-label="Social networks">
          <a className="chr-hover" data-chr-footer="GitHub" href="https://github.com/roshan995-scc" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-footer="LinkedIn" href="https://www.linkedin.com/in/roshansha150/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
        </nav>
        <nav className="footer-top-col" aria-label="Footer navigation">
          <a className="chr-hover" data-chr-footer="Work" href="works/" data-page-link="work" aria-label="Work"></a>
          <a className="chr-hover" data-chr-footer="Info" href="info/" data-page-link="info" aria-label="Info"></a>
          <a className="chr-hover" data-chr-footer="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
        </nav>
      </div>
      <div className="footer-ascii-wrap">
        <div className="footer-ascii left">
          <pre id="ascii-left"></pre>
        </div>
        <div className="footer-ascii right">
          <pre id="ascii-right"></pre>
        </div>
      </div>
      <div className="footer-name">
        <span className="footer-name-luke"><span className="first-letter">R</span>oshan</span><span
          className="footer-name-baffait-wrap"><span className="footer-name-baffait">Sha</span><span
            className="footer-name-dot">.</span></span>
      </div>
    </div>
  </footer>

  <div className="proj-preview" id="proj-preview">
    <div className="proj-card" id="proj-card">
      <div className="proj-meta">
        <span className="proj-date" id="proj-date">01 2025</span>
        <span className="proj-label">Preview</span>
      </div>
      <img id="proj-cover" src="/assets/images/projects/Covers/CyberDiag.avif" alt="" width="1333" height="1000" />
    </div>
  </div>
  <div className="proj-cursor" id="proj-cursor">Coming Soon</div>

  <div className="page-fade" id="page-fade"></div>
  <div className="flying-title" id="flying-title"></div>
  <div className="work-transition-overlay" id="work-transition-overlay"></div>
  <div className="work-flying-text" id="work-flying-text">Work</div>

  <section className="project-detail" id="project-detail">
    <div className="detail-back chr-hover" id="detail-back" data-chr="🡼BACK" data-i18n-attr="data-chr:index.detail.back"></div>
    <div className="detail-info">
      <div className="detail-title-wrap" id="detail-title-wrap">
        <h1 className="detail-title" id="detail-title"></h1>
        <span className="detail-year" id="detail-year"></span>
      </div>
      <p className="detail-desc" id="detail-desc"></p>
      <div className="detail-tags" id="detail-tags"></div>
    </div>
    <div className="detail-gallery-wrap" id="detail-gallery-wrap">
      <div className="detail-thumbs" id="detail-thumbs">
        <div className="detail-thumbs-inner" id="detail-thumbs-inner"></div>
      </div>
      <div className="detail-selected" id="detail-selected"></div>
    </div>
  </section>

  
  
  
  
  
  
  

  <div className="scroll-pct" id="scroll-pct">(0)</div>
  <div className="scroll-timeline" id="scroll-timeline">
    <span className="st-label" id="st-label"></span>
    <div className="st-bar" id="st-bar"></div>
  </div>

    
      <Script src="/js/bundle-index.js?v=2" strategy="afterInteractive" />
    </>
  );
}
