
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const estateImages = {
  hero: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=90",
  architecture:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85",
  interior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
  nature:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1300&q=85",
  exterior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=85",
};

const experiences = [
  {
    number: "01",
    title: "Life among the trees",
    text: "Discover the quiet beauty of green surroundings and thoughtfully imagined outdoor spaces.",
  },
  {
    number: "02",
    title: "Architecture with purpose",
    text: "A considered design language that brings natural materials, light and space together.",
  },
  {
    number: "03",
    title: "Room to reconnect",
    text: "Create meaningful moments with family, friends and the world just beyond your doorstep.",
  },
];

const amenities = [
  "Landscaped open spaces",
  "Nature-inspired walking paths",
  "Private relaxation areas",
  "Community gathering spaces",
  "Thoughtful arrival experience",
  "Dedicated resident amenities",
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function TheForestEstatePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="forest-page">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .forest-page {
          --forest-black: #111b16;
          --forest-green: #233d30;
          --forest-moss: #667761;
          --forest-gold: #c2a66d;
          --forest-ivory: #f3f0e7;
          --forest-white: #faf9f5;
          --forest-muted: #767c70;
          color: var(--forest-black);
          background: var(--forest-ivory);
          font-family: 'DM Sans', sans-serif;
          overflow: clip;
        }

        .forest-page *,
        .forest-page *::before,
        .forest-page *::after {
          box-sizing: border-box;
        }

        .forest-page img {
          display: block;
          max-width: 100%;
        }

        .forest-page a {
          color: inherit;
          text-decoration: none;
        }

        .forest-page button,
        .forest-page input,
        .forest-page select,
        .forest-page textarea {
          font: inherit;
        }

        .forest-container {
          width: min(1200px, calc(100% - 72px));
          margin-inline: auto;
        }

        .forest-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .2em;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .forest-kicker::before {
          width: 27px;
          height: 1px;
          background: var(--forest-gold);
          content: "";
          flex: 0 0 auto;
        }

        .forest-heading {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(42px, 5.7vw, 78px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.07;
        }

        .forest-heading em {
          color: var(--forest-moss);
          font-weight: 400;
        }

        .forest-hero {
          position: relative;
          display: flex;
          min-height: min(850px, 95svh);
          align-items: center;
          background: var(--forest-black);
          color: var(--forest-white);
          isolation: isolate;
        }

        .forest-hero-photo {
          position: absolute;
          z-index: -2;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          animation: forest-photo-in 1.6s ease both;
        }

        .forest-hero-overlay {
          position: absolute;
          z-index: -1;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(10, 21, 15, .82) 0%, rgba(10, 21, 15, .53) 47%, rgba(10, 21, 15, .08) 100%),
            linear-gradient(0deg, rgba(10, 21, 15, .54), transparent 45%);
        }

        .forest-hero-content {
          width: min(1200px, calc(100% - 72px));
          margin: 0 auto;
          padding: 150px 0 105px;
        }

        .forest-hero-kicker {
          color: #e0c992;
        }

        .forest-hero-title {
          max-width: 850px;
          margin: 35px 0 24px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(64px, 10vw, 142px);
          font-weight: 400;
          letter-spacing: -.075em;
          line-height: .85;
          overflow-wrap: anywhere;
        }

        .forest-hero-title span {
          display: block;
        }

        .forest-hero-title .forest-title-second {
          padding-left: clamp(0px, 6vw, 80px);
          color: #d5c49b;
          font-style: italic;
        }

        .forest-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
          margin-top: 45px;
        }

        .forest-hero-description {
          max-width: 365px;
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 13px;
          line-height: 2;
        }

        .forest-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 25px;
          padding: 0 22px;
          border: 1px solid var(--forest-gold);
          background: var(--forest-gold);
          color: var(--forest-black) !important;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .13em;
          transition: background .25s, color .25s, transform .25s;
          cursor: pointer;
        }

        .forest-button:hover {
          transform: translateY(-2px);
          background: transparent;
          color: var(--forest-white) !important;
        }

        .forest-button span {
          font-size: 16px;
        }

        .forest-scroll-note {
          position: absolute;
          right: 35px;
          bottom: 36px;
          display: flex;
          align-items: center;
          gap: 13px;
          color: rgba(255,255,255,.76);
          font-size: 8px;
          letter-spacing: .2em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        .forest-scroll-note::after {
          width: 1px;
          height: 44px;
          background: var(--forest-gold);
          content: "";
        }

        .forest-intro {
          padding: 125px 0 135px;
        }

        .forest-intro-grid {
          display: grid;
          grid-template-columns: 1.15fr .75fr;
          gap: 85px;
          align-items: end;
          margin-top: 30px;
        }

        .forest-intro-copy {
          max-width: 430px;
          color: var(--forest-muted);
          font-size: 13px;
          line-height: 2.05;
        }

        .forest-intro-copy p {
          margin: 0 0 16px;
        }

        .forest-index {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
          color: var(--forest-green);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .forest-index span {
          color: var(--forest-gold);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 30px;
          font-weight: 400;
        }

        .forest-image-story {
          padding: 0 0 135px;
        }

        .forest-story-grid {
          display: grid;
          grid-template-columns: .95fr 1fr;
          align-items: center;
          gap: 9%;
        }

        .forest-story-image {
          position: relative;
          padding: 0 30px 30px 0;
        }

        .forest-story-image::before {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 70%;
          height: 70%;
          border: 1px solid var(--forest-gold);
          content: "";
        }

        .forest-story-image img {
          position: relative;
          width: 100%;
          height: 510px;
          object-fit: cover;
        }

        .forest-story-copy .forest-heading {
          margin: 25px 0;
          font-size: clamp(42px, 5vw, 65px);
        }

        .forest-story-copy > p {
          max-width: 440px;
          color: var(--forest-muted);
          font-size: 13px;
          line-height: 2.05;
        }

        .forest-story-detail {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 35px;
          padding-top: 24px;
          border-top: 1px solid #d9d6ca;
        }

        .forest-story-detail strong {
          color: var(--forest-green);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 33px;
          font-weight: 400;
        }

        .forest-story-detail span {
          max-width: 150px;
          color: var(--forest-muted);
          font-size: 10px;
          line-height: 1.8;
        }

        .forest-experiences {
          padding: 105px 0 115px;
          background: var(--forest-green);
          color: var(--forest-ivory);
        }

        .forest-experiences-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 55px;
        }

        .forest-experiences-header .forest-heading {
          margin-top: 23px;
        }

        .forest-experiences-header .forest-heading em {
          color: #d6c69e;
        }

        .forest-experiences-intro {
          max-width: 285px;
          margin: 0;
          color: #d1d8ce;
          font-size: 12px;
          line-height: 2;
        }

        .forest-experience-list {
          border-top: 1px solid rgba(243,240,231,.28);
        }

        .forest-experience {
          display: grid;
          grid-template-columns: 65px 1fr .8fr 30px;
          align-items: center;
          gap: 25px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(243,240,231,.28);
          transition: padding .25s;
        }

        .forest-experience:hover {
          padding-right: 10px;
          padding-left: 10px;
        }

        .forest-experience-number {
          color: var(--forest-gold);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 21px;
        }

        .forest-experience h3 {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(21px, 2.5vw, 32px);
          font-weight: 400;
        }

        .forest-experience p {
          margin: 0;
          color: #d1d8ce;
          font-size: 11px;
          line-height: 1.9;
        }

        .forest-experience-arrow {
          color: var(--forest-gold);
          font-size: 19px;
        }

        .forest-gallery {
          padding: 120px 0 130px;
        }

        .forest-gallery-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 35px;
          margin-bottom: 45px;
        }

        .forest-gallery-header .forest-heading {
          margin-top: 20px;
        }

        .forest-gallery-header p {
          max-width: 270px;
          margin: 0;
          color: var(--forest-muted);
          font-size: 12px;
          line-height: 2;
        }

        .forest-gallery-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          grid-template-rows: 280px 280px;
          gap: 17px;
        }

        .forest-gallery-card {
          position: relative;
          overflow: hidden;
          background: #d6d6c9;
        }

        .forest-gallery-card:first-child {
          grid-row: 1 / 3;
        }

        .forest-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .forest-gallery-card:hover img {
          transform: scale(1.045);
        }

        .forest-gallery-card::after {
          position: absolute;
          inset: 40% 0 0;
          background: linear-gradient(transparent, rgba(10,24,16,.62));
          content: "";
          pointer-events: none;
        }

        .forest-gallery-caption {
          position: absolute;
          z-index: 1;
          right: 23px;
          bottom: 23px;
          left: 23px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 15px;
          color: white;
        }

        .forest-gallery-caption span:first-child {
          display: block;
          margin-bottom: 5px;
          color: #e0c992;
          font-size: 8px;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .forest-gallery-caption strong {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 25px;
          font-weight: 400;
        }

        .forest-gallery-caption > span:last-child {
          color: #e0c992;
          font-size: 20px;
        }

        .forest-amenities {
          padding: 100px 0 120px;
          background: #e9e6dc;
        }

        .forest-amenities-grid {
          display: grid;
          grid-template-columns: .9fr 1fr;
          gap: 90px;
          align-items: start;
        }

        .forest-amenities-copy .forest-heading {
          margin-top: 24px;
          font-size: clamp(42px, 5vw, 65px);
        }

        .forest-amenities-copy p {
          max-width: 350px;
          margin-top: 25px;
          color: var(--forest-muted);
          font-size: 13px;
          line-height: 2;
        }

        .forest-amenities-list {
          border-top: 1px solid #d0cdbf;
        }

        .forest-amenity-item {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 19px 0;
          border-bottom: 1px solid #d0cdbf;
          color: var(--forest-green);
          font-size: 12px;
          line-height: 1.7;
        }

        .forest-amenity-item span {
          color: var(--forest-gold);
          font-size: 17px;
        }

        .forest-enquiry {
          padding: 120px 0;
          background: var(--forest-white);
        }

        .forest-enquiry-grid {
          display: grid;
          grid-template-columns: .9fr 1fr;
          align-items: start;
          gap: 10%;
        }

        .forest-enquiry-copy .forest-heading {
          margin: 25px 0;
          font-size: clamp(43px, 5.4vw, 70px);
        }

        .forest-enquiry-copy > p {
          max-width: 365px;
          color: var(--forest-muted);
          font-size: 13px;
          line-height: 2;
        }

        .forest-enquiry-note {
          display: flex;
          gap: 15px;
          align-items: start;
          margin-top: 35px;
          padding-top: 25px;
          border-top: 1px solid #dddacf;
          color: var(--forest-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .forest-enquiry-note span {
          color: var(--forest-gold);
          font-size: 20px;
        }

        .forest-form {
          padding: 35px;
          border: 1px solid #e1dfd4;
          background: var(--forest-ivory);
        }

        .forest-form h3 {
          margin: 0 0 10px;
          color: var(--forest-green);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 400;
        }

        .forest-form-intro {
          margin: 0 0 27px;
          color: var(--forest-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .forest-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .forest-form label {
          display: grid;
          gap: 9px;
          min-width: 0;
          margin-bottom: 19px;
          color: #536456;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .forest-form input,
        .forest-form select,
        .forest-form textarea {
          width: 100%;
          min-width: 0;
          border: 1px solid #d7d5c9;
          border-radius: 0;
          outline: none;
          padding: 13px 12px;
          background: transparent;
          color: var(--forest-black);
          font-size: 12px;
          letter-spacing: 0;
        }

        .forest-form input:focus,
        .forest-form select:focus,
        .forest-form textarea:focus {
          border-color: var(--forest-green);
        }

        .forest-form textarea {
          min-height: 110px;
          resize: vertical;
        }

        .forest-form .forest-button {
          width: 100%;
        }

        .forest-success strong {
          display: block;
          color: var(--forest-green);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 30px;
          font-weight: 400;
        }

        .forest-success p {
          color: var(--forest-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .forest-final {
          position: relative;
          padding: 110px 25px;
          overflow: hidden;
          background: var(--forest-black);
          color: var(--forest-white);
          text-align: center;
        }

        .forest-final::before,
        .forest-final::after {
          position: absolute;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(194,166,109,.2);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .forest-final::before {
          top: -190px;
          left: -160px;
        }

        .forest-final::after {
          right: -160px;
          bottom: -200px;
        }

        .forest-final .forest-kicker {
          justify-content: center;
          color: #d6c69e;
        }

        .forest-final .forest-kicker::after {
          width: 27px;
          height: 1px;
          background: var(--forest-gold);
          content: "";
        }

        .forest-final .forest-heading {
          margin: 27px auto;
          font-size: clamp(43px, 6.5vw, 82px);
        }

        .forest-final .forest-heading em {
          color: #d6c69e;
        }

        .forest-final p {
          margin: 0 auto 30px;
          color: #cbd1c8;
          font-size: 12px;
          line-height: 1.9;
        }

        @keyframes forest-photo-in {
          from { opacity: .5; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .forest-page *,
          .forest-page *::before,
          .forest-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }

        @media (max-width: 760px) {
          .forest-container,
          .forest-hero-content {
            width: calc(100% - 40px);
          }

          .forest-hero {
            min-height: 760px;
            min-height: 90svh;
          }

          .forest-hero-content {
            padding: 120px 0 75px;
          }

          .forest-hero-overlay {
            background:
              linear-gradient(90deg, rgba(10,21,15,.78), rgba(10,21,15,.24)),
              linear-gradient(0deg, rgba(10,21,15,.72), transparent 70%);
          }

          .forest-hero-title {
            font-size: clamp(59px, 12.5vw, 90px);
          }

          .forest-hero-title .forest-title-second {
            padding-left: 0;
          }

          .forest-hero-bottom {
            align-items: start;
            flex-direction: column;
            gap: 23px;
            margin-top: 30px;
          }

          .forest-scroll-note {
            right: 14px;
            bottom: 18px;
            font-size: 7px;
          }

          .forest-intro {
            padding: 80px 0;
          }

          .forest-intro-grid,
          .forest-story-grid,
          .forest-amenities-grid,
          .forest-enquiry-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .forest-intro-grid {
            margin-top: 25px;
          }

          .forest-image-story {
            padding-bottom: 85px;
          }

          .forest-story-image img {
            height: 390px;
          }

          .forest-story-copy .forest-heading {
            font-size: 46px;
          }

          .forest-experiences,
          .forest-gallery,
          .forest-amenities,
          .forest-enquiry {
            padding: 80px 0;
          }

          .forest-experiences-header,
          .forest-gallery-header {
            align-items: start;
            flex-direction: column;
            gap: 22px;
            margin-bottom: 35px;
          }

          .forest-experience {
            grid-template-columns: 35px 1fr 20px;
            gap: 13px;
            padding: 23px 0;
          }

          .forest-experience h3 {
            font-size: 22px;
          }

          .forest-experience p {
            grid-column: 2;
            grid-row: 2;
          }

          .forest-experience-arrow {
            grid-column: 3;
            grid-row: 1 / 3;
          }

          .forest-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 300px 190px;
            gap: 10px;
          }

          .forest-gallery-card:first-child {
            grid-column: 1 / 3;
            grid-row: auto;
          }

          .forest-gallery-caption {
            right: 13px;
            bottom: 14px;
            left: 13px;
          }

          .forest-gallery-caption strong {
            font-size: 19px;
          }

          .forest-amenities-grid {
            gap: 30px;
          }

          .forest-form {
            padding: 24px 18px;
          }

          .forest-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .forest-final {
            padding: 80px 20px;
          }
        }

        @media (max-width: 380px) {
          .forest-container,
          .forest-hero-content {
            width: calc(100% - 32px);
          }

          .forest-hero-title {
            font-size: 55px;
          }

          .forest-gallery-grid {
            grid-template-rows: 255px 170px;
          }

          .forest-gallery-caption strong {
            font-size: 17px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="forest-hero">
        <img
          className="forest-hero-photo"
          src={estateImages.hero}
          alt="Forest-inspired luxury estate setting"
          fetchPriority="high"
        />
        <div className="forest-hero-overlay" />

        <motion.div
          className="forest-hero-content"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="forest-kicker forest-hero-kicker">
            ALPHA LIVING · SIGNATURE COLLECTION
          </div>

          <h1 className="forest-hero-title">
            <span>The Forest</span>
            <span className="forest-title-second">Estate.</span>
          </h1>

          <div className="forest-hero-bottom">
            <p className="forest-hero-description">
              An invitation to experience a different kind of luxury.
              Inspired by nature, shaped by thoughtful design, and imagined
              around the art of living well.
            </p>

            <a href="#forest-enquiry" className="forest-button">
              DISCOVER THE ESTATE <span>↗</span>
            </a>
          </div>
        </motion.div>

        <div className="forest-scroll-note">SCROLL TO EXPLORE</div>
      </section>

      {/* INTRODUCTION */}
      <section className="forest-intro">
        <motion.div
          className="forest-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <div className="forest-kicker">A DIFFERENT WAY OF LIVING</div>

          <div className="forest-intro-grid">
            <h2 className="forest-heading">
              Where nature
              <br />
              becomes part of
              <br />
              <em>your everyday.</em>
            </h2>

            <div className="forest-intro-copy">
              <p>
                Imagine waking up to a calmer rhythm. Spaces that welcome
                natural light. Green surroundings that invite you to pause.
                Architecture that feels connected to its environment.
              </p>
              <p>
                The Forest Estate is presented as a vision of considered
                living, where the beauty of nature inspires the experience
                of home.
              </p>

              <div className="forest-index">
                <span>01</span>
                THE ART OF SLOWER LIVING
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ARCHITECTURE STORY */}
      <section className="forest-image-story">
        <div className="forest-container forest-story-grid">
          <motion.div
            className="forest-story-image"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={estateImages.architecture}
              alt="Contemporary residential architecture with natural finishes"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="forest-story-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="forest-kicker">DESIGN WITH INTENTION</div>

            <h2 className="forest-heading">
              Less noise.
              <br />
              More <em>meaning.</em>
            </h2>

            <p>
              True luxury is not always about having more. Sometimes, it is
              about having the space to breathe, the freedom to unwind and
              the comfort of an environment that feels right.
            </p>

            <p>
              Natural textures, considered proportions and an understated
              design language set the tone for this editorial vision of
              contemporary estate living.
            </p>

            <div className="forest-story-detail">
              <strong>01</strong>
              <span>A vision shaped around nature, space and simplicity.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCES */}
      <section className="forest-experiences">
        <div className="forest-container">
          <motion.div
            className="forest-experiences-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div>
              <div className="forest-kicker">THE SIGNATURE EXPERIENCE</div>
              <h2 className="forest-heading">
                Made for the
                <br />
                life you <em>imagine.</em>
              </h2>
            </div>

            <p className="forest-experiences-intro">
              A lifestyle concept inspired by a simple idea: your home
              should give you more opportunities to enjoy the things
              that matter.
            </p>
          </motion.div>

          <div className="forest-experience-list">
            {experiences.map((item, index) => (
              <motion.article
                className="forest-experience"
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="forest-experience-number">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="forest-experience-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="forest-gallery" id="forest-gallery">
        <div className="forest-container">
          <motion.div
            className="forest-gallery-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div>
              <div className="forest-kicker">A VISUAL JOURNEY</div>
              <h2 className="forest-heading">
                A world of
                <br />
                <em>your own.</em>
              </h2>
            </div>

            <p>
              Explore the visual language of The Forest Estate, from
              architecture and interiors to the restorative beauty of
              the natural world.
            </p>
          </motion.div>

          <div className="forest-gallery-grid">
            <motion.div
              className="forest-gallery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <img
                src={estateImages.nature}
                alt="Lush woodland and green natural surroundings"
                loading="lazy"
              />
              <div className="forest-gallery-caption">
                <div>
                  <span>01 / NATURE</span>
                  <strong>Closer to green</strong>
                </div>
                <span>↗</span>
              </div>
            </motion.div>

            <motion.div
              className="forest-gallery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65 }}
            >
              <img
                src={estateImages.interior}
                alt="Warm and refined contemporary interior"
                loading="lazy"
              />
              <div className="forest-gallery-caption">
                <div>
                  <span>02 / INTERIORS</span>
                  <strong>Quiet refinement</strong>
                </div>
                <span>↗</span>
              </div>
            </motion.div>

            <motion.div
              className="forest-gallery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.65 }}
            >
              <img
                src={estateImages.exterior}
                alt="Modern luxury residence with landscaped exterior"
                loading="lazy"
              />
              <div className="forest-gallery-caption">
                <div>
                  <span>03 / ARCHITECTURE</span>
                  <strong>Designed to belong</strong>
                </div>
                <span>↗</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="forest-amenities">
        <div className="forest-container forest-amenities-grid">
          <motion.div
            className="forest-amenities-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="forest-kicker">THE DETAILS THAT MATTER</div>

            <h2 className="forest-heading">
              Everyday
              <br />
              moments,
              <br />
              <em>beautifully made.</em>
            </h2>

            <p>
              Thoughtfully planned spaces can change the way you experience
              home. This concept highlights the kinds of amenities that
              support connection, comfort and time outdoors.
            </p>
          </motion.div>

          <div className="forest-amenities-list">
            {amenities.map((amenity, index) => (
              <motion.div
                className="forest-amenity-item"
                key={amenity}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <span>↗</span>
                {amenity}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="forest-enquiry" id="forest-enquiry">
        <div className="forest-container forest-enquiry-grid">
          <motion.div
            className="forest-enquiry-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div className="forest-kicker">YOUR NEXT CHAPTER</div>

            <h2 className="forest-heading">
              Find your
              <br />
              place in
              <br />
              <em>the forest.</em>
            </h2>

            <p>
              Curious to know more about The Forest Estate? Leave your
              details and let us know what you would like to discover.
            </p>

            <div className="forest-enquiry-note">
              <span>✳</span>
              <div>
                <strong>Designed around you.</strong>
                <br />
                Connect with the team to discuss your interest.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="forest-form">
              {submitted ? (
                <div className="forest-success" role="status">
                  <strong>Thank you for your interest.</strong>
                  <p>
                    Your form has been submitted on this demo page.
                    Connect the form to your backend or CRM to receive
                    enquiries.
                  </p>
                  <button
                    type="button"
                    className="forest-button"
                    onClick={() => setSubmitted(false)}
                  >
                    SEND ANOTHER ENQUIRY <span>↗</span>
                  </button>
                </div>
              ) : (
                <>
                  <h3>Let's connect.</h3>
                  <p className="forest-form-intro">
                    Share your details to begin a conversation.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="forest-form-row">
                      <label>
                        FULL NAME *
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                        />
                      </label>

                      <label>
                        EMAIL ADDRESS *
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </label>
                    </div>

                    <div className="forest-form-row">
                      <label>
                        PHONE NUMBER
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91"
                          autoComplete="tel"
                        />
                      </label>

                      <label>
                        I AM INTERESTED IN
                        <select name="interest" defaultValue="Project information">
                          <option>Project information</option>
                          <option>Residential property</option>
                          <option>Investment opportunities</option>
                          <option>Site visit</option>
                          <option>Other enquiry</option>
                        </select>
                      </label>
                    </div>

                    <label>
                      MESSAGE *
                      <textarea
                        name="message"
                        placeholder="Tell us what you would like to know..."
                        required
                      />
                    </label>

                    <button type="submit" className="forest-button">
                      SUBMIT YOUR ENQUIRY <span>↗</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="forest-final">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <div className="forest-kicker">THE FOREST ESTATE · ALPHA LIVING</div>

          <h2 className="forest-heading">
            Come home to
            <br />
            something <em>natural.</em>
          </h2>

          <p>
            A thoughtful vision of home, inspired by the world outside.
          </p>

          <a href="/projects" className="forest-button">
            DISCOVER MORE PROJECTS <span>↗</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
