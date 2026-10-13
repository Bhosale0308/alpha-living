
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const images = {
  hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85",
  residence:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  garden:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  pool:
    "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=85",
  interior:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const amenities = [
  { number: "01", title: "Landscaped Gardens", detail: "Green spaces for everyday calm" },
  { number: "02", title: "Clubhouse", detail: "A place to connect and unwind" },
  { number: "03", title: "Wellness Spaces", detail: "Room to slow down and recharge" },
  { number: "04", title: "Leisure Pool", detail: "Relaxed moments, beautifully framed" },
  { number: "05", title: "Walking Trails", detail: "A gentler way to start the day" },
  { number: "06", title: "Gated Community", detail: "A thoughtfully planned setting" },
];

export default function GrandCelebrationValleyPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="gcv-page">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .gcv-page {
          --gcv-green: #193f34;
          --gcv-deep: #102d25;
          --gcv-ivory: #f5f2e9;
          --gcv-paper: #eae7dc;
          --gcv-gold: #bba16a;
          --gcv-ink: #23352d;
          background: var(--gcv-ivory);
          color: var(--gcv-ink);
          font-family: 'DM Sans', sans-serif;
          overflow: clip;
        }

        .gcv-page * { box-sizing: border-box; }
        .gcv-page a { color: inherit; text-decoration: none; }
        .gcv-page button, .gcv-page input, .gcv-page select,
        .gcv-page textarea { font: inherit; }

        .gcv-wrap {
          width: min(1180px, calc(100% - 64px));
          margin-inline: auto;
        }

        .gcv-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--gcv-gold);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .2em;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .gcv-eyebrow::before {
          content: "";
          width: 25px;
          height: 1px;
          background: currentColor;
          flex: 0 0 auto;
        }

        .gcv-display {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5.3vw, 76px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.08;
        }

        .gcv-display em { font-weight: 400; color: var(--gcv-gold); }

        .gcv-hero {
          position: relative;
          display: flex;
          align-items: flex-end;
          min-height: min(790px, 90svh);
          background: var(--gcv-deep);
          color: white;
          isolation: isolate;
        }

        .gcv-hero-image, .gcv-hero-shade {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .gcv-hero-image {
          z-index: -2;
          object-fit: cover;
          object-position: center 54%;
          animation: gcv-image-enter 1.4s ease both;
        }

        .gcv-hero-shade {
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(10, 29, 23, .82) 0%,
            rgba(10, 29, 23, .55) 43%,
            rgba(10, 29, 23, .08) 100%
          ), linear-gradient(0deg, rgba(10, 29, 23, .55), transparent 50%);
        }

        .gcv-hero-content {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
          padding: 150px 0 100px;
        }

        .gcv-hero h1 {
          max-width: 850px;
          margin: 26px 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(52px, 8.1vw, 112px);
          font-weight: 400;
          letter-spacing: -.055em;
          line-height: .99;
          overflow-wrap: anywhere;
        }

        .gcv-hero h1 em {
          color: #d5bd88;
          font-weight: 400;
        }

        .gcv-hero-description {
          max-width: 430px;
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 14px;
          line-height: 1.9;
        }

        .gcv-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          margin-top: 35px;
        }

        .gcv-button {
          display: inline-flex;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 0 23px;
          border: 1px solid var(--gcv-gold);
          background: var(--gcv-gold);
          color: #152f26 !important;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .11em;
          transition: background .25s, color .25s, transform .25s;
          cursor: pointer;
        }

        .gcv-button:hover {
          background: transparent;
          color: white !important;
          transform: translateY(-2px);
        }

        .gcv-text-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: white !important;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
        }

        .gcv-text-link span { color: var(--gcv-gold); font-size: 18px; }

        .gcv-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin-top: 64px;
          border-top: 1px solid rgba(255,255,255,.27);
          padding-top: 22px;
        }

        .gcv-hero-meta > div {
          min-width: 155px;
          padding: 0 32px;
          border-right: 1px solid rgba(255,255,255,.24);
        }

        .gcv-hero-meta > div:first-child { padding-left: 0; }
        .gcv-hero-meta > div:last-child { border-right: 0; }

        .gcv-hero-meta strong {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          font-weight: 400;
        }

        .gcv-hero-meta span {
          display: block;
          margin-top: 6px;
          color: rgba(255,255,255,.65);
          font-size: 9px;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .gcv-intro { padding: 120px 0 125px; }

        .gcv-intro-grid {
          display: grid;
          grid-template-columns: 1.1fr .7fr;
          align-items: end;
          gap: 70px;
          margin-top: 32px;
        }

        .gcv-intro-copy {
          padding-bottom: 7px;
          color: #69756b;
          font-size: 14px;
          line-height: 2;
        }

        .gcv-intro-copy p { margin: 0 0 16px; }

        .gcv-inline-link {
          display: inline-flex;
          gap: 13px;
          align-items: center;
          margin-top: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--gcv-gold);
          color: var(--gcv-green) !important;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .gcv-story {
          padding: 0 0 120px;
        }

        .gcv-story-grid {
          display: grid;
          grid-template-columns: 1fr .83fr;
          align-items: center;
          gap: 9%;
        }

        .gcv-story-image-wrap { position: relative; padding: 0 0 28px 28px; }

        .gcv-story-image-wrap::before {
          position: absolute;
          content: "";
          left: 0; bottom: 0;
          width: 66%; height: 70%;
          border: 1px solid var(--gcv-gold);
        }

        .gcv-story-image {
          position: relative;
          display: block;
          width: 100%;
          height: 480px;
          object-fit: cover;
        }

        .gcv-story-copy { padding: 25px 0; }
        .gcv-story-copy .gcv-display { margin: 23px 0; font-size: clamp(39px, 4.4vw, 60px); }

        .gcv-body-copy {
          color: #6a756c;
          font-size: 13px;
          line-height: 2;
        }

        .gcv-story-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 35px;
          padding-top: 25px;
          border-top: 1px solid #d8d6ca;
        }

        .gcv-story-stats strong {
          display: block;
          color: var(--gcv-green);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 29px;
          font-weight: 400;
        }

        .gcv-story-stats span {
          display: block;
          margin-top: 7px;
          color: #727a70;
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .gcv-gallery-section {
          padding: 105px 0 115px;
          background: var(--gcv-green);
          color: var(--gcv-ivory);
        }

        .gcv-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 42px;
        }

        .gcv-section-heading .gcv-display { margin-top: 20px; font-size: clamp(40px, 5vw, 65px); }
        .gcv-gallery-note { max-width: 250px; color: #d0d5ca; font-size: 12px; line-height: 1.9; }

        .gcv-gallery-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          grid-template-rows: 260px 260px;
          gap: 16px;
        }

        .gcv-gallery-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #28493c;
        }

        .gcv-gallery-card:first-child { grid-row: 1 / 3; }

        .gcv-gallery-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .gcv-gallery-card:hover img { transform: scale(1.045); }

        .gcv-gallery-card::after {
          position: absolute;
          inset: 40% 0 0;
          content: "";
          background: linear-gradient(transparent, rgba(8,25,19,.68));
          pointer-events: none;
        }

        .gcv-gallery-caption {
          position: absolute;
          z-index: 1;
          bottom: 23px;
          left: 25px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 12px;
          color: white;
        }

        .gcv-gallery-caption strong {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 23px;
          font-weight: 400;
        }

        .gcv-gallery-caption span { color: #e0c990; font-size: 19px; }

        .gcv-amenities { padding: 115px 0; }

        .gcv-amenities-intro {
          display: grid;
          grid-template-columns: .9fr 1fr;
          gap: 70px;
          margin-bottom: 48px;
        }

        .gcv-amenities-intro .gcv-display { margin-top: 22px; font-size: clamp(39px, 4.6vw, 62px); }
        .gcv-amenities-intro > p { align-self: end; max-width: 390px; margin: 0; color: #68756b; font-size: 13px; line-height: 2; }

        .gcv-amenity-list { border-top: 1px solid #d8d6ca; }

        .gcv-amenity {
          display: grid;
          grid-template-columns: 55px 1fr 1fr 25px;
          align-items: center;
          gap: 20px;
          padding: 23px 0;
          border-bottom: 1px solid #d8d6ca;
          transition: padding .25s;
        }

        .gcv-amenity:hover { padding-left: 10px; padding-right: 10px; }

        .gcv-amenity-number { color: var(--gcv-gold); font-size: 11px; }
        .gcv-amenity h3 { margin: 0; color: var(--gcv-green); font-family: 'Playfair Display', Georgia, serif; font-size: 23px; font-weight: 400; }
        .gcv-amenity p { margin: 0; color: #778075; font-size: 12px; }
        .gcv-amenity-arrow { color: var(--gcv-gold); font-size: 20px; }

        .gcv-enquiry {
          padding: 100px 0;
          background: var(--gcv-paper);
        }

        .gcv-enquiry-grid {
          display: grid;
          grid-template-columns: .85fr 1fr;
          gap: 9%;
          align-items: start;
        }

        .gcv-enquiry-copy .gcv-display { margin: 23px 0; font-size: clamp(42px, 5vw, 66px); }
        .gcv-enquiry-copy > p { max-width: 360px; color: #68756b; font-size: 13px; line-height: 2; }

        .gcv-contact-details { display: grid; gap: 18px; margin-top: 38px; }
        .gcv-contact-details small { display: block; margin-bottom: 7px; color: #7c806f; font-size: 9px; letter-spacing: .14em; }
        .gcv-contact-details a { color: var(--gcv-green); font-size: 13px; }

        .gcv-form {
          padding: 35px;
          background: var(--gcv-ivory);
          border: 1px solid #dfddcf;
        }

        .gcv-form h3 { margin: 0 0 8px; color: var(--gcv-green); font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 400; }
        .gcv-form > p { margin: 0 0 28px; color: #777d72; font-size: 12px; line-height: 1.8; }
        .gcv-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .gcv-form label { display: grid; gap: 9px; margin-bottom: 19px; color: #57665b; font-size: 9px; font-weight: 700; letter-spacing: .1em; }

        .gcv-form input, .gcv-form select, .gcv-form textarea {
          display: block;
          width: 100%;
          min-width: 0;
          border: 1px solid #d9d8ca;
          border-radius: 0;
          outline: none;
          background: transparent;
          color: var(--gcv-ink);
          padding: 13px 12px;
          font-size: 12px;
          letter-spacing: 0;
          transition: border-color .2s;
        }

        .gcv-form input:focus, .gcv-form select:focus, .gcv-form textarea:focus { border-color: var(--gcv-green); }
        .gcv-form textarea { resize: vertical; min-height: 105px; }
        .gcv-form .gcv-button { width: 100%; }
        .gcv-success { padding: 25px 0; }
        .gcv-success strong { display: block; margin-bottom: 10px; color: var(--gcv-green); font-family: 'Playfair Display', Georgia, serif; font-size: 29px; font-weight: 400; }
        .gcv-success p { color: #68756b; font-size: 13px; line-height: 1.8; }

        .gcv-closing {
          position: relative;
          padding: 110px 24px;
          overflow: hidden;
          background: var(--gcv-deep);
          color: white;
          text-align: center;
        }

        .gcv-closing::before, .gcv-closing::after {
          position: absolute;
          content: "";
          width: 260px; height: 260px;
          border: 1px solid rgba(187,161,106,.2);
          border-radius: 50%;
          pointer-events: none;
        }

        .gcv-closing::before { top: -145px; left: -90px; }
        .gcv-closing::after { right: -90px; bottom: -160px; }

        .gcv-closing .gcv-display { margin: 23px auto 30px; font-size: clamp(42px, 6vw, 78px); }
        .gcv-closing .gcv-display em { color: #d5bd88; }
        .gcv-closing p { margin: 0 auto 28px; color: #d3d9d0; font-size: 13px; line-height: 1.9; }

        @keyframes gcv-image-enter {
          from { transform: scale(1.05); opacity: .7; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gcv-page *, .gcv-page *::before, .gcv-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }

        @media (max-width: 760px) {
          .gcv-wrap { width: calc(100% - 40px); }
          .gcv-hero { min-height: 760px; min-height: 88svh; }
          .gcv-hero-content { width: calc(100% - 40px); padding: 120px 0 38px; }
          .gcv-hero-shade {
            background: linear-gradient(90deg, rgba(10,29,23,.75), rgba(10,29,23,.27)),
              linear-gradient(0deg, rgba(10,29,23,.65), transparent 80%);
          }
          .gcv-hero h1 { font-size: clamp(48px, 11.5vw, 76px); }
          .gcv-hero-description { max-width: 350px; font-size: 13px; }
          .gcv-hero-meta { margin-top: 45px; row-gap: 20px; }
          .gcv-hero-meta > div { min-width: 0; width: 33.333%; padding: 0 12px; }
          .gcv-hero-meta > div:first-child { padding-left: 0; }
          .gcv-hero-meta strong { font-size: 20px; }
          .gcv-hero-meta span { font-size: 8px; line-height: 1.7; }
          .gcv-intro, .gcv-amenities { padding: 78px 0; }
          .gcv-intro-grid, .gcv-story-grid, .gcv-amenities-intro, .gcv-enquiry-grid { grid-template-columns: 1fr; gap: 30px; }
          .gcv-intro-grid { margin-top: 24px; }
          .gcv-intro-copy { font-size: 13px; }
          .gcv-story { padding-bottom: 78px; }
          .gcv-story-grid { gap: 38px; }
          .gcv-story-image { height: 370px; }
          .gcv-story-copy { padding: 0; }
          .gcv-gallery-section { padding: 78px 0; }
          .gcv-section-heading { display: block; margin-bottom: 28px; }
          .gcv-gallery-note { margin-top: 20px; }
          .gcv-gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 310px 190px; gap: 10px; }
          .gcv-gallery-card:first-child { grid-column: 1 / 3; grid-row: auto; }
          .gcv-gallery-caption { bottom: 15px; left: 14px; right: 12px; }
          .gcv-gallery-caption strong { font-size: 19px; }
          .gcv-amenities-intro { gap: 18px; margin-bottom: 32px; }
          .gcv-amenity { grid-template-columns: 30px 1fr 20px; gap: 12px; padding: 20px 0; }
          .gcv-amenity h3 { font-size: 19px; }
          .gcv-amenity p { grid-column: 2; grid-row: 2; }
          .gcv-amenity-arrow { grid-column: 3; grid-row: 1 / 3; }
          .gcv-enquiry { padding: 78px 0; }
          .gcv-enquiry-grid { gap: 38px; }
          .gcv-form { padding: 23px 18px; }
          .gcv-form-row { grid-template-columns: 1fr; gap: 0; }
          .gcv-closing { padding: 80px 20px; }
        }

        @media (max-width: 380px) {
          .gcv-wrap, .gcv-hero-content { width: calc(100% - 32px); }
          .gcv-hero h1 { font-size: 46px; }
          .gcv-hero-actions { gap: 18px; }
          .gcv-button { padding: 0 15px; gap: 12px; font-size: 9px; }
          .gcv-hero-meta > div { padding-right: 7px; padding-left: 7px; }
          .gcv-hero-meta strong { font-size: 18px; }
          .gcv-gallery-grid { grid-template-rows: 260px 170px; }
        }
      `}</style>

      <section className="gcv-hero">
        <img className="gcv-hero-image" src={images.hero} alt="Contemporary luxury villa surrounded by landscaped greenery" />
        <div className="gcv-hero-shade" />

        <div className="gcv-hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="gcv-eyebrow">ALPHA LIVING PRESENTS</span>
            <h1>
              Grand
              <br />
              Celebration
              <br />
              <em>Valley.</em>
            </h1>
            <p className="gcv-hero-description">
              A thoughtfully imagined destination where beautiful spaces,
              meaningful moments and a more considered way of living come together.
            </p>
            <div className="gcv-hero-actions">
              <a href="#gcv-enquiry" className="gcv-button">
                DISCOVER THE PROJECT <span>↗</span>
              </a>
              <a href="#gcv-gallery" className="gcv-text-link">
                EXPLORE THE GALLERY <span>↓</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="gcv-hero-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div><strong>01</strong><span>Signature destination</span></div>
            <div><strong>Nature</strong><span>Inspired living</span></div>
            <div><strong>Elevated</strong><span>Everyday moments</span></div>
          </motion.div>
        </div>
      </section>

      <section className="gcv-intro">
        <motion.div
          className="gcv-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="gcv-eyebrow">A PLACE TO CALL YOUR OWN</span>
          <div className="gcv-intro-grid">
            <h2 className="gcv-display">
              Not simply a place.
              <br />
              A feeling of <em>belonging.</em>
            </h2>
            <div className="gcv-intro-copy">
              <p>
                Grand Celebration Valley is imagined as more than an address.
                It is a setting for slower mornings, shared celebrations and
                the everyday rituals that make a house feel like home.
              </p>
              <p>
                Explore a considered approach to architecture, open spaces and
                a lifestyle shaped around what matters most.
              </p>
              <a href="#gcv-story" className="gcv-inline-link">
                GET TO KNOW THE PROJECT <span>↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="gcv-story" id="gcv-story">
        <div className="gcv-wrap gcv-story-grid">
          <motion.div
            className="gcv-story-image-wrap"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="gcv-story-image"
              src={images.residence}
              alt="Elegant contemporary residence with natural materials"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="gcv-story-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="gcv-eyebrow">THE THOUGHT BEHIND IT</span>
            <h2 className="gcv-display">
              Designed for
              <br />
              life's <em>best moments.</em>
            </h2>
            <p className="gcv-body-copy">
              From welcoming architecture to inviting shared spaces, every
              detail in this concept celebrates the relationship between
              home, nature and community.
            </p>
            <p className="gcv-body-copy">
              Whether it is a quiet afternoon or a house full of loved ones,
              imagine a setting that makes room for both.
            </p>

            <div className="gcv-story-stats">
              <div><strong>Thoughtful</strong><span>Spatial planning</span></div>
              <div><strong>Timeless</strong><span>Design philosophy</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gcv-gallery-section" id="gcv-gallery">
        <div className="gcv-wrap">
          <motion.div
            className="gcv-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div>
              <span className="gcv-eyebrow">A GLIMPSE OF THE POSSIBILITIES</span>
              <h2 className="gcv-display">
                Spaces that make
                <br />
                life feel <em>different.</em>
              </h2>
            </div>
            <p className="gcv-gallery-note">
              A visual moodboard of the architecture, gardens and interiors
              envisioned for a refined residential experience.
            </p>
          </motion.div>

          <div className="gcv-gallery-grid">
            <motion.div
              className="gcv-gallery-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <img src={images.garden} alt="Warm modern living space opening towards a garden" loading="lazy" />
              <div className="gcv-gallery-caption"><strong>Living, naturally</strong><span>↗</span></div>
            </motion.div>

            <motion.div
              className="gcv-gallery-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.65 }}
            >
              <img src={images.pool} alt="Outdoor pool in a resort-style setting" loading="lazy" />
              <div className="gcv-gallery-caption"><strong>Time to unwind</strong><span>↗</span></div>
            </motion.div>

            <motion.div
              className="gcv-gallery-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.65 }}
            >
              <img src={images.interior} alt="Refined neutral-toned contemporary interior" loading="lazy" />
              <div className="gcv-gallery-caption"><strong>Quiet sophistication</strong><span>↗</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="gcv-amenities">
        <div className="gcv-wrap">
          <motion.div
            className="gcv-amenities-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div>
              <span className="gcv-eyebrow">THE EVERYDAY, ELEVATED</span>
              <h2 className="gcv-display">
                More room for
                <br />
                <em>what matters.</em>
              </h2>
            </div>
            <p>
              Imagine amenities that complement your routine, create
              opportunities to connect and make time at home more rewarding.
              The features below are illustrative placeholders.
            </p>
          </motion.div>

          <div className="gcv-amenity-list">
            {amenities.map((amenity, index) => (
              <motion.div
                className="gcv-amenity"
                key={amenity.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <span className="gcv-amenity-number">{amenity.number}</span>
                <h3>{amenity.title}</h3>
                <p>{amenity.detail}</p>
                <span className="gcv-amenity-arrow">↗</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gcv-enquiry" id="gcv-enquiry">
        <div className="gcv-wrap gcv-enquiry-grid">
          <motion.div
            className="gcv-enquiry-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="gcv-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2 className="gcv-display">
              Let's make
              <br />
              room for <em>more.</em>
            </h2>
            <p>
              Have a question or want to learn more about Grand Celebration
              Valley? Share your details and our team can follow up.
            </p>

            <div className="gcv-contact-details">
              <div><small>GENERAL ENQUIRIES</small><a href="mailto:hello@alphaliving.com">hello@alphaliving.com</a></div>
              <div><small>LOCATION</small><a href="https://maps.google.com/?q=Pune+Maharashtra" target="_blank" rel="noreferrer">Pune, Maharashtra, India ↗</a></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="gcv-form">
              {submitted ? (
                <div className="gcv-success" role="status">
                  <strong>Thank you for reaching out.</strong>
                  <p>
                    Your demo form submission was received on this page.
                    Connect a backend or form service to deliver enquiries
                    to your team.
                  </p>
                  <button className="gcv-button" type="button" onClick={() => setSubmitted(false)}>
                    SEND ANOTHER ENQUIRY ↗
                  </button>
                </div>
              ) : (
                <>
                  <h3>Start a conversation.</h3>
                  <p>Tell us a little about yourself and what you're looking for.</p>
                  <form
                    onSubmit={handleSubmit}
                  >
                    <div className="gcv-form-row">
                      <label>
                        YOUR NAME *
                        <input name="name" type="text" placeholder="Full name" autoComplete="name" required />
                      </label>
                      <label>
                        EMAIL ADDRESS *
                        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                      </label>
                    </div>
                    <div className="gcv-form-row">
                      <label>
                        PHONE NUMBER
                        <input name="phone" type="tel" placeholder="+91" autoComplete="tel" />
                      </label>
                      <label>
                        INTEREST
                        <select name="interest" defaultValue="Project enquiry">
                          <option>Project enquiry</option>
                          <option>Residential property</option>
                          <option>Investment</option>
                          <option>Other</option>
                        </select>
                      </label>
                    </div>
                    <label>
                      YOUR MESSAGE *
                      <textarea name="message" placeholder="How can we help you?" required />
                    </label>
                    <button className="gcv-button" type="submit">
                      SEND YOUR ENQUIRY <span>↗</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="gcv-closing">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="gcv-eyebrow">GRAND CELEBRATION VALLEY</span>
          <h2 className="gcv-display">
            Some places stay
            <br />
            with you <em>forever.</em>
          </h2>
          <p>A considered space. A meaningful life. A place to belong.</p>
          <a href="/projects" className="gcv-button">
            EXPLORE ALL PROJECTS <span>↗</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
