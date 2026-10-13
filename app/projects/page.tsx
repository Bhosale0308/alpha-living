
"use client";

import { useState } from "react";
import Header from "@/components/Header";

const projects = [
  {
    name: "Palm World City",
    location: "Airport Road, Gwalior",
    category: "Township",
    type: "Plots & Villas",
    status: "Ongoing",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    description:
      "A thoughtfully planned destination bringing open spaces, modern architecture and everyday convenience together.",
    featured: true,
  },
  {
    name: "Aaroha Greens",
    location: "Nagpur, Maharashtra",
    category: "Residential",
    type: "Premium Residences",
    status: "Discover",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    description:
      "Contemporary residences designed around comfort, natural light and a more considered way of living.",
  },
  {
    name: "The Forest Estate",
    location: "Pench, Nagpur",
    category: "Farmlands",
    type: "Estate Plots",
    status: "Discover",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
    description:
      "A nature-inspired retreat celebrating open landscapes, greenery and a slower pace of life.",
  },
  {
    name: "Grand Celebration Valley",
    location: "Nagpur, Maharashtra",
    category: "Hospitality",
    type: "Resort & Event Spaces",
    status: "Discover",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85",
    description:
      "A destination concept for meaningful gatherings, special occasions and memorable experiences.",
  },
];

const categories = [
  "All",
  "Residential",
  "Farmlands",
  "Township",
  "Hospitality",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject = projects[0];

  return (
    <main className="alpha-projects-page">
      <Header />

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-image" />

        <div className="projects-hero-overlay" />

        <div className="projects-hero-content">
          <span className="projects-eyebrow">
            <span />
            THE ALPHA COLLECTION
          </span>

          <h1>
            Places with purpose.
            <br />
            <em>Spaces with soul.</em>
          </h1>

          <p>
            Explore a collection of destinations shaped by
            thoughtful design, meaningful locations and a vision
            for better living.
          </p>

          <a href="#project-collection" className="projects-hero-link">
            EXPLORE OUR PROJECTS
            <span>↘</span>
          </a>
        </div>

        <div className="projects-hero-bottom">
          <span>THOUGHTFULLY CONCEIVED</span>
          <span>BUILT AROUND BETTER LIVING</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-intro">
        <div className="projects-intro-left">
          <span className="projects-label">
            MORE THAN REAL ESTATE
          </span>

          <h2>
            Every place begins
            <br />
            with <em>a possibility.</em>
          </h2>
        </div>

        <div className="projects-intro-right">
          <p>
            From thoughtfully planned communities to
            nature-inspired destinations, discover spaces
            created around the way people want to live,
            connect and experience life.
          </p>

          <a href="#project-collection" className="projects-text-link">
            FIND YOUR NEXT DESTINATION ↗
          </a>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="projects-featured">
        <div className="projects-featured-image">
          <img
            src={featuredProject.image}
            alt="Architectural view of Palm World City concept"
            loading="lazy"
          />

          <span className="projects-image-caption">
            FEATURED DESTINATION · 01
          </span>
        </div>

        <div className="projects-featured-copy">
          <span className="projects-label">
            A PLACE TO BEGIN
          </span>

          <span className="projects-featured-category">
            {featuredProject.category}
          </span>

          <h2>{featuredProject.name}</h2>

          <p className="projects-featured-location">
            ↗ {featuredProject.location}
          </p>

          <p className="projects-featured-description">
            {featuredProject.description}
          </p>

          <div className="projects-featured-meta">
            <div>
              <span>PROPERTY TYPE</span>
              <strong>{featuredProject.type}</strong>
            </div>

            <div>
              <span>PROJECT STATUS</span>
              <strong>{featuredProject.status}</strong>
            </div>
          </div>

          <a
            href="https://www.goyalhousing.com/projects/palm-world-city"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-featured-button"
          >
            EXPLORE PROJECT
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* PROJECT COLLECTION */}
      <section className="projects-collection" id="project-collection">
        <div className="projects-collection-heading">
          <div>
            <span className="projects-label">
              EXPLORE OUR PORTFOLIO
            </span>

            <h2>
              Find your <em>place.</em>
            </h2>
          </div>

          <p>
            Different destinations. One considered approach
            to living.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div
          className="projects-filters"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "projects-filter active"
                  : "projects-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="projects-card-grid">
          {filteredProjects.map((project) => (
            <article
              className="projects-card"
              key={project.name}
            >
              <a
                href={
                  project.name === "Palm World City"
                    ? "https://www.goyalhousing.com/projects/palm-world-city"
                    : "/contact"
                }
                target={
                  project.name === "Palm World City"
                    ? "_blank"
                    : undefined
                }
                rel={
                  project.name === "Palm World City"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="projects-card-image"
                aria-label={`Explore ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} architectural concept`}
                  loading="lazy"
                />

                <span className="projects-card-category">
                  {project.category}
                </span>

                <span className="projects-card-number">
                  {project.number}
                </span>

                <span className="projects-card-arrow">↗</span>
              </a>

              <div className="projects-card-content">
                <span className="projects-card-location">
                  {project.location}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="projects-card-bottom">
                  <div>
                    <span>PROPERTY TYPE</span>
                    <strong>{project.type}</strong>
                  </div>

                  <a
                    href="/contact"
                    aria-label={`Enquire about ${project.name}`}
                  >
                    ENQUIRE ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">
            No projects found in this category.
          </p>
        )}
      </section>

      {/* ENQUIRY CTA */}
      <section className="projects-enquiry">
        <div className="projects-enquiry-inner">
          <div>
            <span className="projects-label">
              YOUR NEXT CHAPTER
            </span>

            <h2>
              The right place
              <br />
              changes <em>everything.</em>
            </h2>

            <p>
              Tell us what you are looking for.
              Let's explore the possibilities together.
            </p>
          </div>

          <a href="/contact" className="projects-enquiry-button">
            LET'S CONNECT
            <span>↗</span>
          </a>
        </div>
      </section>

     
<footer className="site-footer">
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

    <span>
      © 2026 Alpha Living. All Rights Reserved.
    </span>

    <span>
      Designed & Developed by Oyemarketor Pvt Ltd
    </span>
  </div>
</footer>

    </main>
  );
}
