import { Link } from "wouter";
import { SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import manasLogo from "@assets/image_1773186734971.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Brain Training", href: "/features" },
    { label: "Breathwork", href: "/features" },
    { label: "Sleep", href: "/features" },
    { label: "Journal", href: "/features" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about" },
  ],
  Resources: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "FAQ", href: "/features" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5" data-testid="text-footer-logo">
              <img src={manasLogo} alt="Manas logo" className="h-8 w-8 rounded-lg" data-testid="img-footer-logo" />
              <span className="font-serif text-2xl font-bold text-off-white">
                manas
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-misty-gray">
              Your trusted companion for daily mental fitness. As intuitive as a
              meditation cushion, as powerful as a personal wellness coach.
            </p>
            <p className="mt-2 text-xs italic text-lavender/60">
              Sanskrit: mind &middot; soul
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                aria-label="X"
                data-testid="link-social-x"
              >
                <SiX size={18} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-misty-gray transition-colors hover:bg-lavender/10 hover:text-lavender"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-off-white/50">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="text-sm text-misty-gray transition-colors hover:text-off-white">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-misty-gray/60">
            &copy; {new Date().getFullYear()} Manas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
