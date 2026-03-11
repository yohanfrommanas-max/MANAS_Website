import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import manasLogo from "@assets/image_1773186734971.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-midnight-navy/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home-logo">
            <span className="flex items-center gap-2.5">
              <img
                src={manasLogo}
                alt="Manas logo"
                className="h-9 w-9 rounded-lg"
                data-testid="img-navbar-logo"
              />
              <span className="font-serif text-2xl font-bold tracking-wide text-off-white">
                manas
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location === link.href
                      ? "text-lavender"
                      : "text-off-white/70 hover:text-off-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact" data-testid="link-nav-cta">
              <span className="ml-4 inline-flex items-center rounded-full bg-lavender/10 px-5 py-2 text-sm font-semibold text-lavender ring-1 ring-lavender/20 transition-all duration-200 hover:bg-lavender/20 hover:ring-lavender/40">
                Join Waitlist
              </span>
            </Link>
          </div>

          <button
            className="md:hidden text-off-white/70 hover:text-off-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            id="mobile-nav-menu"
            className="border-t border-white/5 bg-midnight-navy/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                  <span
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-lavender bg-lavender/5"
                        : "text-off-white/70 hover:text-off-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact" data-testid="link-mobile-cta">
                <span
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-full bg-lavender/10 px-4 py-3 text-center text-sm font-semibold text-lavender ring-1 ring-lavender/20"
                >
                  Join Waitlist
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
