
"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Where It All Began",
    text: "A vision to create thoughtful spaces and redefine modern living.",
  },
  {
    year: "2021",
    title: "Building Our Foundation",
    text: "Establishing our values around quality, design, and customer experience.",
  },
  {
    year: "2022",
    title: "A New Chapter",
    text: "Bringing fresh ideas and a contemporary approach to residential living.",
  },
  {
    year: "2023",
    title: "Growing Together",
    text: "Expanding our vision to create connected and inspiring communities.",
  },
  {
    year: "2024",
    title: "Beyond Expectations",
    text: "Exploring new possibilities through thoughtful planning and innovation.",
  },
  {
    year: "2025",
    title: "A Vision Expands",
    text: "Taking ambitious steps toward the future of modern living.",
  },
  {
    year: "2026",
    title: "The Journey Continues",
    text: "Creating lasting value through spaces designed for generations.",
  },
];

export default function LegacyTimeline() {
  return (
    <section className="alpha-legacy" id="legacy">
      <div className="alpha-legacy-inner">
        {/* Section introduction */}
        <motion.div
          className="alpha-legacy-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="alpha-legacy-eyebrow">
            <span className="alpha-legacy-eyebrow-line" />
            OUR JOURNEY · SINCE 2020
          </span>

          <h2>
            Every era leaves
            <br />
            <em>a legacy.</em>
          </h2>

          <p>
            Every milestone tells a story. Discover the moments
            that continue to shape our vision for better living.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="alpha-legacy-list">
          {milestones.map((item, index) => (
            <motion.article
              key={item.year}
              className="alpha-legacy-item"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
            >
              <div className="alpha-legacy-year">
                <span>{item.year}</span>
                <span className="alpha-legacy-dot" />
              </div>

              <div className="alpha-legacy-content">
                <span className="alpha-legacy-number">
                  MILESTONE {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className="alpha-legacy-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="alpha-legacy-footer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="alpha-legacy-footer-symbol">✳</span>

          <div>
            <p>THE BEST IS YET TO COME.</p>
            <small>Our next chapter starts with you.</small>
          </div>

          <span className="alpha-legacy-footer-year">EST. 2020</span>
        </motion.div>
      </div>
    </section>
  );
}