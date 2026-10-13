
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="alpha-contact premium-contact">
      {/* HERO */}
      <section className="pc-hero">
        <div className="pc-hero-image" />

        <div className="pc-hero-overlay" />

        <motion.div
          className="pc-hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <span className="pc-eyebrow pc-light-eyebrow">
            A PERSONAL INTRODUCTION
          </span>

          <h1>
            Your next
            <br />
            chapter
            <br />
            <em>starts here.</em>
          </h1>

          <p>
            Tell us what home means to you.
            We will help you discover a place
            that feels entirely your own.
          </p>

          <a className="pc-button pc-button-light" href="#contact-form">
            LET’S BEGIN <span>↗</span>
          </a>
        </motion.div>

        <div className="pc-hero-caption">
          <span>ALPHA LIVING</span>
          <span>SPACES BEYOND ORDINARY</span>
        </div>

        <div className="pc-hero-number">01 — 04</div>
      </section>

      {/* INTRODUCTION */}
      <section className="pc-intro">
        <motion.div
          className="pc-intro-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span className="pc-eyebrow">MORE THAN A PROPERTY</span>

          <h2>
            The right place
            <br />
            changes <em>everything.</em>
          </h2>
        </motion.div>

        <motion.div
          className="pc-intro-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span className="pc-decorative-quote">“</span>

          <p>
            Finding a home is personal. It is about the mornings
            you imagine, the memories you will create, and the
            life you want to build.
          </p>

          <p>
            Whether you are looking for a new residence or
            exploring an investment, our team is here to listen.
          </p>
        </motion.div>
      </section>

      {/* ENQUIRY AREA */}
      <section className="pc-enquiry" id="contact-form">
        <div className="pc-form-side">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            <span className="pc-eyebrow">LET’S TALK</span>

            <h2>
              Tell us
              <br />
              <em>what you need.</em>
            </h2>

            <p className="pc-form-lead">
              A few details are all we need to get started.
              We look forward to hearing from you.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              className="pc-success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
            >
              <span className="pc-success-mark">✓</span>
              <h3>Thank you for reaching out.</h3>
              <p>
                Your demo submission was successful. Connect the form
                to a backend or email service to receive real enquiries.
              </p>

              <button
                type="button"
                className="pc-submit"
                onClick={() => setSubmitted(false)}
              >
                SEND ANOTHER ENQUIRY <span>↗</span>
              </button>
            </motion.div>
          ) : (
            <form className="pc-form" onSubmit={handleSubmit}>
              <div className="pc-fields">
                <label>
                  <span>YOUR NAME *</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>EMAIL ADDRESS *</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>PHONE NUMBER</span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <span>YOUR INTEREST</span>
                  <select name="interest" defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Residential property</option>
                    <option>Luxury residences</option>
                    <option>Real estate investment</option>
                    <option>Land and plotted developments</option>
                    <option>Business partnership</option>
                    <option>Other enquiry</option>
                  </select>
                </label>
              </div>

              <label className="pc-message">
                <span>HOW CAN WE HELP? *</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a little about what you are looking for..."
                  required
                />
              </label>

              <div className="pc-form-bottom">
                <p>
                  By submitting, you agree to be contacted about
                  your enquiry.
                </p>

                <button className="pc-submit" type="submit">
                  SEND ENQUIRY <span>↗</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* CONTACT DETAILS */}
        <aside className="pc-details">
          <div className="pc-details-top">
            <span className="pc-eyebrow pc-light-eyebrow">
              A REAL PERSON. A REAL CONVERSATION.
            </span>

            <h3>
              We’re here
              <br />
              <em>to help.</em>
            </h3>

            <p>
              Have a question or a project in mind?
              Connect with our team and let’s take
              the next step together.
            </p>
          </div>

          <div className="pc-detail-list">
            <a
              className="pc-detail"
              href="mailto:hello@alphaliving.com"
            >
              <span className="pc-detail-index">01</span>
              <span className="pc-detail-content">
                <small>EMAIL US</small>
                <strong>hello@alphaliving.com</strong>
              </span>
              <span className="pc-detail-arrow">↗</span>
            </a>

            <a
              className="pc-detail"
              href="tel:+910000000000"
            >
              <span className="pc-detail-index">02</span>
              <span className="pc-detail-content">
                <small>CALL OUR TEAM</small>
                <strong>+91 00000 00000</strong>
              </span>
              <span className="pc-detail-arrow">↗</span>
            </a>

            <a
              className="pc-detail"
              href="https://maps.google.com/?q=Pune+Maharashtra"
              target="_blank"
              rel="noreferrer"
            >
              <span className="pc-detail-index">03</span>
              <span className="pc-detail-content">
                <small>FIND OUR OFFICE</small>
                <strong>Pune, Maharashtra, India</strong>
              </span>
              <span className="pc-detail-arrow">↗</span>
            </a>
          </div>

          <div className="pc-details-note">
            <span className="pc-note-dot" />
            Thoughtful conversations. Considered decisions.
          </div>
        </aside>
      </section>

      {/* PROJECT DISCOVERY */}
      <section className="pc-discover">
        <div className="pc-discover-image" />

        <div className="pc-discover-overlay" />

        <motion.div
          className="pc-discover-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <span className="pc-eyebrow pc-light-eyebrow">
            FIND YOUR PLACE
          </span>

          <h2>
            A little closer
            <br />
            to <em>your future.</em>
          </h2>

          <p>
            Explore spaces shaped around the way you want to live.
          </p>

          <a className="pc-button pc-button-light" href="/projects">
            DISCOVER OUR PROJECTS <span>↗</span>
          </a>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="pc-final">
        <span className="pc-eyebrow pc-light-eyebrow">
          YOUR STORY. YOUR SPACE.
        </span>

        <h2>
          Every great home
          <br />
          begins <em>with a hello.</em>
        </h2>

        <a href="#contact-form" className="pc-final-link">
          START A CONVERSATION <span>↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer pc-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              ALPHA<span>.</span>
            </a>

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
          <span>© 2026 Alpha Living. All Rights Reserved.</span>
          <span>Designed &amp; Developed by Oyemarketor Pvt Ltd</span>
        </div>
      </footer>
    </main>
  );
}
