        "use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const projectImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
];

const highlights = [
  { number: "01", title: "Thoughtful Living", text: "Spaces designed around the way you want to live." },
  { number: "02", title: "Nature Connected", text: "A calmer atmosphere with nature woven into everyday life." },
  { number: "03", title: "Future Focused", text: "A considered approach to contemporary living." },
];

export default function PalmWorldCityPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="pwc-page">
      <section ref={heroRef} className="pwc-hero">
        <motion.div className="pwc-hero-image" style={{ y: imageY, scale: imageScale }} />
        <div className="pwc-hero-overlay" />

       
        <div className="pwc-hero-content">
          <motion.p className="pwc-eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            A NEW PERSPECTIVE ON LIVING
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }}>
            Palm<br /><span>World City.</span>
          </motion.h1>
          <motion.div className="pwc-hero-bottom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
            <p>A thoughtfully imagined destination where architecture, nature, and everyday life find their balance.</p>
            <a href="#overview" className="pwc-discover">DISCOVER THE PROJECT <span>↓</span></a>
          </motion.div>
        </div>

        <div className="pwc-side-label">ALPHA LIVING · SIGNATURE COLLECTION</div>
        <div className="pwc-scroll-indicator"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section id="overview" className="pwc-overview">
        <motion.div className="pwc-overview-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <p className="pwc-eyebrow pwc-dark-eyebrow">MORE THAN A PLACE TO LIVE</p>
          <h2>Designed for<br /><span>the life you imagine.</span></h2>
        </motion.div>
        <motion.div className="pwc-overview-copy" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
          <p>Palm World City brings together considered design, welcoming spaces, and a vision of modern living. Every detail is imagined to make everyday moments feel a little more extraordinary.</p>
          <span className="pwc-outline-number">01 / OVERVIEW</span>
        </motion.div>
      </section>

      <section className="pwc-highlights">
        <div className="pwc-section-intro"><p className="pwc-eyebrow">THE ALPHA APPROACH</p><h2>Space to live.<br /><span>Room to grow.</span></h2></div>
        <div className="pwc-highlight-list">
          {highlights.map((item, index) => (
            <motion.article key={item.number} className="pwc-highlight" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
              <span className="pwc-highlight-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="pwc-highlight-arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pwc-gallery">
        <div className="pwc-gallery-heading"><div><p className="pwc-eyebrow pwc-dark-eyebrow">A GLIMPSE OF THE VISION</p><h2>Spaces that <span>inspire.</span></h2></div><span className="pwc-gallery-count">01 — 03</span></div>
        <div className="pwc-gallery-grid">
          {projectImages.map((image, index) => (
            <motion.div key={image} className={`pwc-gallery-item pwc-gallery-item-${index + 1}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <img src={image} alt={`Palm World City concept visual ${index + 1}`} /><span>0{index + 1} / CONCEPT VISUAL</span>
            </motion.div>
          ))}
        </div>
        <p className="pwc-image-note">Illustrative imagery for design inspiration. Actual project specifications and visuals should be verified before publication.</p>
      </section>

      <section className="pwc-enquiry">
        <div className="pwc-enquiry-orb" />
        <motion.div className="pwc-enquiry-content" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="pwc-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Let's make<br /><span>room for more.</span></h2>
          <p className="pwc-enquiry-text">Connect with our team to discover more about this project.</p>
          <Link href="/contact" className="pwc-enquiry-button">ENQUIRE ABOUT THIS PROJECT <span>↗</span></Link>
        </motion.div>
        <div className="pwc-enquiry-footer"><Link href="/" className="pwc-logo">ALPHA <span>LIVING</span></Link><Link href="/projects" className="pwc-footer-link">EXPLORE ALL PROJECTS ↗</Link></div>
      </section>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .pwc-page { --pwc-ink:#17231e; --pwc-paper:#f5f3ed; --pwc-accent:#c4d4a0; background:var(--pwc-paper); color:var(--pwc-ink); font-family:Arial,Helvetica,sans-serif; overflow:clip; }
        .pwc-page * { box-sizing:border-box; }
        .pwc-hero { min-height:720px; height:min(850px,100svh); max-height:900px; position:relative; overflow:hidden; background:#26382d; color:white; }
        .pwc-hero-image { position:absolute; inset:-5%; background-image:url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"); background-position:center; background-size:cover; will-change:transform; }
        .pwc-hero-overlay { position:absolute; inset:0; background:linear-gradient(90deg,rgba(9,20,14,.76) 0%,rgba(9,20,14,.42) 52%,rgba(9,20,14,.08) 100%),linear-gradient(0deg,rgba(8,18,12,.58),transparent 45%); }
        .pwc-nav { position:absolute; top:0; left:0; right:0; min-height:94px; padding:22px 6%; display:flex; align-items:center; justify-content:space-between; gap:24px; border-bottom:1px solid rgba(255,255,255,.2); z-index:2; }
        .pwc-logo { display:flex; flex-direction:column; gap:4px; color:white; text-decoration:none; font-size:16px; font-weight:700; letter-spacing:1.8px; white-space:nowrap; }
        .pwc-logo span { font-weight:400; }
        .pwc-logo small { font-size:8px; letter-spacing:2px; font-weight:400; margin-top:4px; }
        .pwc-back,.pwc-discover,.pwc-footer-link { color:white; text-decoration:none; font-size:10px; letter-spacing:1.5px; }
        .pwc-back span { margin-right:10px; }
        .pwc-hero-content { position:absolute; left:clamp(48px,10vw,150px); right:8%; top:46%; transform:translateY(-30%); max-width:1000px; z-index:1; }
        .pwc-eyebrow { font-size:10px; letter-spacing:3px; line-height:1.8; margin:0 0 26px; }
        .pwc-hero h1 { font-family:Georgia,'Times New Roman',serif; font-weight:400; font-size:clamp(72px,8.5vw,124px); line-height:.9; letter-spacing:-4px; margin:0; }
        .pwc-hero h1 span,.pwc-section-intro h2 span,.pwc-enquiry h2 span { color:var(--pwc-accent); font-style:italic; }
        .pwc-hero-bottom { margin-top:34px; display:flex; align-items:center; justify-content:space-between; gap:30px; max-width:790px; }
        .pwc-hero-bottom p { max-width:390px; font-size:14px; line-height:1.8; color:rgba(255,255,255,.86); margin:0; }
        .pwc-discover { white-space:nowrap; flex-shrink:0; border-bottom:1px solid rgba(255,255,255,.65); padding-bottom:13px; }
        .pwc-discover span { margin-left:18px; font-size:17px; }
        .pwc-side-label { position:absolute; right:3%; top:42%; writing-mode:vertical-rl; font-size:9px; letter-spacing:2px; color:rgba(255,255,255,.8); }
        .pwc-scroll-indicator { position:absolute; bottom:26px; left:6%; display:flex; align-items:center; gap:14px; font-size:9px; letter-spacing:2px; }
        .pwc-scroll-indicator span { width:42px; height:1px; background:var(--pwc-accent); }
        .pwc-overview { padding:130px 10%; display:grid; grid-template-columns:1.2fr .8fr; gap:10%; align-items:center; }
        .pwc-dark-eyebrow { color:#65705f; }
        .pwc-overview h2,.pwc-gallery-heading h2 { font-family:Georgia,'Times New Roman',serif; font-weight:400; font-size:clamp(40px,5.2vw,72px); line-height:1.08; letter-spacing:-2px; margin:0; }
        .pwc-overview h2 span,.pwc-gallery-heading h2 span { color:#77886a; font-style:italic; }
        .pwc-overview-copy p { font-size:15px; line-height:2; color:#5d655d; margin:0 0 38px; }
        .pwc-outline-number { display:block; padding-top:20px; border-top:1px solid #d6d8cf; font-size:9px; letter-spacing:2px; }
        .pwc-highlights { background:#19251e; color:white; padding:110px 10%; display:grid; grid-template-columns:.8fr 1.2fr; gap:12%; }
        .pwc-section-intro h2,.pwc-enquiry h2 { font-family:Georgia,'Times New Roman',serif; font-size:clamp(42px,5vw,68px); line-height:1.08; font-weight:400; letter-spacing:-2px; margin:0; }
        .pwc-highlight { padding:28px 0; border-top:1px solid rgba(255,255,255,.22); display:grid; grid-template-columns:45px 1fr 24px; gap:20px; align-items:start; }
        .pwc-highlight-number { color:var(--pwc-accent); font-size:10px; padding-top:8px; }
        .pwc-highlight h3 { font-family:Georgia,'Times New Roman',serif; font-size:25px; font-weight:400; margin:0 0 10px; }
        .pwc-highlight p { color:#b8c0b8; font-size:13px; line-height:1.8; margin:0; }
        .pwc-highlight-arrow { font-size:20px; color:var(--pwc-accent); transition:transform .3s ease; }
        .pwc-highlight:hover .pwc-highlight-arrow { transform:translate(4px,-4px); }
        .pwc-gallery { padding:120px 8%; }
        .pwc-gallery-heading { display:flex; justify-content:space-between; align-items:end; gap:20px; margin-bottom:48px; }
        .pwc-gallery-count { font-size:10px; letter-spacing:2px; }
        .pwc-gallery-grid { display:grid; grid-template-columns:1.15fr .85fr; gap:24px; align-items:start; }
        .pwc-gallery-item { position:relative; overflow:hidden; background:#e3e3da; }
        .pwc-gallery-item-1 { grid-row:span 2; }
        .pwc-gallery-item-1 img { height:680px; }
        .pwc-gallery-item-2 img,.pwc-gallery-item-3 img { height:320px; }
        .pwc-gallery-item img { width:100%; object-fit:cover; display:block; transition:transform .8s cubic-bezier(.2,.7,.2,1); }
        .pwc-gallery-item:hover img { transform:scale(1.045); }
        .pwc-gallery-item>span { position:absolute; bottom:18px; left:18px; color:white; background:rgba(15,24,18,.6); padding:10px 12px; font-size:9px; letter-spacing:1.5px; }
        .pwc-image-note { color:#777b72; font-size:11px; line-height:1.8; margin-top:24px; }
        .pwc-enquiry { position:relative; overflow:hidden; padding:110px 10% 32px; background:#26382d; color:white; }
        .pwc-enquiry-orb { position:absolute; width:480px; height:480px; border:1px solid rgba(196,212,160,.2); border-radius:50%; right:-100px; top:30px; box-shadow:0 0 0 65px rgba(196,212,160,.035),0 0 0 130px rgba(196,212,160,.025); pointer-events:none; }
        .pwc-enquiry-content { position:relative; z-index:1; padding-bottom:100px; }
        .pwc-enquiry-text { font-size:14px; color:#d1d8d0; margin:26px 0 32px; line-height:1.8; }
        .pwc-enquiry-button { display:inline-flex; align-items:center; gap:32px; padding:18px 22px; color:#17231e; background:var(--pwc-accent); text-decoration:none; font-size:10px; letter-spacing:1px; transition:background .3s ease,transform .3s ease; }
        .pwc-enquiry-button:hover { background:white; transform:translateY(-3px); }
        .pwc-enquiry-footer { position:relative; z-index:1; border-top:1px solid rgba(255,255,255,.2); padding-top:28px; display:flex; align-items:center; justify-content:space-between; gap:20px; }
        .pwc-footer-link { font-size:9px; }
        @media(max-width:760px) {
          .pwc-hero { min-height:680px; height:90svh; max-height:820px; }
          .pwc-nav { min-height:78px; padding:18px 6%; }
          .pwc-logo { font-size:13px; letter-spacing:1.2px; }
          .pwc-logo small { font-size:7px; letter-spacing:1.4px; }
          .pwc-back { font-size:9px; letter-spacing:.8px; }
          .pwc-hero-content { left:7%; right:7%; top:43%; transform:translateY(-20%); }
          .pwc-eyebrow { font-size:9px; letter-spacing:2px; margin-bottom:22px; }
          .pwc-hero h1 { font-size:clamp(54px,11.5vw,86px); line-height:.95; letter-spacing:-2.5px; }
          .pwc-hero-bottom { margin-top:28px; display:flex; flex-direction:column; align-items:flex-start; gap:22px; }
          .pwc-hero-bottom p { max-width:340px; font-size:13px; }
          .pwc-side-label { display:none; }
          .pwc-scroll-indicator { bottom:20px; font-size:8px; }
          .pwc-overview { padding:85px 7%; grid-template-columns:1fr; gap:32px; }
          .pwc-highlights { padding:80px 7%; grid-template-columns:1fr; gap:40px; }
          .pwc-gallery { padding:80px 6%; }
          .pwc-gallery-heading { align-items:flex-start; gap:20px; margin-bottom:32px; }
          .pwc-gallery-grid { grid-template-columns:1fr; gap:18px; }
          .pwc-gallery-item-1 { grid-row:auto; }
          .pwc-gallery-item-1 img { height:420px; }
          .pwc-gallery-item-2 img,.pwc-gallery-item-3 img { height:300px; }
          .pwc-enquiry { padding:80px 7% 28px; }
          .pwc-enquiry-content { padding-bottom:70px; }
          .pwc-enquiry-orb { width:300px; height:300px; right:-190px; }
        }
        @media(max-width:420px) {
          .pwc-hero h1 { font-size:clamp(46px,11.5vw,58px); letter-spacing:-1.5px; }
          .pwc-hero-content { left:6%; right:6%; }
          .pwc-nav { gap:12px; }
        }
        @media(prefers-reduced-motion:reduce) {
          .pwc-page *, .pwc-page *::before, .pwc-page *::after { scroll-behavior:auto !important; transition-duration:.01ms !important; }
        }
      `}</style>
    </main>
  );
}

