
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="alpha-contact" id="contact">
      {/* LEFT SIDE — CONTACT FORM */}
      <div className="alpha-contact-form-side">
        <div className="alpha-contact-heading">
          <span className="alpha-contact-eyebrow">
            QUICK ENQUIRY
          </span>

          <h2>
            LET'S FIND YOUR
            <br />
            <em>DREAM HOME.</em>
          </h2>

          <p>
            Tell us what you are looking for.
            Our team will help you explore spaces
            that match your lifestyle.
          </p>
        </div>

        {submitted ? (
          <div className="alpha-contact-success">
            <span className="alpha-contact-check">✓</span>
            <h3>Thank you for your enquiry.</h3>
            <p>
              Your details have been received in this demo.
              Connect a backend to receive real enquiries.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form
            className="alpha-contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="alpha-contact-row">
              <div className="alpha-contact-field">
                <label htmlFor="alpha-name">FULL NAME *</label>
                <input
                  id="alpha-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="alpha-contact-field">
                <label htmlFor="alpha-phone">PHONE NUMBER *</label>
                <input
                  id="alpha-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="alpha-contact-field">
              <label htmlFor="alpha-email">EMAIL ADDRESS *</label>
              <input
                id="alpha-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="alpha-contact-field">
              <label htmlFor="alpha-project">PROJECT INTEREST *</label>
              <select
                id="alpha-project"
                name="project"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a project
                </option>
                <option value="Greenwood Residences">
                  Greenwood Residences
                </option>
                <option value="The Grand Estate">
                  The Grand Estate
                </option>
                <option value="Oakwood Villas">
                  Oakwood Villas
                </option>
                <option value="Nature Valley Plots">
                  Nature Valley Plots
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="alpha-contact-field">
              <label htmlFor="alpha-message">
                YOUR MESSAGE
              </label>
              <textarea
                id="alpha-message"
                name="message"
                rows={3}
                placeholder="Tell us about your ideal property..."
              />
            </div>

            <button
              className="alpha-contact-submit"
              type="submit"
            >
              SEND ENQUIRY <span>↗</span>
            </button>

            <small className="alpha-contact-privacy">
              Your information will be used to respond to your enquiry.
            </small>
          </form>
        )}
      </div>

      {/* RIGHT SIDE — PROPERTY IMAGE */}
      <div className="alpha-contact-visual">
        <div className="alpha-contact-image-overlay" />

        <div className="alpha-contact-image-content">
          <span className="alpha-contact-image-eyebrow">
            A PLACE TO CALL YOUR OWN
          </span>

          <h3>
            More than a home.
            <br />
            <em>A feeling.</em>
          </h3>

          <div className="alpha-contact-image-line" />

          <p>
            Thoughtfully designed spaces for the life
            you want to live and the memories you
            want to create.
          </p>
        </div>

        <span className="alpha-contact-image-caption">
          DESIGNED FOR LIVING
        </span>
      </div>
    </section>
  );
}
