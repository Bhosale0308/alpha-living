
"use client";

import { useState, type FormEvent } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="alpha-contact">
      <Header />

      {/* HERO */}
      <section className="contact-simple-hero">
        <div className="contact-simple-inner">
          <span className="contact-simple-label">
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's start a <em>conversation.</em>
          </h1>

          <p>
            Looking for your next home or investment?
            Tell us what you need and our team will help you
            explore the right possibilities.
          </p>

          <a href="#contact-form" className="contact-simple-link">
            GET IN TOUCH <span>↗</span>
          </a>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-simple-section" id="contact-form">
        <div className="contact-simple-heading">
          <span className="contact-simple-label">
            CONTACT ALPHA LIVING
          </span>
          <h2>How can we help you?</h2>
          <p>
            Share your details below and let us know how we
            can assist you.
          </p>
        </div>

        <div className="contact-simple-grid">
          {/* FORM */}
          <div className="contact-simple-form-card">
            {submitted ? (
              <div className="contact-simple-success" role="status">
                <span className="contact-simple-check">✓</span>
                <h3>Thank you for reaching out.</h3>
                <p>
                  This demo form has been submitted successfully.
                  Connect it to an email service or backend to
                  receive real enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  SEND ANOTHER ENQUIRY ↗
                </button>
              </div>
            ) : (
              <>
                <h3>Send us an enquiry</h3>
                <p className="contact-simple-form-intro">
                  Fields marked with * are required.
                </p>

                <form
                  className="contact-simple-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-simple-fields">
                    <label>
                      Full name *
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label>
                      Email address *
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label>
                      Phone number
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91"
                        autoComplete="tel"
                      />
                    </label>

                    <label>
                      Interested in
                      <select name="interest" defaultValue="">
                        <option value="" disabled>
                          Select a property type
                        </option>
                        <option>Residential property</option>
                        <option>Luxury residences</option>
                        <option>Real estate investment</option>
                        <option>Land and plotted developments</option>
                        <option>Business partnership</option>
                        <option>Other enquiry</option>
                      </select>
                    </label>

                    <label className="contact-simple-message">
                      Your message *
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="How can we help you?"
                        required
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="contact-simple-submit"
                  >
                    SEND ENQUIRY <span>↗</span>
                  </button>

                  <p className="contact-simple-privacy">
                    By submitting, you agree to be contacted
                    about your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo"
              aria-label="Alpha Living home"
            >
              <img
                src="/alpha-living-logo.png"
                alt="ALPHAA LIVING"
                className="footer-brand-logo"
              />
            </a>

            <p>
              Creating exceptional living spaces that bring
              together thoughtful design, modern comfort,
              and lasting value.
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
          <span>Designed & Developed by Oyemarketor Pvt Ltd</span>
        </div>
      </footer>
    </main>
  );
}
