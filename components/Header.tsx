
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Projects", href: "/projects" },
  {
    label: "Our Company",
    children: [
      { label: "Our Values", href: "/values" },
      { label: "Careers", href: "/careers" },
      { label: "Be Our Partner", href: "/partner" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`lux-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="lux-nav">
          <Link
            href="/"
            className="lux-brand"
            aria-label="Alpha Living home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-symbol">A</span>
            <span className="brand-name">
              ALPHA<span className="brand-dot">.</span>
              <small>SPACES BEYOND ORDINARY</small>
            </span>
          </Link>

          <nav className="lux-links" aria-label="Main navigation">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                className="lux-nav-item"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.09 }}
              >
                {"children" in link && link.children ? (
                  <div className="company-dropdown">
                    <button
                      type="button"
                      className="lux-link company-trigger"
                      aria-expanded={companyOpen}
                      onClick={() => setCompanyOpen(!companyOpen)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={companyOpen ? "dropdown-rotated" : ""}
                      />
                      <span className="link-line" />
                    </button>

                    <div
                      className={`company-dropdown-menu ${
                        companyOpen ? "company-dropdown-open" : ""
                      }`}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="company-dropdown-link"
                          onClick={() => setCompanyOpen(false)}
                        >
                          {child.label}
                          <ArrowUpRight size={15} />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link className="lux-link" href={link.href}>
                    <span>{link.label}</span>
                    <span className="link-line" />
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <Link href="/contact" className="lux-enquire">
            <span>Begin a conversation</span>
            <span className="enquire-icon">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </Link>

          <button
            type="button"
            className="lux-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lux-mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="mobile-menu-inner">
              <span className="mobile-eyebrow">
                EXPLORE ALPHA LIVING
              </span>

              {links.map((link, index) => (
                <div key={link.label}>
                  {"children" in link && link.children ? (
                    <>
                      <button
                        type="button"
                        className="mobile-link mobile-company-button"
                        onClick={() => setCompanyOpen(!companyOpen)}
                        aria-expanded={companyOpen}
                      >
                        <span className="mobile-link-number">
                          0{index + 1}
                        </span>
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={companyOpen ? "dropdown-rotated" : ""}
                        />
                      </button>

                      <AnimatePresence>
                        {companyOpen && (
                          <motion.div
                            className="mobile-company-submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="mobile-company-link"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setCompanyOpen(false);
                                }}
                              >
                                {child.label}
                                <ArrowUpRight size={18} />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="mobile-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="mobile-link-number">
                        0{index + 1}
                      </span>
                      <span>{link.label}</span>
                      <ArrowUpRight size={20} strokeWidth={1.4} />
                    </Link>
                  )}
                </div>
              ))}

              <p className="mobile-menu-footer">
                THOUGHTFULLY DESIGNED. TIMELESSLY YOURS.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
