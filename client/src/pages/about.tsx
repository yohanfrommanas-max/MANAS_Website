import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import logoWithName from "@assets/Manas_Logo_with_name_1773184806884.jpg";
import manasLogo from "@assets/manas_logo_1773184806883.jpg";

const values = [
  {
    icon: Heart,
    title: "User-First Design",
    description:
      "Every decision starts with the user. We build experiences that feel intuitive, respectful, and genuinely helpful.",
  },
  {
    icon: Shield,
    title: "Evidence-Informed",
    description:
      "Our techniques are grounded in cognitive science, mindfulness research, and established wellness practices.",
  },
  {
    icon: Sparkles,
    title: "Craft & Beauty",
    description:
      "We believe wellness tools should feel luxurious. Premium design isn't a feature, it's our standard.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Innovation",
    description:
      "We use AI and technology purposefully to enhance human potential, not replace human effort.",
  },
];

const team = [
  {
    name: "Coming Soon",
    role: "Founder & CEO",
    accent: "bg-lavender/10 text-lavender",
  },
  {
    name: "Coming Soon",
    role: "Head of Design",
    accent: "bg-sage/10 text-sage",
  },
  {
    name: "Coming Soon",
    role: "Lead Engineer",
    accent: "bg-manas-rose/10 text-manas-rose",
  },
  {
    name: "Coming Soon",
    role: "Wellness Advisor",
    accent: "bg-manas-indigo/10 text-manas-indigo",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-midnight-navy">
      <SEOHead
        title="About - Manas | Our Mission to Restore Mental Clarity"
        description="Manas was born to combat digital overload. Learn about our mission, vision, values, and the team building the most trusted companion for daily mental fitness."
      />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute right-1/4 top-1/3">
            <div className="h-[400px] w-[400px] rounded-full bg-sage/5 blur-[120px]" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.img
              src={manasLogo}
              alt="Manas logo"
              className="mx-auto mb-6 h-16 w-16 rounded-2xl shadow-lg shadow-lavender/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="img-about-logo"
            />
            <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sage ring-1 ring-sage/20" data-testid="badge-about">
              <Compass size={14} />
              About Manas
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-off-white md:text-5xl lg:text-6xl" data-testid="text-about-title">
              Built for the
              <span className="block bg-gradient-to-r from-sage to-lavender bg-clip-text text-transparent">
                Modern Mind
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-misty-gray" data-testid="text-about-description">
              In an era of infinite scrolling, AI dependency, and digital overwhelm,
              we're building the antidote: a premium wellness companion that helps
              you reclaim your mental clarity, one mindful moment at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="rounded-2xl border border-sage/20 bg-gradient-to-br from-sage/5 to-transparent p-8 md:p-12" data-testid="section-story">
                <h2 className="font-serif text-2xl font-bold text-off-white md:text-3xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-misty-gray">
                  <p>
                    Manas was born from a simple observation: the very technology that
                    promises to make us smarter is quietly eroding our ability to think
                    deeply, focus clearly, and process emotions authentically.
                  </p>
                  <p>
                    Short-form content has shortened our attention spans. AI does our
                    thinking before we get the chance to. The always-connected lifestyle
                    has made genuine stillness feel almost impossible. We watched these
                    patterns in ourselves and the people around us, and knew something
                    needed to change.
                  </p>
                  <p>
                    The name <em className="text-off-white font-serif">Manas</em> comes from
                    Sanskrit, meaning <em className="text-sage">"mind"</em> or <em className="text-sage">"soul"</em>.
                    It reflects our belief that mental wellness isn't about
                    productivity hacks or quick fixes. It's about nurturing the
                    fundamental essence of who we are.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 flex justify-center"
                >
                  <img
                    src={logoWithName}
                    alt="Manas brand logo with name"
                    className="max-w-[280px] rounded-xl"
                    data-testid="img-logo-with-name"
                  />
                </motion.div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-lavender/20 bg-gradient-to-br from-lavender/5 to-transparent p-8"
                  data-testid="section-vision"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-lavender/10 p-2.5 text-lavender">
                      <Eye size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-off-white">Vision</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-misty-gray">
                    To become the most trusted companion for daily mental fitness. As
                    intuitive as a meditation cushion, as powerful as a personal
                    wellness coach.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl border border-sage/20 bg-gradient-to-br from-sage/5 to-transparent p-8"
                  data-testid="section-mission"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-sage/10 p-2.5 text-sage">
                      <Compass size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-off-white">Mission</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-misty-gray">
                    Deliver a beautifully crafted, evidence-informed app that meets
                    users wherever they are on their wellness journey and gently guides
                    them toward clarity, calm, and cognitive strength.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Guides Us"
            description="These principles shape every feature we build, every interaction we design, and every decision we make."
            accentColor="lavender"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                data-testid={`card-value-${index}`}
              >
                <div className="mx-auto inline-flex rounded-xl bg-lavender/10 p-3 text-lavender">
                  <value.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-off-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-misty-gray">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="The Team"
            title="People Behind Manas"
            description="A small team of wellness enthusiasts, designers, and engineers united by a shared belief in the power of mental fitness."
            accentColor="rose"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
                data-testid={`card-team-${index}`}
              >
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${member.accent}`}>
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-off-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-misty-gray">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-sage/20 bg-gradient-to-br from-sage/10 via-midnight-deep to-lavender/5 p-12 text-center md:p-20"
            data-testid="section-about-cta"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="h-[300px] w-[600px] rounded-full bg-sage/5 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-bold text-off-white md:text-4xl">
                Join Us on This Journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-misty-gray">
                Be among the first to experience Manas. Sign up for early access and help us shape the future of mental wellness.
              </p>
              <div className="mt-8">
                <Link href="/contact" data-testid="button-about-cta">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3.5 text-sm font-semibold text-midnight-navy transition-all duration-200 hover:bg-sage/90 hover:shadow-lg hover:shadow-sage/20">
                    Get Early Access
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
