
"use client";


import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  Sparkles,
} from "lucide-react";

const milestones = [
  {
    year: "2018",
    number: "01",
    title: "A different beginning",
    text: "A simple question started it all: what if a home could feel as considered as a piece of art?",
  },
  {
    year: "2020",
    number: "02",
    title: "Ideas became places",
    text: "The vision moved beyond drawings, bringing thoughtful planning and a stronger sense of place together.",
  },
  {
    year: "2023",
    number: "03",
    title: "A broader horizon",
    text: "New ideas, new landscapes, and a deeper belief that good spaces should enrich everyday rituals.",
  },
  {
    year: "2026",
    number: "04",
    title: "The next chapter",
    text: "A new generation of spaces, shaped around nature, belonging, and the possibilities of tomorrow.",
  },
];

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Purpose before form",
    text: "Every space begins with a reason to exist. We design around how people live, feel, connect, and grow.",
    detail: "INTENTION",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Details make the difference",
    text: "From the first line on a drawing to the final material, the smallest decisions shape the whole experience.",
    detail: "CRAFT",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "A lighter footprint",
    text: "We explore ways to bring natural light, greenery, open space, and a lasting connection to the outdoors into our thinking.",
    detail: "CONSIDERATION",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let frame = 0;
    const duration = 1600;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="story-page">
      {/* HERO */}
      <section className="story-hero">
        <div className="story-hero-image" />
        <div className="story-hero-shade" />

        <div className="story-hero-top">
          <span>ALPHA LIVING / OUR STORY</span>
          <span>DESIGNED FOR WHAT MATTERS</span>
        </div>

        <div className="story-hero-content">
          <Reveal>
            <span className="story-kicker story-kicker-light">
              A THOUGHTFUL APPROACH TO LIVING
            </span>
          </Reveal>

          <h1>
            More than
            <br />
            <em>walls.</em>
            <br />
            A way of living.
          </h1>

          <div className="story-hero-bottom">
            <p>
              We believe the places we inhabit should do more than hold
              our lives. They should make room for them to flourish.
            </p>

            <a href="#the-beginning" className="story-scroll">
              <span>DISCOVER OUR STORY</span>
              <span className="story-scroll-icon">
                <ArrowDown size={17} />
              </span>
            </a>
          </div>
        </div>

        <span className="story-hero-index">01 — THE IDEA</span>
      </section>

      {/* INTRODUCTION */}
      <section
        className="story-intro story-section"
        id="the-beginning"
      >
        <div className="story-intro-label">
          <span className="story-kicker">THE THINKING BEHIND IT</span>
          <span className="story-side-note">A NOTE FROM OUR WORLD</span>
        </div>

        <div className="story-intro-grid">
          <Reveal className="story-intro-heading">
            <span className="story-small-number">01 / OUR BELIEF</span>
            <h2>
              A place is
              <br />
              never just
              <br />
              <em>a place.</em>
            </h2>
          </Reveal>

          <Reveal className="story-intro-copy" delay={0.12}>
            <p className="story-lead">
              It is where ordinary days become meaningful memories.
            </p>

            <p>
              At ALPHA Living, our philosophy starts with people, not
              floor plans. We imagine the morning light entering a room,
              the conversations that linger around a table, and the quiet
              moments that make a space feel unmistakably yours.
            </p>

            <p>
              Our ambition is to bring architecture, considered details,
              and a connection to the surrounding landscape into one
              thoughtful experience.
            </p>

            <Link href="/projects" className="story-text-link">
              EXPLORE OUR PROJECTS
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* IMAGE STORY */}
      <section className="story-image-section">
        <div className="story-image-main">
          <motion.div
            className="story-image-photo"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <span className="story-image-caption">
            SPACE TO PAUSE. ROOM TO BECOME.
          </span>
        </div>

        <Reveal className="story-image-note">
          <span className="story-note-star">✳</span>
          <span className="story-kicker">OUR POINT OF VIEW</span>

          <h3>
            The best spaces
            <br />
            don't demand
            <br />
            attention.
            <br />
            <em>They earn affection.</em>
          </h3>

          <span className="story-note-bottom">
            LESS NOISE. MORE MEANING.
          </span>
        </Reveal>
      </section>

      {/* PHILOSOPHY */}
      <section className="story-philosophy story-section">
        <Reveal className="story-section-heading">
          <span className="story-kicker">WHAT GUIDES US</span>

          <h2>
            The details
            <br />
            <em>behind the feeling.</em>
          </h2>

          <p>
            Three ideas shape the way we imagine every space.
            Simple in principle. Meaningful in practice.
          </p>
        </Reveal>

        <div className="story-principles">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} delay={index * 0.12}>
                <motion.article
                  className="story-principle-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="story-principle-top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.3} />
                  </div>

                  <span className="story-principle-detail">
                    {item.detail}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="story-principle-line">
                    <span />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="story-timeline-section">
        <div className="story-timeline-inner">
          <Reveal className="story-timeline-heading">
            <span className="story-kicker story-kicker-light">
              THE ROAD SO FAR
            </span>

            <h2>
              Built on a
              <br />
              <em>point of view.</em>
            </h2>

            <p>
              Every chapter starts with a question. Every next step
              brings a new possibility.
            </p>
          </Reveal>

          <div className="story-timeline">
            {milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <motion.article
                  className="story-milestone"
                  whileHover={{ x: 7 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="story-milestone-year">
                    <span>{item.year}</span>
                    <span className="story-milestone-dot" />
                  </div>

                  <div className="story-milestone-content">
                    <span className="story-kicker">
                      CHAPTER {item.number}
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight
                    className="story-milestone-arrow"
                    size={20}
                    strokeWidth={1.2}
                  />
                </motion.article>
              </Reveal>
            ))}
          </div>

          <span className="story-timeline-watermark">ALPHA</span>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="story-numbers story-section">
        <Reveal>
          <span className="story-kicker">A VISION TAKING SHAPE</span>

          <h2>
            A little perspective.
            <br />
            <em>A lot of possibility.</em>
          </h2>
        </Reveal>

        <div className="story-stats-grid">
          <Reveal>
            <div className="story-stat">
              <span className="story-stat-index">01</span>

              <strong>
                <CountUp value={8} suffix="+" />
              </strong>

              <span>YEARS OF IDEAS</span>
              <p>Learning, evolving, and imagining what's next.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="story-stat">
              <span className="story-stat-index">02</span>

              <strong>
                <CountUp value={12} suffix="+" />
              </strong>

              <span>PROJECT CONCEPTS</span>
              <p>Different possibilities, united by thoughtful design.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="story-stat">
              <span className="story-stat-index">03</span>

              <strong>
                <CountUp value={4} />
              </strong>

              <span>DESIGN PRINCIPLES</span>
              <p>A shared direction for decisions big and small.</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="story-stat">
              <span className="story-stat-index">04</span>

              <strong>
                <CountUp value={1} />
              </strong>

              <span>CONTINUING PURPOSE</span>
              <p>To make spaces feel more human, more considered.</p>
            </div>
          </Reveal>
        </div>

        <p className="story-stats-disclaimer">
          Illustrative figures for this design concept only.
        </p>
      </section>

      {/* FUTURE */}
      <section className="story-future">
        <div className="story-future-image" />

        <div className="story-future-content">
          <Reveal>
            <span className="story-kicker story-kicker-light">
              THERE IS MORE AHEAD
            </span>

            <h2>
              The future
              <br />
              is a place
              <br />
              <em>we create.</em>
            </h2>

            <p>
              We are still asking questions, exploring ideas, and
              finding new ways to make spaces matter.
            </p>

            <Link href="/contact" className="story-future-button">
              LET'S START A CONVERSATION
              <span>
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </Reveal>
        </div>

        <span className="story-future-mark">AL / 2026</span>
      </section>

      {/* CLOSING */}
      <section className="story-closing">
        <span className="story-kicker">YOUR NEXT CHAPTER STARTS HERE</span>

        <h2>
          Find your
          <br />
          <em>kind of space.</em>
        </h2>

        <Link href="/projects" className="story-closing-link">
          DISCOVER ALPHA LIVING
          <ArrowRight size={18} />
        </Link>

        <span className="story-closing-decoration">A.</span>
      </section>

      {/* FOOTER - KEPT IN THE SAME FILE */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
               
           <Link href="/" className="footer-logo" aria-label="Alpha Living home">
             <img
               src="/alpha-living-logo.png"
               alt="ALPHAA LIVING"
               className="footer-brand-logo"
             />
           </Link>

            <p>
              Creating exceptional living spaces that bring together
              thoughtful design, modern comfort, and lasting value.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>The Menu</h4>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">Our Story</a>
            <a href="/values">Our Values</a>
            <a href="/careers">Careers</a>
            <a href="/partner">Be Our Partner</a>
            <a href="/contact">Contact Us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div className="footer-column">
            <h4>Our Projects</h4>
            <a href="/projects">Palm World City</a>
            <a href="/projects">The Forest Estate</a>
            <a href="/projects">Aaroha Greens</a>
            <a href="/projects">Grand Celebration Valley</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>Head Office</h4>

            <span>Phone</span>
            <a href="tel:+910000000000">+91 00000 00000</a>

            <span>Email</span>
            <a href="mailto:info@alphaliving.example">
              info@alphaliving.example
            </a>

            <span>Address</span>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Est. 2020</span>

          <span>
            © 2026 Alpha Living. All Rights Reserved.
          </span>

          <span>
            Designed &amp; Developed by Oyemarketor Pvt Ltd
          </span>
        </div>
      </footer>
    </main>
  );
}
