import Header from "@/components/Header";
import Contactsection from "@/components/Contactsection";
import LegacyTimeline from "@/components/LegacyTimeline";
import Link from "next/link";
const projects = [
  {
    name: "Palm World City",
     slug: "palm-world-city",
    location: "Airport Road, Gwalior",
    category: "Township",
    status: "Ongoing RERA",
    launch: "New Launch · 2025",
    configuration: "Plots & Villas",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    link: "https://www.goyalhousing.com/projects/palm-world-city",
    description:
      "A township offering plots and villas on Airport Road, Gwalior.",
  },
  {
    name: "The Forest Estate",
     slug: "the-forest-estate",
    location: "Pench, Nagpur",
    category: "Farmlands",
    status: "Explore Project",
    launch: "Premium Nature Living",
    configuration: "Estate Plots",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
    link: "/projects",
    description:
      "Experience peaceful living surrounded by nature and greenery.",
  },
  {
    name: "Aaroha Greens",
    slug: "aaroha greens",
    location: "Nagpur",
    category: "Residential",
    status: "Explore Project",
    launch: "Nature Inspired Living",
    configuration: "Premium Residences",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    link: "/projects",
    description:
      "Thoughtfully designed residences with elegant architecture.",
  },
  {
    name: "Grand Celebration Valley",
     slug: "grand-celebration-valley",
    location: "Nagpur",
    category: "Hospitality",
    status: "Explore Project",
    launch: "Destination Living",
    configuration: "Resort & Event Spaces",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85",
    link: "/projects",
    description:
      "A destination designed for celebrations, relaxation, and memorable experiences.",
  },
];
export default function HomePage() {
  return (
    <main>
        <Header />
     

<section className="hero hero-signature">
  <div className="hero-bg" />
  <div className="hero-arc" />

  <div className="hero-content">
    <span className="section-label">
      LUXURY LIVING REDEFINED
    </span>

    <h1>
      Spaces that
      <br />
      inspire <em>living.</em>
    </h1>

    <p>
      Thoughtfully designed spaces, where timeless
      architecture meets nature and modern living.
    </p>

    <div className="hero-actions">
      <a href="/projects" className="hero-explore">
        <span className="hero-arrow">→</span>
        <span>EXPLORE OUR PROJECTS</span>
      </a>

      <a href="/about" className="hero-discover">
        DISCOVER ALPHA
      </a>
    </div>
  </div>

  <div className="hero-side-index">
    <a href="/projects" aria-label="Explore projects">01</a>
    <span />
    <a href="/about" aria-label="Our story">02</a>
    <a href="/projects" aria-label="Our destinations">03</a>
  </div>

  <a className="hero-scroll" href="#alpha-stats">
    <span className="hero-scroll-icon">↕</span>
    <span>SCROLL TO EXPLORE</span>
  </a>

  <div className="hero-signature-note">
    <span className="signature-line" />
    <span>
      DESIGNED WITH PURPOSE.
      <br />
      BUILT FOR LIFE.
    </span>
  </div>
</section>


      <section className="container stats">
        <div className="stat">
          <strong>15+</strong>
          <span>Years of Vision</span>
        </div>

        <div className="stat">
          <strong>12+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="stat">
          <strong>850+</strong>
          <span>Happy Families</span>
        </div>

        <div className="stat">
          <strong>4.8M+</strong>
          <span>Sq. Ft. Envisioned</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-label">
                SPACES WORTH DISCOVERING
              </span>

              <h2 className="section-title">
                More than a place.
                <br />
                A way of living.
              </h2>

              <p className="section-description">
                Explore a collection of distinctive destinations
                created around the way people want to live, connect
                and experience the world.
              </p>
            </div>

            <a href="/projects" className="btn btn-primary">
              VIEW ALL PROJECTS ↗
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
             
<article className="project-card" key={project.name}>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-image"
    aria-label={`View ${project.name}`}
  >
    <img
      src={project.image}
      alt={project.name}
      loading={index < 2 ? "eager" : "lazy"}
    />

    <span className="project-tag">{project.category}</span>

    <span className="project-status">{project.status}</span>
  </a>

  <div className="project-info">
    <span className="project-location">{project.location}</span>

    <div className="project-launch">{project.launch}</div>

    <h3>{project.name}</h3>

    <p>{project.description}</p>

    <div className="project-configuration">
      <span>CONFIGURATION</span>
      <strong>{project.configuration}</strong>
    </div>

  <div className="project-bottom">
  <Link
    href={`/projects/${project.slug}`}
    className="text-link"
  >
    VIEW DETAILS ↗
  </Link>
</div>
  </div>
</article>

            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant contemporary living space"
              loading="lazy"
            />

            <div className="about-image-note">
              <strong>01.</strong>
              <span>Thoughtful design. Meaningful living.</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-label">
              THE ALPHA PHILOSOPHY
            </span>

            <h2 className="section-title">
              We believe a space should make you feel something.
            </h2>

            <p>
              At Alpha Living, we see real estate as more than
              buildings and addresses. Every space is an opportunity
              to create comfort, connection and lasting memories.
            </p>

            <p>
              Our approach brings together considered architecture,
              practical functionality and a deep appreciation for
              the environment around us.
            </p>

            <a href="/about" className="btn btn-primary">
              OUR STORY ↗
            </a>
          </div>
        </div>
      </section>
         <Contactsection />
      <LegacyTimeline />
      <section className="section">
        <div className="container">
          <span className="section-label">
            WHAT SETS US APART
          </span>

          <h2 className="section-title">
            Built around what matters.
          </h2>

          <div className="features-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>
              <h3>Considered Design</h3>
              <p>
                Every detail is thoughtfully planned to balance
                aesthetics, function and everyday comfort.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">02</span>
              <h3>Meaningful Locations</h3>
              <p>
                Spaces selected for their surroundings, potential
                and connection to the world beyond your doorstep.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">03</span>
              <h3>Lasting Value</h3>
              <p>
                A long-term perspective that places quality,
                thoughtful planning and trust at the centre.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="section-label">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="section-title">
              Let&apos;s find a space that feels like yours.
            </h2>

            <p>
              Tell us what you are looking for. Our team can help
              you explore the right possibilities.
            </p>
          </div>

          <a href="/contact" className="btn btn-light">
            START A CONVERSATION ↗
          </a>
        </div>
      </section>

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
      Designed & Developed by Oyemarketor Pvt Ltd
    </span>
  </div>
</footer>

    </main>
  );
}
