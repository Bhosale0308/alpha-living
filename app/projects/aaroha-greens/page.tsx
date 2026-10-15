
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
];

const features = [
  {
    number: "01",
    title: "A greener perspective",
    description:
      "A nature-inspired vision where open spaces and thoughtful design come together.",
  },
  {
    number: "02",
    title: "Everyday tranquillity",
    description:
      "An atmosphere imagined for slower mornings, peaceful evenings, and meaningful moments.",
  },
  {
    number: "03",
    title: "Designed with intention",
    description:
      "A considered architectural approach that balances comfort, character, and contemporary living.",
  },
];

export default function AarohaGreensPage() {
  return (
    <main className="ag-page">
      {/* NAVIGATION */}
      <nav className="ag-nav">
        <Link href="/" className="ag-logo">
          ALPHA <span>LIVING</span>
        </Link>

        <Link href="/projects" className="ag-nav-link">
          <span>←</span> ALL PROJECTS
        </Link>
      </nav>

      {/* HERO */}
      <section className="ag-hero">
        <div className="ag-hero-image" />

        <div className="ag-hero-shade" />

        <div className="ag-hero-index">
          <span>PROJECT NO.</span>
          <strong>02</strong>
        </div>

        <motion.div
          className="ag-hero-copy"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="ag-eyebrow">
            NATURE, REIMAGINED
          </p>

          <h1>
            Aaroha
            <br />
            <span>Greens</span>
          </h1>

          <div className="ag-hero-bottom">
            <p>
              A vision of contemporary living inspired by nature,
              open spaces, and a more considered way of life.
            </p>

            <a href="#story" className="ag-explore">
              EXPLORE THE VISION <span>↓</span>
            </a>
          </div>
        </motion.div>

        <div className="ag-vertical-text">
          INSPIRED BY NATURE · CREATED FOR LIVING
        </div>

        <div className="ag-hero-bottom-line">
          <span />
          <p>DESIGN · SPACE · SERENITY</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ag-story" id="story">
        <motion.div
          className="ag-story-image-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={images[0]}
            alt="Contemporary nature-inspired residential concept"
            className="ag-story-image"
          />

          <div className="ag-image-caption">
            <span>01 / THE VISION</span>
            <span>ARCHITECTURE & NATURE</span>
          </div>
        </motion.div>

        <motion.div
          className="ag-story-copy"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="ag-eyebrow ag-dark-label">
            A DIFFERENT KIND OF EVERYDAY
          </p>

          <h2>
            Find your
            <br />
            <span>natural rhythm.</span>
          </h2>

          <p className="ag-body-copy">
            Imagine a place where the pace feels different. Where
            thoughtful spaces, natural textures, and a sense of openness
            create an inviting backdrop for everyday life.
          </p>

          <p className="ag-body-copy">
            Aaroha Greens explores this idea through a nature-led
            design language and a contemporary residential vision.
          </p>

          <div className="ag-story-signature">
            <span className="ag-signature-line" />
            <span>THE AAROHA GREENS VISION</span>
          </div>
        </motion.div>
      </section>

      {/* FEATURE SECTION */}
      <section className="ag-features">
        <div className="ag-features-heading">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="ag-eyebrow">THE ART OF LIVING WELL</p>

            <h2>
              Rooted in nature.
              <br />
              <span>Made for you.</span>
            </h2>
          </motion.div>

          <p className="ag-features-note">
            Thoughtful details. A quieter atmosphere. A fresh
            perspective on contemporary living.
          </p>
        </div>

        <div className="ag-feature-list">
          {features.map((feature, index) => (
            <motion.article
              className="ag-feature"
              key={feature.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <span className="ag-feature-number">
                {feature.number}
              </span>

              <div className="ag-feature-main">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span className="ag-feature-icon">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="ag-gallery">
        <div className="ag-gallery-title">
          <div>
            <p className="ag-eyebrow ag-dark-label">
              A VISUAL EXPLORATION
            </p>

            <h2>
              The beauty of
              <br />
              <span>considered spaces.</span>
            </h2>
          </div>

          <p>
            A collection of architectural inspirations
            for a life connected to nature.
          </p>
        </div>

        <div className="ag-gallery-layout">
          {images.map((image, index) => (
            <motion.figure
              key={image}
              className={`ag-gallery-card ag-gallery-card-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <div className="ag-gallery-image">
                <img
                  src={image}
                  alt={`Aaroha Greens architectural inspiration ${index + 1}`}
                />
              </div>

              <figcaption>
                <span>0{index + 1}</span>
                {[
                  "Architecture in harmony",
                  "Interiors with warmth",
                  "Spaces to unwind",
                ][index]}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="ag-disclaimer">
          Images are illustrative design references, not verified
          photographs of the actual project.
        </p>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="ag-contact">
        <div className="ag-contact-decoration" />

        <motion.div
          className="ag-contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="ag-eyebrow">DISCOVER SOMETHING DIFFERENT</p>

          <h2>
            Your story.
            <br />
            <span>Your space.</span>
          </h2>

          <p>
            Interested in Aaroha Greens? Connect with our team
            to learn more about the project.
          </p>

          <Link href="/contact" className="ag-contact-button">
            START A CONVERSATION <span>↗</span>
          </Link>
        </motion.div>

        <footer className="ag-footer">
             
<Link href="/" className="footer-logo" aria-label="Alpha Living home">
  <img
    src="/alpha-living-logo.png"
    alt="ALPHAA LIVING"
    className="footer-brand-logo"
  />
</Link>

          <Link href="/projects" className="ag-footer-link">
            BACK TO ALL PROJECTS ↑
          </Link>
        </footer>
      </section>

      <style jsx global>{`
        .ag-page {
          --ag-forest: #23382d;
          --ag-green: #9daf85;
          --ag-paper: #f5f4ee;
          background: var(--ag-paper);
          color: var(--ag-forest);
          font-family: Arial, Helvetica, sans-serif;
          overflow: clip;
        }

        .ag-page * {
          box-sizing: border-box;
        }

        .ag-nav {
          position: absolute;
          z-index: 10;
          top: 0;
          left: 0;
          width: 100%;
          padding: 27px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.22);
        }

        .ag-logo {
          text-decoration: none;
          color: white;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .ag-logo span {
          font-weight: 400;
        }

        .ag-nav-link,
        .ag-footer-link {
          color: white;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 1.5px;
        }

        .ag-nav-link span {
          margin-right: 10px;
        }

        .ag-hero {
          position: relative;
          min-height: 740px;
          height: 94svh;
          max-height: 1050px;
          background: #24362b;
          color: white;
          overflow: hidden;
        }

        .ag-hero-image {
          position: absolute;
          inset: 0;
          background-image: url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90");
          background-size: cover;
          background-position: center;
          animation: ag-hero-reveal 1.4s ease-out both;
          transform: scale(1.02);
        }

        .ag-hero-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(11,25,17,.76), rgba(11,25,17,.20) 78%),
            linear-gradient(0deg, rgba(11,25,17,.50), transparent 50%);
        }

        .ag-hero-copy {
          position: absolute;
          left: 10%;
          right: 10%;
          top: 48%;
          transform: translateY(-35%);
          max-width: 1000px;
        }

        .ag-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .ag-hero h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(76px, 10vw, 140px);
          line-height: .88;
          letter-spacing: -5px;
          margin: 0;
        }

        .ag-hero h1 span,
        .ag-features h2 span,
        .ag-contact h2 span {
          color: #c5d3ad;
          font-style: italic;
        }

        .ag-hero-bottom {
          margin-top: 38px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          max-width: 780px;
        }

        .ag-hero-bottom p {
          max-width: 390px;
          font-size: 14px;
          line-height: 1.9;
          color: rgba(255,255,255,.84);
          margin: 0;
        }

        .ag-explore {
          white-space: nowrap;
          color: white;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 1.4px;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(255,255,255,.65);
        }

        .ag-explore span {
          margin-left: 20px;
          font-size: 16px;
        }

        .ag-hero-index {
          position: absolute;
          right: 6%;
          top: 23%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: right;
        }

        .ag-hero-index span {
          font-size: 8px;
          letter-spacing: 2px;
        }

        .ag-hero-index strong {
          font-family: Georgia, serif;
          font-size: 35px;
          font-weight: 400;
        }

        .ag-vertical-text {
          position: absolute;
          right: 3%;
          top: 48%;
          writing-mode: vertical-rl;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .ag-hero-bottom-line {
          position: absolute;
          left: 6%;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ag-hero-bottom-line span {
          width: 38px;
          height: 1px;
          background: #c5d3ad;
        }

        .ag-hero-bottom-line p {
          font-size: 8px;
          letter-spacing: 2px;
        }

        .ag-story {
          padding: 140px 9%;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 10%;
        }

        .ag-story-image-wrap {
          position: relative;
        }

        .ag-story-image {
          display: block;
          width: 100%;
          height: 600px;
          object-fit: cover;
        }

        .ag-image-caption {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-top: 16px;
          font-size: 8px;
          letter-spacing: 1.5px;
          color: #6d776b;
        }

        .ag-dark-label {
          color: #71816a;
        }

        .ag-story-copy h2,
        .ag-gallery-title h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(43px, 5.2vw, 72px);
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1.08;
          margin: 0 0 30px;
        }

        .ag-story-copy h2 span,
        .ag-gallery-title h2 span {
          color: #819276;
          font-style: italic;
        }

        .ag-body-copy {
          color: #626b60;
          font-size: 14px;
          line-height: 2;
          margin: 0 0 18px;
        }

        .ag-story-signature {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .ag-signature-line {
          width: 40px;
          height: 1px;
          background: #819276;
        }

        .ag-features {
          padding: 115px 10%;
          background: #1c2c23;
          color: white;
        }

        .ag-features-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 65px;
        }

        .ag-features h2,
        .ag-contact h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(45px, 5.5vw, 76px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0;
        }

        .ag-features-note {
          max-width: 270px;
          color: #b8c3b7;
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 5px;
        }

        .ag-feature {
          display: grid;
          grid-template-columns: 55px 1fr 30px;
          gap: 20px;
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,.2);
          align-items: start;
        }

        .ag-feature-number {
          color: #c5d3ad;
          font-size: 10px;
          padding-top: 8px;
        }

        .ag-feature h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 27px;
          margin: 0 0 12px;
        }

        .ag-feature p {
          max-width: 520px;
          color: #b8c3b7;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .ag-feature-icon {
          color: #c5d3ad;
          font-size: 20px;
          transition: transform .3s ease;
        }

        .ag-feature:hover .ag-feature-icon {
          transform: translate(4px, -4px);
        }

        .ag-gallery {
          padding: 130px 8%;
        }

        .ag-gallery-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 55px;
        }

        .ag-gallery-title h2 {
          margin-bottom: 0;
        }

        .ag-gallery-title > p {
          max-width: 260px;
          color: #687064;
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 5px;
        }

        .ag-gallery-layout {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 35px 24px;
          align-items: start;
        }

        .ag-gallery-card {
          margin: 0;
        }

        .ag-gallery-card-1 {
          grid-row: span 2;
        }

        .ag-gallery-image {
          overflow: hidden;
          background: #e5e5dd;
        }

        .ag-gallery-card-1 .ag-gallery-image img {
          height: 680px;
        }

        .ag-gallery-card-2 .ag-gallery-image img,
        .ag-gallery-card-3 .ag-gallery-image img {
          height: 315px;
        }

        .ag-gallery-image img {
          display: block;
          width: 100%;
          object-fit: cover;
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .ag-gallery-card:hover img {
          transform: scale(1.045);
        }

        .ag-gallery-card figcaption {
          display: flex;
          gap: 14px;
          padding-top: 16px;
          color: #344437;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
        }

        .ag-gallery-card figcaption span {
          font-family: Arial, sans-serif;
          color: #819276;
          font-size: 9px;
          padding-top: 5px;
        }

        .ag-disclaimer {
          margin-top: 35px;
          font-size: 11px;
          line-height: 1.8;
          color: #7b8077;
        }

        .ag-contact {
          position: relative;
          overflow: hidden;
          padding: 115px 10% 30px;
          background: #293c30;
          color: white;
        }

        .ag-contact-decoration {
          position: absolute;
          width: 460px;
          height: 460px;
          border: 1px solid rgba(197,211,173,.2);
          border-radius: 50%;
          right: -100px;
          top: 25px;
          box-shadow: 0 0 0 60px rgba(197,211,173,.035),
            0 0 0 120px rgba(197,211,173,.025);
        }

        .ag-contact-content {
          position: relative;
          z-index: 1;
          padding-bottom: 105px;
        }

        .ag-contact-content > p:not(.ag-eyebrow) {
          max-width: 400px;
          color: #d0d9d0;
          font-size: 14px;
          line-height: 1.9;
          margin: 25px 0 30px;
        }

        .ag-contact-button {
          display: inline-flex;
          align-items: center;
          gap: 30px;
          background: #c5d3ad;
          color: #1c2c23;
          padding: 18px 22px;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 1px;
          transition: background .3s ease, transform .3s ease;
        }

        .ag-contact-button:hover {
          background: white;
          transform: translateY(-3px);
        }

        .ag-footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,.2);
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        @keyframes ag-hero-reveal {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @media (max-width: 760px) {
          .ag-hero {
            min-height: 700px;
            height: 90svh;
          }

          .ag-nav {
            padding: 23px 6%;
          }

          .ag-logo {
            font-size: 13px;
            letter-spacing: 1.2px;
          }

          .ag-hero-copy {
            left: 7%;
            right: 7%;
            top: 45%;
            transform: translateY(-20%);
          }

          .ag-hero h1 {
            font-size: clamp(58px, 12vw, 90px);
            letter-spacing: -2px;
          }

          .ag-hero-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            margin-top: 28px;
          }

          .ag-hero-bottom p {
            max-width: 330px;
            font-size: 13px;
          }

          .ag-vertical-text {
            display: none;
          }

          .ag-hero-index {
            top: 17%;
          }

          .ag-story {
            padding: 85px 7%;
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ag-story-image {
            height: 420px;
          }

          .ag-features {
            padding: 85px 7%;
          }

          .ag-features-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
            margin-bottom: 45px;
          }

          .ag-gallery {
            padding: 85px 6%;
          }

          .ag-gallery-title {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .ag-gallery-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .ag-gallery-card-1 {
            grid-row: auto;
          }

          .ag-gallery-card-1 .ag-gallery-image img {
            height: 420px;
          }

          .ag-gallery-card-2 .ag-gallery-image img,
          .ag-gallery-card-3 .ag-gallery-image img {
            height: 300px;
          }

          .ag-contact {
            padding: 85px 7% 25px;
          }

          .ag-contact-content {
            padding-bottom: 75px;
          }

          .ag-contact-decoration {
            width: 300px;
            height: 300px;
            right: -190px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ag-page *,
          .ag-page *::before,
          .ag-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
